import React, { useState } from "react";
import NewsletterForm from "./NewsletterForm";
import NewsletterSuccess from "./NewsletterSuccess";
import { postNewsletter } from "../../services/newsletterService";
import "./newsLetter.scss";

const Newsletter = ({ titleNewsLetter }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await postNewsletter(values);
      if (response.status === 200) {
        setIsSubmitted(true);
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    } finally {
      setSubmitting(false); // Certifique-se de que o isSubmitting é atualizado
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__wrapper">
        {isSubmitted ? (
          <NewsletterSuccess handleReset={handleReset} />
        ) : (
          <>
            <h3 className="newsletter__title">{titleNewsLetter}</h3>
            <NewsletterForm handleSubmit={handleSubmit} />
          </>
        )}
      </div>
    </section>
  );
};

export default Newsletter;