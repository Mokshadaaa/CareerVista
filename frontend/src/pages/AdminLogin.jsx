import { useState } from "react";
import { useNavigate } from "react-router-dom";

const wrapperStyle = {
  minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
  padding: 20, backgroundColor: "var(--light-teal)"
};

const formStyle = {
  width: 420, background: "var(--white)", borderRadius: 12,
  boxShadow: "0 8px 32px rgba(39,38,67,0.1)", padding: "30px 40px"
};

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin23812" && password === "s@l!m013") {
      alert("Login successful! Redirecting to admin dashboard...");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid username or password.");
    }
  };

  const inputStyle = {
    width: "100%", padding: "12px 40px 12px 20px",
    border: "1px solid var(--medium-teal)", borderRadius: 30,
    fontSize: "1rem", backgroundColor: "var(--light-teal)", outline: "none"
  };

  return (
    <div style={wrapperStyle}>
      <div style={formStyle}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--deep-blue)" }}>Welcome, Admin!</h2>
          <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>Please log in to access the admin dashboard.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <h1 style={{ fontSize: "2rem", marginBottom: 20, textAlign: "center", color: "var(--dark-blue)", fontWeight: 700 }}>Admin Login</h1>
          <div style={{ position: "relative", marginBottom: 20 }}>
            <input style={inputStyle} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <i className="bx bxs-user" style={{ position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", color: "var(--deep-blue)" }}></i>
          </div>
          <div style={{ position: "relative", marginBottom: 20 }}>
            <input style={inputStyle} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <i className="bx bxs-lock-alt" style={{ position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", color: "var(--deep-blue)" }}></i>
          </div>
          <button type="submit" className="btn" style={{ width: "100%", borderRadius: 30, padding: 12 }}>Login</button>
        </form>
      </div>
    </div>
  );
}
