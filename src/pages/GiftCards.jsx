import "./GiftCards.css";

function GiftCards() {

  const giftCards = [
    {
      id: 1,
      title: "Birthday Gift Card",
      img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=60",
      price: "₹500 - ₹5000"
    },
    {
      id: 2,
      title: "Festival Gift Card",
      img: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=600&q=60",
      price: "₹1000 - ₹10000"
    },
    {
      id: 3,
      title: "Wedding Gift Card",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=600&q=60",
      price: "₹2000 - ₹15000"
    },
    {
      id: 4,
      title: "Thank You Gift Card",
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=60",
      price: "₹500 - ₹5000"
    },
    {
      id: 5,
      title: "Congratulations Card",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=60",
      price: "₹500 - ₹8000"
    },
    {
      id: 6,
      title: "Amazon Gift Card",
      img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=600&q=60",
      price: "₹100 - ₹10000"
    }
  ];

  return (
    <div className="giftPage">

      {/* Hero Banner */}
      <div className="giftHero">
        <h1>Amazon Gift Cards</h1>
        <p>Perfect gift for every occasion</p>
        <button>Shop Now</button>
      </div>

      {/* Categories */}
      <div className="giftCategories">
        <button>Birthday</button>
        <button>Festival</button>
        <button>Wedding</button>
        <button>Thank You</button>
        <button>Congratulations</button>
      </div>

      {/* Gift Cards Grid */}
      <div className="giftGrid">
        {giftCards.map((card) => (
          <div key={card.id} className="giftCard">

            <img src={card.img} alt={card.title} />

            <h3>{card.title}</h3>

            <p className="giftPrice">{card.price}</p>

            <button className="giftBtn">
              Buy Gift Card
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default GiftCards;