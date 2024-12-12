import React from "react";

const NewsletterSuccess = ({ handleReset }) => (
  <section className="newsletter__success" aria-labelledby="newsletter__success__title">
    
      <h2  className="newsletter__success__title">
        Seu e-mail foi cadastrado com sucesso!
      </h2>
   
    <p className="newsletter__success__message">
      A partir de agora você receberá as novidades e ofertas exclusivas.
    </p>
    <footer className="newsletter__success__footer">
      <button
        className="newsletter__success__newSubmit"
        onClick={handleReset}
        type="button"
      >
        Cadastrar novo e-mail
      </button>
    </footer>
  </section>
);

export default NewsletterSuccess;