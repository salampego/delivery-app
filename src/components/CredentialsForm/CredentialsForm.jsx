import { Field, ErrorMessage } from "formik";
import "./CredentialsForm.css";

export const CredentialsForm = () => {
  return (
    <ul className="credentials__list">
      <li className="credentials__item">
        <label className="credentials__label" htmlFor="address">
          Address:
          <Field
            type="text"
            name="address"
            className="credentials__input"
            placeholder="Address"
          />
          <ErrorMessage
            name="address"
            component="div"
            className="error-message"
          />
        </label>
      </li>
      <li className="credentials__item">
        <label className="credentials__label" htmlFor="email">
          Email:
          <Field
            type="email"
            name="email"
            className="credentials__input"
            placeholder="Email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </label>
      </li>
      <li className="credentials__item">
        <label className="credentials__label" htmlFor="phone">
          Phone:
          <Field
            type="text"
            name="phone"
            className="credentials__input"
            placeholder="Phone"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="error-message"
          />
        </label>
      </li>
      <li className="credentials__item">
        <label className="credentials__label" htmlFor="name">
          Name:
          <Field
            type="text"
            name="name"
            className="credentials__input"
            placeholder="Name"
          />
          <ErrorMessage name="name" component="div" className="error-message" />
        </label>
      </li>
    </ul>
  );
};
