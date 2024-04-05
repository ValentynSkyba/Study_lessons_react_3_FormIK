import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .required("Name is required")
    .min(3, "Name must be more than 3 symbols")
    .max(20, "Name must be less than 20 symbols"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  age: Yup.number()
    .positive("Field must be positive")
    .min(14, "Age must be more than 14")
    .max(60, "Age must be less than 60")
    .required("Age is required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
  confirmdpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  country: Yup.string()
    .oneOf(["usa", "ukraine", "france"], "Country is not valid")
    .required("Required"),
  rules: Yup.boolean().oneOf([true], "You must accept the rules"),
});
export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});
