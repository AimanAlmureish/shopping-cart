import "./cartItem.css";

function CartItem({ id, image, title, price, quantity = 0, cart, setCart }) {
  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt="item" />
      <div className="cartItem__info">
        <p className="cartItem__title"> {title} </p>{" "}
        <p className="cartItem__price">
          <small> $ </small> <strong> {price} </strong>{" "}
        </p>{" "}
        <div className="cartItem__incrDec">
          <button
            onClick={() => {
              const item = cart.find((item) => item.id === id);
              if (item.quantity === 1) {
                item.quantity = 1;
              } else {
                setCart(
                  cart.map((itemInCart) => {
                    if (itemInCart.id === item.id) {
                      return {
                        ...itemInCart,
                        quantity: itemInCart.quantity - 1,
                      };
                    } else {
                      return itemInCart;
                    }
                  })
                );
              }
            }}
          >
            {" "}
            -{" "}
          </button>{" "}
          <p> {quantity} </p>{" "}
          <button
            onClick={() => {
              const item = cart.find((item) => item.id === id);
              setCart(
                cart.map((itemInCart) => {
                  if (itemInCart.id === item.id) {
                    return {
                      ...itemInCart,
                      quantity: itemInCart.quantity + 1,
                    };
                  } else {
                    return itemInCart;
                  }
                })
              );
            }}
          >
            {" "}
            +{" "}
          </button>{" "}
        </div>{" "}
        <button
          className="cartItem__removeButton"
          onClick={() => {
            const removeItem = cart.filter((item) => item.id !== id);
            setCart(removeItem);
          }}
        >
          Remove{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default CartItem;
