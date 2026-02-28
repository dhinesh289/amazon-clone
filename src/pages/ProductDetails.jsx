import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.images[0]);
      });
  }, [id]);

  if (!product) return <h2 className="loading">Loading...</h2>;

  const discountedPrice =
    product.price -
    (product.price * product.discountPercentage) / 100;

  const rupee = (value) => Math.floor(value * 83);

  return (
    <div className="productPage">
      
      {/* LEFT - IMAGES */}
      <div className="imageSection">
        
        <div className="thumbnailColumn">
          {product.images.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumb"
              onClick={() => setMainImage(img)}
              className={mainImage === img ? "thumb active" : "thumb"}
            />
          ))}
        </div>

        <div className="mainImageWrapper">
          <img
            src={mainImage}
            alt={product.title}
            className="mainProductImage"
          />
        </div>

      </div>

      {/* CENTER - PRODUCT INFO */}
      <div className="infoSection">
        <h1>{product.title}</h1>

        <div className="rating">
          ⭐ {product.rating} | {product.stock} ratings
        </div>

        <hr />

        <p className="priceBlock">
          <span className="deal">Deal Price:</span>
          <span className="discounted">
            ₹ {rupee(discountedPrice)}
          </span>
        </p>

        <p className="mrp">
          M.R.P:
          <span className="original">
            ₹ {rupee(product.price)}
          </span>
        </p>

        <p className="discountText">
          ({product.discountPercentage}% off)
        </p>

        <hr />

        <p className="brand">
          Brand: <strong>{product.brand}</strong>
        </p>

        <p className="description">{product.description}</p>

        <hr />

        <h3>About this item</h3>
        <ul className="aboutList">
          <li>High quality {product.category}</li>
          <li>Top rated product</li>
          <li>Trusted brand - {product.brand}</li>
          <li>Limited stock available</li>
        </ul>
      </div>

      {/* RIGHT - BUY BOX */}
      <div className="buySection">
        <h2>₹ {rupee(discountedPrice)}</h2>

        <p className="freeDelivery">
          FREE delivery by Tomorrow
        </p>

        <p className="stock">
          {product.stock > 0 ? "In Stock." : "Out of Stock"}
        </p>

        <button
          className="addBtn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        <button className="buyBtn">
          Buy Now
        </button>
      </div>

    </div>
  );
}

export default ProductDetails;