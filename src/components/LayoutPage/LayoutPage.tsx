import {FC} from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header/Header.tsx";


const LayoutPage: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default LayoutPage;