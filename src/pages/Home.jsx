import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Home.css";

function Home({searchQuery}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(true);

  // Fetch 100 real products
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Get categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter logic
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
    <div className="home">

      {/* Category Buttons */}
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

      {/* Loading */}
      {loading ? (
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          Loading products...
        </h2>
      ) : (
        <>
          {/* Product Grid */}
          <div className="home__row">
            {filteredProducts
              .slice(0, visibleCount)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredProducts.length && (
            <div className="load-more">
              <button
                className="load-more-btn"
                onClick={() => setVisibleCount((prev) => prev + 12)}
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;