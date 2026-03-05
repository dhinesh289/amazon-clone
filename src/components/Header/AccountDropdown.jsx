import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./AccountDropdown.css";

function AccountDropdown() {
  const { user, logout } = useAuth();
  console.log("dropdown user:",user);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="accountDropdown">
      <div className="dropdownTop">
        {user ? (
          <>
            <p>Hello, {user.name}</p>
            <button className="signinBtn" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="signinBtn">Sign In</button>
            </Link>
            <p>
              New customer? <Link to="/register">Start here.</Link>
            </p>
          </>
        )}
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