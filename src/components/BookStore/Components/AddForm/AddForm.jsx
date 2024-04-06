import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

const AddForm = ({ addBook }) => {
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="form addForm">
        <label className="label">
          Book name:
          <Field
            type="text"
            name="name"
            className="input"
            placeholder="Enter name"
          />
        </label>
        <label className="label">
          Book author:
          <Field
            type="text"
            name="author"
            className="input"
            placeholder="Enter name"
          />
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
        </label>
        <button type="submit" className="btn border">
          Add book
        </button>
      </Form>
    </Formik>
  );
};

export default AddForm;
