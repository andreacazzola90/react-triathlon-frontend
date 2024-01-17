import { deleteCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import HeaderTitle from "../components/HeaderTitle";
import Logo from "../components/Logo";

export default function Registrazione() {
  const [initSku, setInitSku] = useState("");

  const navigate = useNavigate();
  const [showQRCode, setShowQRCode] = useState(false);
  const isQrCodeView = getCookie("isQrCodeView");
  useEffect(() => {
    if (isQrCodeView == "true") {
      setShowQRCode(true);
      deleteCookie("isQrCodeView");
    } else {
      navigate("/registrazione");
    }

    setInitSku(v4());
  }, []);

  const imgQrCode = (
    <div className="d-flex justify-center max-w-full">
      <QRCode
        id="qrCodeimage"
        value={initSku}
        style={{ aspectRatio: "1/1", maxWidth: "100%", height: "auto" }}
        size={500}
      />
    </div>
  );

  const downloadQrCode = () => {
    var canvas: any = document.getElementById("qrCodeimage");
    var url = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.download = "filename.png";
    link.href = url;
    link.click();
  };

  return (
    <main className="flex flex-col items-center ">
      {showQRCode && (
        <>
          <Logo />
          <HeaderTitle
            title="Welcome runner!"
            description="ciao <span class='text-red'>come stai</span><br /> io molto bene"
          />

          {imgQrCode}

          <button onClick={() => downloadQrCode()} className="btn">
            Download QR-code
          </button>
        </>
      )}
    </main>
  );
}
