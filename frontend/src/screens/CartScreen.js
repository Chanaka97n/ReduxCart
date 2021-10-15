import "./CartScreen.css";

//Components
import CartItem from "../components/CartItem";

export default function CartScreen() {
  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal (0) items</p>
            <p>$499.99</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}