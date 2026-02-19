import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { cart, removeFromCart, addToCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <h2 style={{ padding: "20px", textAlign: "center" }}>
        Your cart is empty
      </h2>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "15px",
            alignItems: "center",
          }}
        >
          <img
            src={item.thumbnail || item.image}
            alt={item.title}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
            }}
          />

          <div style={{ flex: 1 }}>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
          </div>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>

          <span style={{ margin: "0 10px" }}>{item.qty}</span>

          <button onClick={() => addToCart(item)}>+</button>
        </div>
      ))}

      {/* TOTAL */}
      <h3>Total: ₹{total.toFixed(2)}</h3>

      {/* PROCEED TO CHECKOUT BUTTON */}
      <button
        className="checkout__button"
        onClick={() => {
          clearCart();
          navigate("/order-success");
        }}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#f0c14b",
          border: "1px solid #a88734",
          cursor: "pointer",
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Checkout;