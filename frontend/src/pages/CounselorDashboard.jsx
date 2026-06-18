import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CounselorDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("view-schedule");

  const sections = {
    "view-schedule": (
      <div className="card">
        <h3>View Schedule</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "var(--light-teal)" }}>
              <th style={{ padding: 12, textAlign: "left" }}>Date</th>
              <th style={{ padding: 12, textAlign: "left" }}>Time</th>
              <th style={{ padding: 12, textAlign: "left" }}>Student</th>
              <th style={{ padding: 12, textAlign: "left" }}>Type</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: "2023-10-15", time: "10:00 AM", student: "John Doe", type: "Career Counseling" },
              { date: "2023-10-16", time: "11:00 AM", student: "Jane Smith", type: "Academic Guidance" },
            ].map((s, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--medium-teal)" }}>
                <td style={{ padding: 12 }}>{s.date}</td>
                <td style={{ padding: 12 }}>{s.time}</td>
                <td style={{ padding: 12 }}>{s.student}</td>
                <td style={{ padding: 12 }}>{s.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    "manage-sessions": (
      <div className="card">
        <h3>Manage Sessions</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "var(--light-teal)" }}>
              <th style={{ padding: 12, textAlign: "left" }}>ID</th>
              <th style={{ padding: 12, textAlign: "left" }}>Student</th>
              <th style={{ padding: 12, textAlign: "left" }}>Date</th>
              <th style={{ padding: 12, textAlign: "left" }}>Time</th>
              <th style={{ padding: 12, textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, student: "John Doe", date: "2023-10-15", time: "10:00 AM" },
              { id: 2, student: "Jane Smith", date: "2023-10-16", time: "11:00 AM" },
            ].map((s, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--medium-teal)" }}>
                <td style={{ padding: 12 }}>{s.id}</td>
                <td style={{ padding: 12 }}>{s.student}</td>
                <td style={{ padding: 12 }}>{s.date}</td>
                <td style={{ padding: 12 }}>{s.time}</td>
                <td style={{ padding: 12 }}>
                  <button className="btn" style={{ marginRight: 5 }}>Edit</button>
                  <button className="btn" style={{ marginRight: 5 }}>Cancel</button>
                  <button className="btn" onClick={() => navigate("/counselor-video-call")}>Join</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn" style={{ marginTop: 15 }}>Add New Session</button>
      </div>
    ),
    "student-interactions": (
      <div className="card">
        <h3>Student Interactions</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "var(--light-teal)" }}>
              <th style={{ padding: 12 }}>ID</th>
              <th style={{ padding: 12 }}>Student</th>
              <th style={{ padding: 12 }}>Message</th>
              <th style={{ padding: 12 }}>Date</th>
              <th style={{ padding: 12 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, student: "John Doe", msg: "I need help with career options.", date: "2023-10-10" },
              { id: 2, student: "Jane Smith", msg: "Can you suggest some good colleges?", date: "2023-10-11" },
            ].map((s, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--medium-teal)" }}>
                <td style={{ padding: 12 }}>{s.id}</td>
                <td style={{ padding: 12 }}>{s.student}</td>
                <td style={{ padding: 12 }}>{s.msg}</td>
                <td style={{ padding: 12 }}>{s.date}</td>
                <td style={{ padding: 12 }}><button className="btn">Reply</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  };

  const navItems = [
    { id: "view-schedule", icon: "bx bx-calendar", label: "View Schedule" },
    { id: "manage-sessions", icon: "bx bx-time", label: "Manage Sessions" },
    { id: "student-interactions", icon: "bx bx-chat", label: "Interactions" },
  ];

  return (
    <div>
      <div className="navbar" style={{
        background: "var(--light-teal)", padding: "15px 20px", display: "flex",
        justifyContent: "space-between", alignItems: "center", position: "fixed",
        top: 0, left: 0, width: "100%", zIndex: 1000
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600 }}>Counselor Dashboard</h2>
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
        <h1 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 20 }}>Counselor Dashboard</h1>
        {sections[activeSection]}
      </div>
    </div>
  );
}
