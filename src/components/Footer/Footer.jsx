import React from "react";
import envelope from "../../assets/icons/envelope.svg";
import headphone from "../../assets/icons/headphone.svg";
import logoFooter from "../../assets/images/logo-corebiz-footer.svg";
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
      <section className="footer__contact">
        <button className="footer__button footer__button--contact">
          <a className="footer__button-content" href="mailto:brasil@corebiz.ag" title="ENTRE EM CONTATO">
            <img
              className="footer__icon"
              src={envelope}
              alt="Email"
            />
            <p className="footer__text">ENTRE EM CONTATO</p>
          </a>
        </button>
        <button className="footer__button footer__button--consultant">
          <a className="footer__button-content" href="tel:+55 11 3090 1039" title="FALE COM O NOSSO CONSULTOR ONLINE">
            <img
              className="footer__icon"
              src={headphone}
              alt="Consultor Online"
            />
            <p className="footer__text">
              FALE COM O NOSSO CONSULTOR ONLINE
            </p>
          </a>
        </button>
      </section>
      <div className="footer__container">
        <section className="footer__location">
          <address className="footer__address">
            <h3 className="footer__title">Localização</h3>
            <hr className="divider" />
            <div className="footer__address-info">
              <p className="footer__address-text">Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphavile SP</p>
              <p className="footer__address-text">brasil@corebiz.ag</p>
              <p className="footer__address-text">+55 11 3090 1039</p>
            </div>
          </address>
        </section>
      </div>
      </div>

      <div className="footer__logo-container">
          <span>Created by</span>
          <img
            className="footer__logo"
            src={logoFooter}
            alt="Logo Footer"
          />
        </div>

    </footer>
  );
};

export default Footer;

