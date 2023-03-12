import "./total.css";

function Total({ cart }) {
  // The function below is called a selector and allows us to select a value from
  // the state.
  console.log({ myCart: cart });

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart &&
      cart.forEach((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
      });
    return { totalPrice, totalQuantity };
  };

  return (
    <div className="total">
      <h2> ORDER SUMMARY </h2>{" "}
      <div>
        <p className="total__p">
          total({getTotal().totalQuantity}
          items): <strong> $ {getTotal().totalPrice} </strong>{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
}

export default Total;
