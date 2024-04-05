import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { registerSchema } from "./Shemas";

const RegisterFormFormik = ({ onRegister }) => {
  const country = [
    "usa",
    "ukraine",
    "france",
    "germany",
    "italy",
    "china",
    "japan",
  ];

  const handleSubmit = (values, options) => {
    //   onRegister(values); звичайний варіант нижче додано 2 додаткових значення у вигляді id та автору
    onRegister({ ...values, id: nanoid(), author: "Formik" });
    options.resetForm();
  };
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmedpassword: "",
    age: "",
    country: "usa",
    rules: "false",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      {({ values }) => (
        <Form className="form">
          <label className="label">
            Name:
            <Field
              type="text"
              placeholder="Enter your username..."
              name="username"
              className="input"
            />
            <ErrorMessage className="error" component="span" name="username" />
          </label>
          <Field
            type="text"
            placeholder="Enter your email..."
            name="email"
            className="input"
          />
          <ErrorMessage className="error" component="span" name="email" />
          <Field
            type="password"
            placeholder="Enter your password..."
            name="password"
            className="input"
          />
          <ErrorMessage className="error" component="span" name="password" />
          <Field
            type="password"
            placeholder="Confirm your password..."
            name="confirmdpassword"
            className="input"
          />
          <ErrorMessage
            className="error"
            component="span"
            name="confirmdpassword"
          />
          <Field
            type="number"
            placeholder="Enter your age, please! It's required..."
            name="age"
            className="input"
          />
          <ErrorMessage className="error" component="span" name="age" />
          <Field as="select" name="country" className="input">
            {country.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
            {/* <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="ukraine">Ukraine</option> */}
          </Field>
          <ErrorMessage className="error" component="span" name="country" />
          <Field
            as="textarea"
            cols="10"
            rows="5"
            name="message"
            className="input"
          ></Field>
          <label>
            <Field type="radio" name="gender" value="male" />
            Male
          </label>
          <label>
            <Field type="radio" name="gender" value="female" />
            Female
          </label>
          <label>
            <Field type="checkbox" name="rules" />I uderstand life
            <ErrorMessage className="error" component="span" name="rules" />
          </label>
          <button disabled={!values.rules} type="submit" className="btn border">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterFormFormik;
