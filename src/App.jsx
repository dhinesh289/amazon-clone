import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import OrderSuccess from "./pages/OrderSuccess";
import { useState } from "react";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";


function App() {
    const [searchQuery, setSearchQuery] = useState("");
    
    
  return (
    <Router>
      <Header setSearchQuery = {setSearchQuery} 
              searchQuery={searchQuery} />

      <Routes>
        <Route path="/" element={<Home searchQuery = {searchQuery} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        
        <Route path="/account" element={<Account />}  />
        <Route path="/orders" element={<Orders />}  />
        <Route path="/wishlist" element={<Wishlist />}  />



        <Route path="/account" element={<h2 style={{padding:"40px"}}>My Account Page</h2>} />
        <Route path="/orders" element={<h2 style={{padding:"40px"}}>My Orders Page</h2>} />
        <Route path="/register" element={<h2 style={{padding:"40px"}}>Register Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;