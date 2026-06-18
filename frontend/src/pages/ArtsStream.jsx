import { useNavigate } from "react-router-dom";

const sectionStyle = { background: "var(--white)", padding: 25, borderRadius: 10, boxShadow: "0 4px 15px rgba(0,0,0,0.05)", marginBottom: 30, border: "1px solid var(--medium-teal)" };

export default function ArtsStream() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 20, background: "var(--light-teal)", minHeight: "100vh" }}>
      <button className="btn" style={{ marginBottom: 20, borderRadius: 30 }} onClick={() => navigate("/student-dashboard")}>← Back to Dashboard</button>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: 20, color: "var(--dark-blue)" }}>Courses After 10th in Arts Stream</h1>

      {[
        { title: "Core Humanities & Social Sciences", items: ["BA in History", "BA in Political Science", "BA in Sociology", "BA in Psychology", "BA in Philosophy"] },
        { title: "Fine Arts, Design & Performing Arts", items: ["BFA", "B.Des.", "BA in Performing Arts", "BPA"] },
        { title: "Media, Communication & Journalism", items: ["BA in Mass Communication & Journalism", "BMM", "BA in Film Studies"] },
        { title: "Advertising, PR & Event Management", items: ["BA in Advertising & PR", "BBA in Event Management"] },
        { title: "Law, Policy & International Relations", items: ["BA LLB", "BBA LLB", "BA in International Relations"] },
        { title: "Psychology, Counseling & Social Work", items: ["BA in Psychology", "BSW", "BA in Human Development"] },
        { title: "Literature, Language & Linguistics", items: ["BA in English Literature", "BA in Linguistics", "BA in French/German/Spanish"] },
        { title: "Travel, Tourism & Hospitality", items: ["BA in Travel & Tourism Management", "BHM"] },
        { title: "Animation, Multimedia & Game Design", items: ["B.Sc. in Animation & Multimedia", "B.Des. in Game Design"] },
        { title: "Education & Teaching", items: ["BA in Education", "B.Ed."] },
        { title: "Anthropology, Geography & Environmental Studies", items: ["BA in Anthropology", "BA in Geography", "BA in Environmental Studies"] },
        { title: "Management & Business Studies", items: ["BBA", "BMS"] },
        { title: "Specialized & Emerging Fields", items: ["BA in Gender Studies", "BA in Cultural Studies", "BA in Criminology"] },
      ].map((section, i) => (
        <div key={i} style={sectionStyle}>
          <h2 style={{ fontSize: "1.8rem", color: "var(--deep-blue)", marginBottom: 15 }}>{section.title}</h2>
          <ul style={{ paddingLeft: 20 }}>
            {section.items.map((item, j) => <li key={j} style={{ marginBottom: 8, color: "var(--dark-blue)" }}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
