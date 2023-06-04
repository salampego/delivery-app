import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { CredentialsForm, OrderList } from "../../components";
import "./ShoppingCart.css";
import { getBasket, getError } from "../../redux/selectors";
import { Toaster, toast } from "react-hot-toast";
import { createOrder } from "../../redux/basket/operations";
import { removeOrder } from "../../redux/basket/sliceBasket";
import { Formik } from "formik";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required(),
    address: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
    totalPrice: yup.number(),
    date: yup.date(),
    products: yup.array().of(
      yup.object().shape({
        name: yup.string(),
        price: yup.number(),
        photo: yup.string(),
        quantity: yup.number(),
      })
    ),
  });

  const initialValues = {
    name: "",
    address: "",
    phone: "",
    email: "",
  };

  const basket = useSelector(getBasket);
  const error = useSelector(getError);
  const totalPrice = basket.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  const onSubmit = (values, { resetForm }) => {
    const { name, address, phone, email } = values;

    const order = basket.map((item) => {
      const updatedItem = { ...item };
      delete updatedItem._id;
      delete updatedItem.initialPrice;
      return updatedItem;
    });

    if (totalPrice === 0) {
      notifyError();
      return;
    }

    schema
      .validate({
        name,
        address,
        phone,
        email,
        totalPrice,
        products: order,
        date: new Date().toLocaleDateString(),
      })
      .then(() => {
        dispatch(
          createOrder({
            name,
            address,
            phone,
            email,
            totalPrice,
            products: order,
            date: new Date().toLocaleDateString(),
          })
        );
        if (!error) {
          dispatch(removeOrder());
        }
        resetForm();
        notify();
      })
      .catch((error) => {
        console.error(error);
        notifyError();
      });
  };

  const notify = () =>
    toast.success(`Your order is being processed, we will contact you soon`);

  const notifyError = () => toast.error("Something went wrong with the order");

  return (
    <section className="shoppingCart">
      <div className="container">
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={initialValues}
        >
          {({ handleSubmit }) => (
            <form className="basket__form" onSubmit={handleSubmit}>
              <div className="basket__form-wrapper">
                <CredentialsForm />
                <OrderList />
              </div>
              <div className="basket__totalprice">
                <p>Total price: {Number(totalPrice).toFixed(2)}$</p>
                <button type="submit" className="basket__submit-btn">
                  Pay for the order
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <Toaster />
    </section>
  );
};

export default ShoppingCart;
