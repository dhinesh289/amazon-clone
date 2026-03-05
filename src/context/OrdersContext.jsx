import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const { user } = useAuth();

  // ✅ Load orders immediately using lazy initialization
  const [orders, setOrders] = useState(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return [];

    const parsedUser = JSON.parse(storedUser);
    const storedOrders = localStorage.getItem(`orders_${parsedUser.email}`);
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  // ✅ Update orders when user changes
  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }

    const storedOrders = localStorage.getItem(`orders_${user.email}`);
    setOrders(storedOrders ? JSON.parse(storedOrders) : []);
  }, [user]);

  // ✅ Save orders
  useEffect(() => {
    if (!user) return;
    localStorage.setItem(`orders_${user.email}`, JSON.stringify(orders));
  }, [orders, user]);

  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  const clearOrders = () => {
    if (!user) return;
    localStorage.removeItem(`orders_${user.email}`);
    setOrders([]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, clearOrders }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrdersContext);
}