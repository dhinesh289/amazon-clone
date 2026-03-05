import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Home.css";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer/Footer";

function Home({ searchQuery }) {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  // Fetch products
 useEffect(() => {
  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();

      setProducts(data.products);
      setFilteredProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  fetchProducts();
}, []);

  // Categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter Logic
  useEffect(() => {

    let updatedProducts = products;

    if (selectedCategory !== "All") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
    setVisibleCount(12);

  }, [selectedCategory, searchQuery, products]);

  return (
    <>
      <div className="home">

        {/* CATEGORY BUTTONS */}
        <div className="category-wrapper">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>


        {/* ===== TODAY'S DEALS ===== */}
        <div id="deals-section" className="dealsSection">

          <div className="dealsHeader">
            <h2>🔥 Today's Deals</h2>
            <span className="viewAll">Limited Time Offers</span>
          </div>

          <div className="dealsGrid">

            {products
              .filter((product) => product.discountPercentage > 15)
              .slice(0, 8)
              .map((product) => (

                <div key={product.id} className="dealCard">

                  <div className="dealImageWrapper">

                    <span className="discountBadge">
                      -{Math.round(product.discountPercentage)}%
                    </span>

                    <img
                      src={product.thumbnail}
                      alt={product.title}
                    />

                  </div>

                  <div className="dealInfo">

                    <h4>{product.title}</h4>

                    <div className="priceSection">

                      <span className="dealPrice">
                        ₹{Math.round(product.price)}
                      </span>

                      <span className="oldPrice">
                        ₹
                        {Math.round(
                          product.price /
                          (1 - product.discountPercentage / 100)
                        )}
                      </span>

                    </div>

                    <button
                      className="dealAddBtn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart 🛒
                    </button>

                  </div>

                </div>

              ))}

          </div>

        </div>


        {/* LOADING */}
        {loading ? (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            Loading products...
          </div>
        ) : (
          <>
            {/* PRODUCT GRID */}
            <div className="home__row">

              {filteredProducts
                .slice(0, visibleCount)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

            </div>


            {/* LOAD MORE */}
            {visibleCount < filteredProducts.length && (

              <div className="load-more">

                <button
                  className="load-more-btn"
                  onClick={() =>
                    setVisibleCount((prev) => prev + 12)
                  }
                >
                  Load More
                </button>

              </div>

            )}
          </>
        )}

      </div>

      {/* FOOTER / CUSTOMER SERVICE */}
      <Footer />

    </>
  );
}

export default Home;