import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import NewsLetterFormSchema from "../../schema/NewsLetteFormSchema";

const NewsletterForm = ({ handleSubmit }) => (
  <Formik
    initialValues={{ name: "", email: "" }}
    validationSchema={NewsLetterFormSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting }) => (
      <Form className="newsletter__form">
        <div className="newsletter__form__group">
          <Field
            className="newsletter__form__input"
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="newsletter__form__error"
          />
        </div>
        <div className="newsletter__form__group">
          <Field
            className="newsletter__form__input"
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="newsletter__form__error"
          />
        </div>
        <button
          className="newsletter__form__submit"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Eu quero!"}
        </button>
      </Form>
    )}
  </Formik>
);

export default NewsletterForm;