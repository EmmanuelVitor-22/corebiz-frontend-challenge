import React from "react";
import { useMediaQuery } from "react-responsive";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import logo from "../../assets/images/site-logo-corebiz-preto-cinza.svg"
import "./header.scss";
import BannerCarroussel from "../Carroussel/BannerCarroussel/BannerCarroussel";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isMobile ? (
        <HeaderMobile image={logo} textAlternative="logomarca da corebiz" />
      ) : (
        <HeaderDesktop image={logo} textAlternative="logomarca da corebiz" />
      )}
      <BannerCarroussel />
    </>
  );
};

export default Header;

