import * as Yup from "yup";

export default Yup.object().shape({
    name: Yup.string()
        .min(3, "Preencha com seu nome completo")
        .required("Preencha com seu nome completo"),
    email: Yup.string()
        .email("Preencha com um e-mail válido")
        .required("Preencha com um e-mail válido"),
});
