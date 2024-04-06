import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import * as Yup from "yup";

const AddForm = ({ addBook }) => {
  const addSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(100, "Too long")
      .required("Required"),
    author: Yup.string()
      .min(3, "Too short")
      .max(25, "Too long")
      .required("Required"),
    description: Yup.string()
      .min(3, "Too short")
      .max(255, "Too long")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    author: "",
    description: "",
    liked: false,
  };

  const handleSubmit = (data, options) => {
    addBook({ ...data, id: nanoid() });
    options.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addSchema}
    >
      <Form className="form addForm">
        <label className="label">
          Book name:
          <Field
            type="text"
            name="name"
            className="input"
            placeholder="Enter name"
          />
          <ErrorMessage component="span" className="red" name="name" />
        </label>
        <label className="label">
          Book author:
          <Field
            type="text"
            name="author"
            className="input"
            placeholder="Enter name"
          />
          <ErrorMessage component="span" className="red" name="author" />
        </label>
        <label className="label">
          Description:
          <Field
            as="textarea"
            rows="3"
            cols="20"
            name="description"
            className="input"
            placeholder="Enter name"
          />
          <ErrorMessage component="span" className="red" name="description" />
        </label>
        <button type="submit" className="btn border">
          Add book
        </button>
      </Form>
    </Formik>
  );
};

export default AddForm;
