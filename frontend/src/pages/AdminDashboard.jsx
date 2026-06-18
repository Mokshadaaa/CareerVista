import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("manage-users");

  const sections = {
    "manage-users": (
      <div className="card">
        <h3>Manage Users</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "var(--light-teal)" }}>
              <th style={{ padding: 12, textAlign: "left" }}>ID</th>
              <th style={{ padding: 12, textAlign: "left" }}>Name</th>
              <th style={{ padding: 12, textAlign: "left" }}>Email</th>
              <th style={{ padding: 12, textAlign: "left" }}>Role</th>
              <th style={{ padding: 12, textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, name: "John Doe", email: "john@example.com", role: "Student" },
              { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Counselor" },
            ].map((u, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--medium-teal)" }}>
                <td style={{ padding: 12 }}>{u.id}</td>
                <td style={{ padding: 12 }}>{u.name}</td>
                <td style={{ padding: 12 }}>{u.email}</td>
                <td style={{ padding: 12 }}>{u.role}</td>
                <td style={{ padding: 12 }}><button className="btn" style={{ marginRight: 5 }}>Edit</button><button className="btn">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn" style={{ marginTop: 15 }}>Add New User</button>
      </div>
    ),
    "manage-courses": (
      <div className="card">
        <h3>Manage Courses</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "var(--light-teal)" }}>
              <th style={{ padding: 12, textAlign: "left" }}>ID</th>
              <th style={{ padding: 12, textAlign: "left" }}>Course</th>
              <th style={{ padding: 12, textAlign: "left" }}>Description</th>
              <th style={{ padding: 12, textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, name: "Science Stream", desc: "Explore Physics, Chemistry, Biology" },
              { id: 2, name: "Commerce Stream", desc: "Focus on business, finance, economics" },
            ].map((c, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--medium-teal)" }}>
                <td style={{ padding: 12 }}>{c.id}</td>
                <td style={{ padding: 12 }}>{c.name}</td>
                <td style={{ padding: 12 }}>{c.desc}</td>
                <td style={{ padding: 12 }}><button className="btn" style={{ marginRight: 5 }}>Edit</button><button className="btn">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn" style={{ marginTop: 15 }}>Add New Course</button>
      </div>
    ),
    "manage-sessions": (
      <div className="card">
        <h3>Manage Sessions</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "var(--light-teal)" }}>
              <th style={{ padding: 12, textAlign: "left" }}>ID</th>
              <th style={{ padding: 12, textAlign: "left" }}>Counselor</th>
              <th style={{ padding: 12, textAlign: "left" }}>Date</th>
              <th style={{ padding: 12, textAlign: "left" }}>Time</th>
              <th style={{ padding: 12, textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, counselor: "Deepa Panakal", date: "2023-10-15", time: "10:00 AM" },
              { id: 2, counselor: "David Woods", date: "2023-10-16", time: "11:00 AM" },
            ].map((s, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--medium-teal)" }}>
                <td style={{ padding: 12 }}>{s.id}</td>
                <td style={{ padding: 12 }}>{s.counselor}</td>
                <td style={{ padding: 12 }}>{s.date}</td>
                <td style={{ padding: 12 }}>{s.time}</td>
                <td style={{ padding: 12 }}><button className="btn" style={{ marginRight: 5 }}>Edit</button><button className="btn">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn" style={{ marginTop: 15 }}>Add New Session</button>
      </div>
    ),
    "view-feedback": (
      <div className="card">
        <h3>View Feedback</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "var(--light-teal)" }}>
              <th style={{ padding: 12, textAlign: "left" }}>ID</th>
              <th style={{ padding: 12, textAlign: "left" }}>User</th>
              <th style={{ padding: 12, textAlign: "left" }}>Feedback</th>
              <th style={{ padding: 12, textAlign: "left" }}>Rating</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, user: "John Doe", feedback: "Great platform!", rating: 5 },
              { id: 2, user: "Jane Smith", feedback: "Needs more courses in Arts.", rating: 4 },
            ].map((f, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--medium-teal)" }}>
                <td style={{ padding: 12 }}>{f.id}</td>
                <td style={{ padding: 12 }}>{f.user}</td>
                <td style={{ padding: 12 }}>{f.feedback}</td>
                <td style={{ padding: 12 }}>{f.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  };

  const navItems = [
    { id: "manage-users", icon: "bx bx-user", label: "Manage Users" },
    { id: "manage-courses", icon: "bx bx-book", label: "Manage Courses" },
    { id: "manage-sessions", icon: "bx bx-calendar", label: "Manage Sessions" },
    { id: "view-feedback", icon: "bx bx-message", label: "View Feedback" },
  ];

  return (
    <div>
      <div className="navbar" style={{
        background: "var(--light-teal)", padding: "15px 20px", display: "flex",
        justifyContent: "space-between", alignItems: "center", position: "fixed",
        top: 0, left: 0, width: "100%", zIndex: 1000
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600 }}>Admin Dashboard</h2>
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
        <h1 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 20 }}>Admin Dashboard</h1>
        {sections[activeSection]}
      </div>
    </div>
  );
}
