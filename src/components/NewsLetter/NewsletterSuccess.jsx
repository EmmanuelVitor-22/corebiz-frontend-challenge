import React from "react";

const NewsletterSuccess = ({ handleReset }) => (
  <section className="newsletter-success" aria-labelledby="newsletter-success__title">
    <header className="newsletter-success__header">
      <h1 id="newsletter-success__title" className="newsletter-success__title">
        Seu e-mail foi cadastrado com sucesso!
      </h1>
    </header>
    <p className="newsletter-success__message">
      A partir de agora você receberá as novidades e ofertas exclusivas.
    </p>
    <footer className="newsletter-success__footer">
      <button
        className="newsletter-success__button"
        onClick={handleReset}
        type="button"
      >
        Cadastrar novo e-mail
      </button>
    </footer>
  </section>
);

export default NewsletterSuccess;