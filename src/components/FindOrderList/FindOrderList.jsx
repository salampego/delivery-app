import { useSelector } from "react-redux";
import "./FindOrderList.css";
import { getHistoryOrder } from "../../redux/selectors";
import moment from "moment/moment";

export const FindOrderList = () => {
  const data = useSelector(getHistoryOrder);

  if (!data) {
    return null;
  }

  return (
    <div className="findOrderList">
      {data.data.order.map(
        ({ totalPrice, date, name, address, phone, email, ...item }) => {
          return (
            <div className="findOrderList-List" key={item._id}>
              <div>
                {item.products.map(({ _id, photo, name, price, quantity }) => {
                  return (
                    <div className="findOrderList-wrapper" key={_id}>
                      <div className="findOrderList__item">
                        <div className="findOrderList__item-photo">
                          <img
                            src={photo}
                            alt={name}
                            width="200"
                            height="180"
                          />
                        </div>
                        <div className="findOrderList__item-info">
                          <div>
                            <h3 className="findOrderList__item-title">
                              {name}
                            </h3>
                            <p>{Number(price).toFixed(2)}$</p>
                            <p>quantity:{quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="findOrderList__info">
                <p className="findOrderList__info-title">Name: {name}</p>
                <p className="findOrderList__info-title">Email: {email}</p>
                <p className="findOrderList__info-title">Phone: {phone}</p>
                <p className="findOrderList__info-title">Address: {address}</p>
                <p className="findOrderList__info-title">
                  Total price: {Number(totalPrice).toFixed(2)}$
                </p>
                <p className="findOrderList__info-title">
                  Data: {moment(date).format("L")}
                </p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
