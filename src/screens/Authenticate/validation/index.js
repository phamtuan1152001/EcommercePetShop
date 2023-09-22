import * as yup from "yup";

const phoneRegex = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .email("Please enter a valid email")
    .required("Email address is Required"),
  password: yup
    .string()
    .nullable()
    .required("Password is required")
    .matches(phoneRegex, "Please enter a valid password"),
});
