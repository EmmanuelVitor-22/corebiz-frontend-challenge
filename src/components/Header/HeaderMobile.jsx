import React from "react";
import search from "../../assets/icons/magnifying-glass 1.svg";
import menuHamburguer from "../../assets/icons/menu-hamburguer.svg";
import "./header.scss";
import CartIcon from "../Cart/Cart";

const HeaderMobile = ({image, textAlternative}) => {
  return (
    <header className="header header--mobile">
      <div className="header__content header__content--mobile">
        <button className="header__menu-icon">
        <img src={menuHamburguer} alt="Ícone de busca" />
        </button>
        <div className="header__logo">
        <a href="/">
        <img src={image} alt={textAlternative} /></a>
        </div>
        <CartIcon/>
      </div>
      <div className="header__search-bar">
          <input type="text" placeholder="O que está procurando?" />
          <button className="header__search-icon">
            <img src={search} alt="Ícone de busca" />
          </button>
        </div>
    </header>
  );
};

export default HeaderMobile;

