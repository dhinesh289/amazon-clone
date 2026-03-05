import { useOrders } from "../context/OrdersContext";
import "./Orders.css";

function Orders() {
  const { orders } = useOrders();

  if (!orders || orders.length === 0)
    return <h2 style={{ padding: "40px" }}>No orders placed yet.</h2>;

  return (
    <div className="ordersPage">
      <h1>Your Orders</h1>

      {orders.map((order, idx) => (
        <div key={idx} className="orderCard">
          <p>
            <strong>Order Date:</strong> {order.date || "N/A"}
          </p>
          <p>
            <strong>Status:</strong> {order.status || "Pending"}
          </p>

          <div className="orderProducts">
            {order.products?.map((prod) => (
              <div key={prod.id} className="orderProduct">
                <img src={prod.thumbnail} alt={prod.title} />
                <p>{prod.title}</p>
                <p>Qty: {prod.qty}</p>
                <p>Price: ₹{prod.price * prod.qty}</p>
              </div>
            )) || <p>No products in this order</p>}
          </div>

          <p className="orderTotal">
            Total: ₹
            {order.products
              ?.reduce((acc, p) => acc + p.price * p.qty, 0)
              .toFixed(2) || 0}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Orders;