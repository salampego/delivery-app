import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductById,
  getProductList,
} from "../../redux/products/operations";
import { getItem, getLoading, getMenu } from "../../redux/selectors";
import { Loader } from "../../components/Loader/Loader";
import "./Shop.css";
import { ProductList } from "../../components";

export const Shop = () => {
  const dispatch = useDispatch();
  const item = useSelector(getItem);
  const isLoad = useSelector(getLoading);
  const menu = useSelector(getMenu);

  const [idRestraunt, setIdRestraunt] = useState("");

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  useEffect(() => {
    if (idRestraunt) {
      dispatch(getProductById(idRestraunt));
    }
  }, [idRestraunt, dispatch]);

  return isLoad ? (
    <Loader />
  ) : (
    <section className="shop">
      <div className="container">
        <div className="shop__wrapper">
          <ul className="restraunt__list">
            {item.data
              ? item.data.delivery.map(({ _id, name }) => {
                  return (
                    <li key={_id} className="restraunt__item">
                      <button
                        type="button"
                        className="restraunt__item--btn"
                        onClick={() => setIdRestraunt(_id)}
                      >
                        {name}
                      </button>
                    </li>
                  );
                })
              : null}
          </ul>

          <div className="productlist--wrapper">
            <ProductList productMenu={menu.data} />
          </div>
        </div>
      </div>
    </section>
  );
};
