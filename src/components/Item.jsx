import "./item.css";
import { useDispatch } from "react-redux";

function Item({ id, title, image, price, cart, setCart }) {
  return (
    <div className="item">
      <div className="item__info">
        <p className="item__title"> {title} </p>{" "}
        <p className="item__price">
          <small> $ </small> <strong> {price} </strong>{" "}
        </p>{" "}
      </div>{" "}
      <img src={image} alt="item" />
      <button
        onClick={() => {
          const itemInCart = cart.find((item) => item.id === id);
          if (itemInCart) {
            setCart(
              cart.map((item) => {
                if (item.id === itemInCart.id) {
                  return { ...item, quantity: item.quantity + 1 };
                } else {
                  return item;
                }
              })
            );
          } else {
            setCart([
              ...cart,
              {
                id,
                title,
                image,
                price,
                quantity: 1,
              },
            ]);
          }
        }}
      >
        Add to Cart{" "}
      </button>{" "}
    </div>
  );
}

export default Item;
