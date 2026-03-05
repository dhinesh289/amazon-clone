import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, email };
    login(userData);
    navigate("/");
  };

  return (
    <div className="loginPage">
      <div className="loginCard">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="loginBtn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;