import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginCounselor, registerCounselor } from "../services/api";

const wrapperStyle = {
  minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
  padding: 20, backgroundColor: "var(--light-teal)"
};

const formStyle = {
  width: 420, background: "var(--white)", borderRadius: 12,
  boxShadow: "0 8px 32px rgba(39,38,67,0.1)", padding: "30px 40px"
};

const inputStyle = {
  width: "100%", padding: "12px 40px 12px 20px",
  border: "1px solid var(--medium-teal)", borderRadius: 30,
  fontSize: "1rem", backgroundColor: "var(--light-teal)", outline: "none"
};

export default function CounselorAuth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", username: "", password: "", confirmPassword: "", highestQualification: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin && form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const fn = isLogin ? loginCounselor : registerCounselor;
      const payload = isLogin
        ? { username: form.username, password: form.password }
        : { name: form.name, email: form.email, username: form.username, password: form.password, highestQualification: form.highestQualification };
      const data = await fn(payload);
      if (data.counselorId) localStorage.setItem("counselorID", data.counselorId);
      alert(data.message);
      if (data.counselorId) navigate("/counselor-dashboard");
    } catch (err) {
      alert("An error occurred");
    }
  };

  return (
    <div style={wrapperStyle}>
      <div style={formStyle}>
        <h1 style={{ fontSize: "2rem", marginBottom: 20, textAlign: "center", color: "var(--dark-blue)", fontWeight: 700 }}>
          {isLogin ? "Counselor Login" : "Counselor Registration"}
        </h1>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div style={{ position: "relative", marginBottom: 20 }}>
                <input style={inputStyle} type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
                <i className="bx bxs-user" style={{ position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", color: "var(--deep-blue)" }}></i>
              </div>
              <div style={{ position: "relative", marginBottom: 20 }}>
                <input style={inputStyle} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <i className="bx bxs-envelope" style={{ position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", color: "var(--deep-blue)" }}></i>
              </div>
            </>
          )}

          <div style={{ position: "relative", marginBottom: 20 }}>
            <input style={inputStyle} type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
            <i className="bx bxs-user" style={{ position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", color: "var(--deep-blue)" }}></i>
          </div>

          <div style={{ position: "relative", marginBottom: 20 }}>
            <input style={inputStyle} type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <i className="bx bxs-lock-alt" style={{ position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", color: "var(--deep-blue)" }}></i>
          </div>

          {!isLogin && (
            <>
              <div style={{ position: "relative", marginBottom: 20 }}>
                <input style={inputStyle} type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
                <i className="bx bxs-lock-alt" style={{ position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", color: "var(--deep-blue)" }}></i>
              </div>
              <div style={{ position: "relative", marginBottom: 20 }}>
                <input style={inputStyle} type="text" name="highestQualification" placeholder="Highest Qualification" value={form.highestQualification} onChange={handleChange} required />
                <i className="bx bxs-graduation" style={{ position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", color: "var(--deep-blue)" }}></i>
              </div>
            </>
          )}

          <button type="submit" className="btn" style={{ width: "100%", borderRadius: 30, padding: 12 }}>
            {isLogin ? "Login" : "Register as Counselor"}
          </button>

          <div style={{ textAlign: "center", marginTop: 20, fontSize: "0.9rem" }}>
            {isLogin ? (
              <p>Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }} style={{ color: "var(--deep-blue)", fontWeight: 500 }}>Register as Counselor</a></p>
            ) : (
              <p>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true); }} style={{ color: "var(--deep-blue)", fontWeight: 500 }}>Login</a></p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
