import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useState, useRef, useEffect } from "react";
import "./Header.css";

function Header({ setSearchQuery, searchQuery }) {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const dropdownRef = useRef(null);

  // Close account dropdown when clicking outside
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
    <>
      {/* ================= MAIN HEADER ================= */}
      <header className="header">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon"
          />
        </Link>

        {/* SEARCH */}
        <div className="search">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>Search</button>
        </div>

        {/* RIGHT NAV */}
        <div className="header__nav">

          {/* ACCOUNT SECTION */}
          <div
            className="header__option accountSection"
            ref={dropdownRef}
          >
            <div onClick={() => setShowDropdown(!showDropdown)}>
              <span className="header__optionLineOne">
                Hello, {user ? user.name : "Sign in"}
              </span>
              <span className="header__optionLineTwo">
                Account & Lists
              </span>
            </div>

            {showDropdown && (
              <div className="accountDropdown">
                {user ? (
                  <>
                    <p className="welcomeText">
                      Hello, {user.name}
                    </p>

                    <button
                      className="signinBtn"
                      onClick={() => {
                        logout();
                        setShowDropdown(false);
                      }}
                    >
                      Log Out
                    </button>

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
                  </>
                ) : (
                  <>
                    <Link to="/login" className="signinBtn">
                      Sign In
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* ORDERS */}
          <Link to="/orders" className="header__option">
            <span>Returns</span>
            <strong>& Orders</strong>
          </Link>

          {/* CART */}
          <Link to="/cart" className="cart">
            <span className="cart-icon">🛒</span>
            <span className="cartText">Cart</span>
            <span className="header__cartCount">
              {cart.length}
            </span>
          </Link>

        </div>
      </header>

      {/* ================= SECOND NAVBAR ================= */}
      <div className="subHeader">

        <div
          className="subHeader__left"
          onClick={() => setShowDrawer(true)}
        >
          <span className="menuIcon">☰</span>
          <span>All</span>
        </div>

        <div className="subHeader__links">
          <span
  onClick={() => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }

    setTimeout(() => {
      const section = document.getElementById("deals-section");
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
>
  Today's Deals
</span>
          <a href="#customer-service" className="navLink">Customer Service</a>
          
          <Link to="/gift-cards" className="navLink">Gift Cards</Link>
          
        </div>

      </div>

   
    </>
  );
}

export default Header;