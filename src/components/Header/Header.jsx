import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import "./Header.css";
import { useState,useRef,useEffect } from "react";

function Header({ setSearchQuery, searchQuery }) {
  const { cart } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);
const dropdownRef = useRef(null);


useEffect(() => {
  function handleClickOutside(event) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <header className="header">

     
      <Link to="/" className="logo">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" />
      </Link>

    
      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="header__searchBtn">Search</button>
      </div>

     
      <div className="header__nav">

       <div
  className="header__option accountSection"
  ref={dropdownRef}
>
  <div onClick={() => setShowDropdown(!showDropdown)}>
    <span className="header__optionLineOne">
      Hello, Sign in
    </span>

    <span className="header__optionLineTwo">
      Account & Lists
    </span>
  </div>

  {showDropdown && (
    <div className="accountDropdown">

      <Link to="/login" className="signinBtn">
        Sign In
      </Link>

      <p className="newCustomer">
        New customer? <Link to="/login">Start here.</Link>
      </p>

      <hr />

      <Link to="/account" className="dropdownItem">
        Your Account
      </Link>

      <Link to="/orders" className="dropdownItem">
        Your Orders
      </Link>

      <Link to="/wishlist" className="dropdownItem">
        Your Wishlist
      </Link>

    </div>
  )}

          
        </div>

       
        <Link to="/orders" className="header__option">
          <span>Returns</span>
          <strong>& Orders</strong>
        </Link>

      
        <Link to="/cart" className="cart">
          <span className="cart-icon">Cart 🛒</span>
          <span className="header__cartCount">{cart.length}</span>
        </Link>

      </div>
    </header>
  );
}

export default Header;