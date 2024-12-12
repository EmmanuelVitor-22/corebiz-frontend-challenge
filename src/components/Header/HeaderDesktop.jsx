import React from "react";
import search from "../../assets/icons/magnifying-glass 1.svg"
import user from "../../assets/icons/user 1.svg"
import "./header.scss";
import CartIcon from "../Cart/Cart";

const HeaderDesktop = ({ image, textAlternative }) => {
  return (
    <header className="header header--desktop">
      <div className="header__content">
        <div className="header__logo">
          <a href="/">
            <img src={image} alt={textAlternative} /></a>
        </div>
        <div className="header__search-bar">
          <input type="text" placeholder="O que está procurando?" />
          <button className="header__search-icon">
            <img src={search} alt="Ícone de busca" />
          </button>
        </div>
        <div className="header__account">
          <a href="/">
            <span className="header__account-icon">
              <img src={user} alt="Ícone de usuário" />
            </span>
            <span className="header__account-text">Minha Conta</span>
          </a>
        </div>
        <CartIcon/>
      </div>
    </header>
  );
};

export default HeaderDesktop;
