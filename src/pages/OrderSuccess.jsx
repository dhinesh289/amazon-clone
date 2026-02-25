import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./OrderSuccess.css";
function OrderSuccess(){
    const navigate= useNavigate();
    const {clearCart} = useCart();

    const handleContinueShopping = () => {
        clearCart();
        navigate("/");
    };
    return (
        <div className="orderSuccess">
            <h1>Order Placed Successfully</h1>
            <p>Thankyou for shopping with us</p>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
    );
}

export default OrderSuccess ;