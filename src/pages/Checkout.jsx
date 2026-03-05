import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrdersContext";
import { useNavigate } from "react-router-dom";
import './Checkout.css';

function Checkout() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const { addOrder } = useOrders();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const order = {
      date: new Date().toLocaleString(),
      status: "Pending",
      products: cart.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        qty: p.qty,
        thumbnail: p.thumbnail || p.images?.[0] || "",
      })),
    };

    addOrder(order);
    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="checkoutContainer">
      <div className="cartItems">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cartItem">
              <img src={item.thumbnail || item.images?.[0]} alt={item.title} />
              <div className="itemInfo">
                <h4>{item.title}</h4>
                <p>Price: ₹{item.price}</p>
                <div className="quantityControls">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="orderSummary">
        <h3>Order Summary</h3>
        <p>Total Items: {cart.reduce((acc, item) => acc + item.qty, 0)}</p>
        <p>
          Total Price: ₹
          {cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
        </p>
        <button className="checkoutBtn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;