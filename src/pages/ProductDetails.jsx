import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useContext } from "react";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const {addToCart} = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2 className="loading">Loading...</h2>;

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="productDetails">
      
      {/* LEFT - IMAGE */}
      <div className="productDetails__image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      {/* MIDDLE - INFO */}
      <div className="productDetails__info">
        <h1>{product.title}</h1>

        <div className="rating">
          ⭐ {product.rating}
        </div>

        <hr />

        <p className="price">
          <span className="discounted">
            ₹ {Math.floor(discountedPrice * 83)}
          </span>
          <span className="original">
            ₹ {Math.floor(product.price * 83)}
          </span>
          <span className="discount">
            {product.discountPercentage}% off
          </span>
        </p>

        <p className="brand">
          Brand: <strong>{product.brand}</strong>
        </p>

        <p className="description">{product.description}</p>
      </div>

      {/* RIGHT - BUY BOX */}
      <div className="productDetails__buyBox">
        <p className="buyPrice">
          ₹ {Math.floor(discountedPrice * 83)}
        </p>

        <p className="stock">
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        <button className="addBtn" onClick={() => addToCart(product)}>Add to Cart</button>
        <button className="buyBtn">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetails;