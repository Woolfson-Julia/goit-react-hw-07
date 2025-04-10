import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from '../../redux/contactsOps';
import css from "./ContactForm.module.css"

export default function ContactForm() {
  
  const dispatch = useDispatch();
  const fieldId = nanoid();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  
  return (
    <Formik
      initialValues={{name: '', number: ''}}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label className={css.text} htmlFor={`${fieldId}-name`}>
            Name
          </label>
          <Field type="text" name="name" id={`${fieldId}-name`}></Field>
          <ErrorMessage
            className={css.span}
            name="name"
            component="span"
          ></ErrorMessage>
        </div>
        <div className={css.container}>
          <label className={css.text} htmlFor={`${fieldId}-number`}>
            Number
          </label>
          <Field type="tel" name="number" id={`${fieldId}-number`}></Field>
          <ErrorMessage
            className={css.span}
            name="number"
            component="span"
          ></ErrorMessage>
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
