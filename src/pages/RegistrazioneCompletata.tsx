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
    <div className="d-flex justify-center max-w-full w-56">
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
    link.download = "data-luogo.png";
    link.href = url;
    link.click();
  };

  return (
    <main className="flex flex-col items-center ">
      {showQRCode && (
        <>
          <Logo />
          <HeaderTitle title="Welcome to" />
          <p>Ciao "Nome"</p>
          <p>TI ASPETTIAMO IN "DATA"</p>
          <p>"NOME EVENTO" "LUOGO"</p>
          <p>
            <b>Mostra IL QR-CODE</b> agli stand e vivi una{" "}
            <b>nuova esperienze di corsa.</b>
          </p>
          <img src="/the-running-lab-logo.svg" className={"py-5 w-44"}></img>
          {imgQrCode}

          <button
            onClick={() => downloadQrCode()}
            className="btn uppercase btn-dark max-w-32 my-5"
          >
            Download QR-code
          </button>
          <button
            onClick={() => downloadQrCode()}
            className="btn uppercase btn-light max-w-32  mb-5"
          >
            Prenota la scarpa
          </button>
          <button
            onClick={() => downloadQrCode()}
            className="btn uppercase btn-light max-w-32  mb-5"
          >
            iscriviti alle attivià
          </button>
        </>
      )}
    </main>
  );
}
