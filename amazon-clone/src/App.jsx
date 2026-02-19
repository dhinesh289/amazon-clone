import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import OrderSuccess from "./pages/OrderSuccess";
import { useState } from "react";


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
      </Routes>
    </Router>
  );
}

export default App;