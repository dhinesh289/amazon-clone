import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Account.css";

export default function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="accountPage">
      <div className="accountContainer">
        <h1>Your Account</h1>

        <div className="accountCard">
          <p className="accountLabel">Name:</p>
          <p className="accountValue">{user?.name || "Guest"}</p>

          <p className="accountLabel">Email:</p>
          <p className="accountValue">{user?.email || "-"}</p>

          {user && (
            <button className="logoutBtn" onClick={handleLogout}>
              Log Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}