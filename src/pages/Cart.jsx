import "./cart.css";
import Total from "../components/Total";
import CartItem from "../components/CartItem";

function Cart({ cart, setCart }) {
  console.log(cart);
  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <CartItem
              cart={cart}
              setCart={setCart}
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
      <div className="cart__right">
        <Total cart={cart} />
      </div>{" "}
    </div>
  );
}

export default Cart;
