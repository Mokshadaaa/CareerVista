import { useNavigate } from "react-router-dom";

const sectionStyle = { background: "var(--white)", padding: 25, borderRadius: 10, boxShadow: "0 4px 15px rgba(0,0,0,0.05)", marginBottom: 30, border: "1px solid var(--medium-teal)" };

export default function ScienceStream() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 20, background: "var(--light-teal)", minHeight: "100vh" }}>
      <button className="btn" style={{ marginBottom: 20, borderRadius: 30 }} onClick={() => navigate("/student-dashboard")}>← Back to Dashboard</button>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: 20, color: "var(--dark-blue)" }}>Courses After 10th in Science Stream</h1>

      {[
        { title: "Medical & Allied Sciences", items: ["MBBS – Become a doctor", "BDS – Dental surgery", "BAMS – Ayurvedic medicine", "BHMS – Homeopathic medicine", "B.V.Sc – Veterinary science", "BPT – Physiotherapy", "B.Sc. Nursing"] },
        { title: "Pure Sciences & Research", items: ["B.Sc. in Physics, Chemistry, Biology", "B.Sc. in Biotechnology", "B.Sc. in Microbiology", "B.Sc. in Environmental Science", "B.Sc. in Agriculture", "B.Sc. in Forensic Science"] },
        { title: "Engineering & Technology", items: ["B.E./B.Tech. in Computer Science", "B.E./B.Tech. in Electronics & Communication", "B.E./B.Tech. in Mechanical Engineering", "B.E./B.Tech. in Civil Engineering", "B.E./B.Tech. in AI & Data Science"] },
        { title: "Mathematics & Statistics", items: ["B.Sc. in Mathematics", "B.Sc. in Statistics", "B.Sc. in Actuarial Science"] },
        { title: "Aviation & Maritime", items: ["B.Sc. in Aviation", "B.Tech. in Aeronautical Engineering", "B.Sc. in Nautical Science"] },
        { title: "Management & Business", items: ["BBA", "BMS", "Integrated MBA (5-Year)"] },
        { title: "Design, Media & Creative Arts", items: ["B.Des. (Bachelor of Design)", "B.Sc. in Animation & Multimedia", "B.Arch."] },
        { title: "IT & Computer Applications", items: ["BCA", "B.Sc. in Information Technology", "B.Sc. in Data Science", "B.Sc. in Cybersecurity"] },
        { title: "Law & Legal Studies", items: ["BA LLB (Integrated Law Course)"] },
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
