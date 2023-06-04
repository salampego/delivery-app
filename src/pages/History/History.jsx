import * as yup from "yup";
import "./History.css";
import { Formik, Field, ErrorMessage } from "formik";
import { FindOrderList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getLoadingBasket } from "../../redux/selectors";
import { Loader } from "../../components/Loader/Loader";
import { findOrder } from "../../redux/basket/operations";

const History = () => {
  const dispatch = useDispatch();
  const isLoad = useSelector(getLoadingBasket);

  const schema = yup.object().shape({
    phone: yup.string().required(),
    email: yup.string().email().required(),
  });

  const initialValues = {
    phone: "",
    email: "",
  };

  const onSubmit = (values, { resetForm }) => {
    const { email, phone } = values;
    dispatch(findOrder({ email, phone }));
    resetForm();
  };

  return isLoad ? (
    <Loader />
  ) : (
    <section className="history">
      <div className="container">
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={initialValues}
        >
          {({ handleSubmit }) => (
            <form className="history__form" onSubmit={handleSubmit}>
              <div className="history__form-wrapper">
                <div className="history__item">
                  <label className="history__label" htmlFor="address">
                    Phone:
                    <Field
                      type="text"
                      name="phone"
                      className="history__input"
                      placeholder="Phone"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="error-message"
                    />
                  </label>
                </div>
                <div className="history__item">
                  <label className="history__label" htmlFor="email">
                    Email:
                    <Field
                      type="email"
                      name="email"
                      className="history__input"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </label>
                </div>
              </div>
              <div className="history__submit-wrapper">
                <button type="submit" className="history__submit-btn">
                  Search order
                </button>
              </div>
            </form>
          )}
        </Formik>
        <FindOrderList />
      </div>
    </section>
  );
};

export default History;