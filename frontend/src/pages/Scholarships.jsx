import { useState } from "react";
import { useNavigate } from "react-router-dom";

const scholarshipData = [
  { name: "Post-Matric Scholarship for SC/ST", desc: "For SC/ST students pursuing post-matriculation studies", eligibility: "SC/ST with income < ₹2.5 Lakh", amount: "Up to ₹25,000/year" },
  { name: "National Merit Scholarship", desc: "For meritorious students from all categories", eligibility: "Min 90%, income < ₹6 Lakh", amount: "₹10,000/year" },
  { name: "Minority Scholarship", desc: "For students from minority communities", eligibility: "Income < ₹2 Lakh", amount: "Up to ₹20,000/year" },
  { name: "State Merit Scholarship", desc: "State government scholarship for top performers", eligibility: "State domicile, min 80%", amount: "₹5,000-₹15,000/year" },
  { name: "Prime Minister's Scholarship", desc: "For professional courses", eligibility: "Income < ₹8 Lakh", amount: "₹2,000-₹3,000/month" },
];

export default function Scholarships() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ category: "", income: "", score: "", state: "", course: "" });
  const [results, setResults] = useState(null);

  const matchScholarships = () => {
    return scholarshipData.filter(s => {
      if (s.name.includes("SC/ST") && !["SC", "ST"].includes(form.category)) return false;
      if (s.name.includes("Minority") && form.category !== "Minority") return false;
      return true;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(matchScholarships());
  };

  const inputStyle = { width: "100%", padding: 10, border: "1px solid var(--medium-teal)", borderRadius: 8, fontSize: "1rem" };

  return (
    <div>
      <div className="navbar" style={{ background: "var(--white)", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "15px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
        <h2 style={{ color: "var(--dark-blue)" }}>DigiLift Careers</h2>
        <button className="btn" style={{ borderRadius: 30, padding: "10px 20px" }} onClick={() => navigate("/student-dashboard")}>Back to Dashboard</button>
      </div>

      <div style={{ textAlign: "center", padding: "6rem 0 2rem", background: "linear-gradient(135deg, var(--medium-teal), var(--light-teal))", borderBottom: "2px solid var(--deep-blue)" }}>
        <h2 style={{ fontSize: "2rem", color: "var(--dark-blue)" }}>Government Scholarship Finder</h2>
        <p style={{ fontSize: "1.1rem" }}>Discover scholarships matched to your profile.</p>
      </div>

      <div style={{ maxWidth: 1200, margin: "2rem auto", padding: "0 20px" }}>
        <div style={{ background: "var(--white)", borderRadius: 10, padding: "2rem", border: "1px solid var(--medium-teal)", marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "1.5rem", color: "var(--dark-blue)" }}>Enter Your Details</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <div style={{ flex: "1 1 200px" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Category</label>
                <select style={inputStyle} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required>
                  <option value="">Select</option>
                  {["SC", "ST", "OBC", "General", "Minority"].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Annual Income (₹)</label>
                <input style={inputStyle} type="number" value={form.income} onChange={(e) => setForm({ ...form, income: e.target.value })} required />
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Score (%)</label>
                <input style={inputStyle} type="number" min="0" max="100" value={form.score} onChange={(e) => setForm({ ...form, score: e.target.value })} required />
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>State</label>
                <select style={inputStyle} value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} required>
                  <option value="">Select</option>
                  {["Delhi", "Maharashtra", "Uttar Pradesh", "Tamil Nadu", "West Bengal"].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Course Level</label>
                <select style={inputStyle} value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} required>
                  <option value="">Select</option>
                  {["School", "Undergraduate", "Postgraduate", "PhD", "Diploma"].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <button type="submit" className="btn">Find Scholarships</button>
          </form>
        </div>

        {results && (
          <div style={{ background: "var(--white)", borderRadius: 10, padding: "2rem", border: "1px solid var(--medium-teal)" }}>
            <h3 style={{ color: "var(--deep-blue)", textAlign: "center", marginBottom: "1.5rem" }}>Scholarships Matching Your Profile</h3>
            {results.length === 0 ? (
              <p style={{ textAlign: "center" }}>No scholarships found matching your criteria.</p>
            ) : (
              results.map((s, i) => (
                <div key={i} style={{ background: "var(--light-teal)", borderRadius: 8, padding: "1.5rem", marginBottom: "1rem", border: "1px solid var(--medium-teal)" }}>
                  <h4 style={{ color: "var(--deep-blue)", marginBottom: "0.5rem" }}>{s.name}</h4>
                  <p style={{ marginBottom: "0.5rem" }}>{s.desc}</p>
                  <p style={{ marginBottom: "0.5rem" }}><strong>Eligibility:</strong> {s.eligibility}</p>
                  <p style={{ marginBottom: "0.5rem" }}><strong>Amount:</strong> {s.amount}</p>
                  <button className="btn" style={{ padding: "8px 16px", fontSize: "0.9rem", marginTop: "0.5rem" }}>Apply Now</button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
