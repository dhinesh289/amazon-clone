import {Link} from "react-router-dom";
import "./AccountDropdown.css";

function AccountDropdown() {
    return (
        <div className="accountDropdown">
            <div className="dropdownTop">
                <button className="signinBtn">Sign In</button>
                <p>
                    New customer? <Link to="/register">Start here.</Link>
                </p>
            </div>

            <div className="dropdownLinks">
                <div>
                    <h4>Your Lists</h4>
                    <p>Create a Wish List</p>
                    <p>Find a Wish List</p>
                </div>

                <div>
                    <h4>Your Account</h4>
                    <Link to="/account">Account</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/cart">Cart</Link>
                </div>
            </div>
        </div>
    );
}

export default AccountDropdown;