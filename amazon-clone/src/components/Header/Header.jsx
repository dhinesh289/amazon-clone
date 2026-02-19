import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import './Header.css';

function Header({ setSearchQuery,searchQuery }) {
  const { cart } = useCart();

  return (
    <header className="header">
      
      <Link to="/" className="logo">
        <img src="/Amazon_logo new.svg" alt="Amazon" />
      </Link>

      
      <div className="search">
        <input type="text" placeholder="Search products..." value={searchQuery}
        onChange={(e) =>setSearchQuery(e.target.value)} />
        <button className="header__searchBtn">Search</button>
      </div>
      
      <div className="header__nav">

       
        <div className="header__option">
          <span>Hello, Sign in</span>
          <strong> Account & Lists  </strong>
          </div>
         
          <div className="header__option">
            <span>Returns</span>
            <strong>& Orders</strong>
          </div>
        

        {/* Cart */}
        <Link to="/cart" className="cart">
          <span className="cart-icon">Cart 🛒</span>
          <span className="header__cartCount">{cart.length}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;