import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="productCard">
      <Link to={`/product/${product.id}`} className="productCard__link">
        <div className="productCard__image">
          <img
            src={product.thumbnail || product.image}
            alt={product.title}
          />
        </div>

        <div className="productCard__info">
          <p className="productCard__title">{product.title}</p>
          <p className="productCard__price">₹{product.price}</p>
          <p className="productCard__rating">⭐ {product.rating}</p>
        </div>
      </Link>

      <button
        className="productCard__btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;