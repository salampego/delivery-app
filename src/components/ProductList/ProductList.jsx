import { useDispatch } from "react-redux";
import "./ProductList.css";
import { Toaster, toast } from "react-hot-toast";
import { addToBasket } from "../../redux/basket/sliceBasket";

export const ProductList = ({ productMenu }) => {
  const dispatch = useDispatch();

  if (!productMenu) {
    return null;
  }

  return (
    <ul className="product__list">
      {productMenu.menu.products.map(({ _id, photo, name, price }) => {
        const notify = () => toast.success(`${name} added to basket`);

        return (
          <li key={_id} className="product__item">
            <img src={photo} alt={name} className="product__item-photo" />
            <div className="product__info">
              <div className="product_name-contain">
                <h3 className="product__name">{name}</h3>
                <p>{price}$</p>
              </div>
              <button
                type="button"
                className="product__info-btn"
                onClick={() => {
                  dispatch(
                    addToBasket({ _id, name, price, photo, quantity: 1 })
                  );
                  notify();
                }}
              >
                Add to cart
              </button>
            </div>
          </li>
        );
      })}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            marginLeft: "auto",
            marginRight: "1rem",
          },
        }}
      />
    </ul>
  );
};
