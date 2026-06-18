import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("aptitude-tests");
  const [feedback, setFeedback] = useState({ message: "", rating: "" });

  const sections = {
    "aptitude-tests": (
      <div className="card">
        <h3>Career Guidance Resources</h3>
        <p>Explore these resources to discover your career path:</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 20, marginTop: 20 }}>
          {[
            { icon: "bx bx-clipboard", title: "Aptitude Test", desc: "Discover which career path suits you best.", path: "/aptitude-test" },
            { icon: "bx bx-briefcase-alt", title: "Government Jobs", desc: "Explore current job opportunities.", path: "/jobs" },
            { icon: "bx bx-award", title: "Scholarships", desc: "Find government scholarships for your education.", path: "/scholarships" },
          ].map((item, i) => (
            <div key={i} className="resource-card" style={{
              background: "var(--white)", borderRadius: 12, padding: 25,
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)", border: "1px solid var(--medium-teal)",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              cursor: "pointer", transition: "transform 0.3s"
            }} onClick={() => navigate(item.path)}>
              <div style={{ width: 60, height: 60, background: "var(--light-teal)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 15 }}>
                <i className={item.icon} style={{ fontSize: "1.8rem", color: "var(--dark-blue)" }}></i>
              </div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: 10 }}>{item.title}</h4>
              <p style={{ fontSize: "0.95rem", marginBottom: 20, color: "var(--dark-blue)" }}>{item.desc}</p>
              <span className="btn" style={{ width: "100%", maxWidth: 200, textAlign: "center", marginTop: "auto" }}>Open</span>
            </div>
          ))}
        </div>
      </div>
    ),
    sessions: (
      <div className="card">
        <h3>Counseling Sessions</h3>
        <div style={{ background: "var(--medium-teal)", padding: 20, borderRadius: 12, marginTop: 15 }}>
          <h4 style={{ marginBottom: 10 }}>Ms. Deepa Panakal</h4>
          <p style={{ marginBottom: 10 }}>Session Fee: First Session (1 hour): ₹1500 | Package of 3 Sessions: ₹3000</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 15 }}>
            <button className="btn" onClick={() => alert("Joining session...")}>Join Session</button>
            <button className="btn">Book a Session</button>
          </div>
        </div>
      </div>
    ),
    courses: (
      <div className="card">
        <h3>Courses after 10</h3>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 15 }}>
          {[
            { title: "Science Stream", img: "/images/science.jpg", path: "/science-stream" },
            { title: "Commerce Stream", img: "/images/commerce.jpg", path: "/commerce-stream" },
            { title: "Arts Stream", img: "/images/arts.jpg", path: "/arts-stream" },
          ].map((c, i) => (
            <div key={i} style={{ flex: "1 1 250px", cursor: "pointer", background: "var(--medium-teal)", borderRadius: 12, padding: 20, textAlign: "center" }}
              onClick={() => navigate(c.path)}>
              <img src={c.img} alt={c.title} style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 8, marginBottom: 15 }} />
              <h4 style={{ color: "var(--dark-blue)" }}>{c.title}</h4>
            </div>
          ))}
        </div>
      </div>
    ),
    feedback: (
      <div className="card">
        <h3>Feedback</h3>
        <p>We value your feedback! Let us know how we can improve.</p>
        <form onSubmit={(e) => { e.preventDefault(); alert("Feedback submitted!"); }}>
          <textarea style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid var(--medium-teal)", marginBottom: 15, minHeight: 100 }}
            placeholder="Your message..." value={feedback.message} onChange={(e) => setFeedback({ ...feedback, message: e.target.value })} required />
          <select style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid var(--medium-teal)", marginBottom: 15 }}
            value={feedback.rating} onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })} required>
            <option value="">Select rating</option>
            {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} - {["Poor","Fair","Good","Very Good","Excellent"][n-1]}</option>)}
          </select>
          <button type="submit" className="btn">Submit Feedback</button>
        </form>
      </div>
    ),
  };

  const navItems = [
    { id: "aptitude-tests", icon: "bx bx-file", label: "Career Resources" },
    { id: "sessions", icon: "bx bx-history", label: "Counseling" },
    { id: "courses", icon: "bx bx-book", label: "Courses" },
    { id: "feedback", icon: "bx bx-cog", label: "Feedback" },
  ];

  return (
    <div>
      <div className="navbar" style={{
        background: "var(--light-teal)", boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        padding: "15px 20px", display: "flex", justifyContent: "space-between",
        alignItems: "center", position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--dark-blue)" }}>Student Dashboard</h2>
        <ul style={{ listStyle: "none", display: "flex", gap: 10 }}>
          {navItems.map(item => (
            <li key={item.id}>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection(item.id); }}
                style={{ textDecoration: "none", color: "var(--dark-blue)", padding: 10, display: "flex", alignItems: "center", gap: 5 }}>
                <i className={item.icon}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="btn" style={{ borderRadius: 30, padding: "10px 20px" }} onClick={() => navigate("/")}>Sign Out</button>
      </div>

      <div style={{ padding: "100px 40px 40px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 20 }}>Welcome, Student!</h1>
        {sections[activeSection]}
      </div>
    </div>
  );
}
