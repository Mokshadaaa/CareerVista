import { useNavigate } from "react-router-dom";

const sectionStyle = { background: "var(--white)", padding: 25, borderRadius: 10, boxShadow: "0 4px 15px rgba(0,0,0,0.05)", marginBottom: 30, border: "1px solid var(--medium-teal)" };

export default function CommerceStream() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 20, background: "var(--light-teal)", minHeight: "100vh" }}>
      <button className="btn" style={{ marginBottom: 20, borderRadius: 30 }} onClick={() => navigate("/student-dashboard")}>← Back to Dashboard</button>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: 20, color: "var(--dark-blue)" }}>Courses After 10th in Commerce Stream</h1>

      {[
        { title: "Core Commerce & Finance", items: ["B.Com.", "B.Com. (Honours)", "BBA", "BBI (Banking & Insurance)", "BFM (Financial Markets)", "BAF (Accounting & Finance)"] },
        { title: "Management & Business Studies", items: ["BMS", "BBA", "Integrated MBA (5-Year)"] },
        { title: "IT & Technology in Commerce", items: ["BCA", "B.Sc. in IT", "B.Sc. in Data Analytics"] },
        { title: "Economics & Policy Studies", items: ["BA in Economics", "B.Sc. in Economics"] },
        { title: "Law & Legal Studies", items: ["BA LLB", "BBA LLB"] },
        { title: "Banking, Finance & Insurance", items: ["B.Com. in Banking & Insurance", "B.Com. in Financial Markets", "B.Com. in Accounting & Finance"] },
        { title: "Entrepreneurship", items: ["BBA in Entrepreneurship", "BMS in Family Business Management"] },
        { title: "Creative & Media", items: ["B.Des.", "BMM (Mass Media)", "BBA in Media Management"] },
        { title: "Aviation & Logistics", items: ["BBA in Aviation Management", "B.Sc. in Logistics & Supply Chain"] },
        { title: "Actuarial & Risk Management", items: ["B.Sc. in Actuarial Science", "B.Com. in Risk Management"] },
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
