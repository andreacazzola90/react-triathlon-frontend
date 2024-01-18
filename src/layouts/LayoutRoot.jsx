import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const LayoutRoot = () => {
  return (
    <>
      <div className="  ">
          <Navbar />
          <Outlet />
      </div>
    </>
  );
};

export default LayoutRoot;
