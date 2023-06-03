import { useDispatch, useSelector } from "react-redux";
import "./OrederList.css";
import { getBasket } from "../../redux/selectors";
import {
  decreaseQuantity,
  increaseQuantity,
  removeOrderById,
} from "../../redux/basket/sliceBasket";

export const OrderList = () => {
  const dispatch = useDispatch();
  const basket = useSelector(getBasket);

  return (
    <ul className="order__list">
      {basket.map(({ _id, name, photo, price, quantity }) => {
        return (
          <li key={_id} className="order__item">
            <div className="order__photo">
              <img src={photo} alt={name} width="200" height="180" />
            </div>
            <div className="order__info">
              <div>
                <h3 className="order__title">{name}</h3>
                <p>{Number(price).toFixed(2)}$</p>
              </div>
              <div className="order__quantity">
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="order__quantity-input"
                />
                <button
                  type="button"
                  className="order__quantity-btn order__quantity-increase"
                  onClick={() => {
                    dispatch(increaseQuantity(_id));
                  }}
                >
                  +
                </button>
                <button
                  type="button"
                  className="order__quantity-btn order__quantity-decrease"
                  onClick={() => {
                    dispatch(decreaseQuantity(_id));
                  }}
                >
                  -
                </button>
              </div>
              <div className="order__remove-wrapper">
                <button
                  className="order__remove-btn"
                  onClick={() => {
                    dispatch(removeOrderById(_id));
                  }}
                >
                  Delete order
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
