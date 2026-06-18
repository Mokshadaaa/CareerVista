import { useNavigate } from "react-router-dom";

const styles = {
  header: {
    position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000,
    background: "var(--white)", color: "var(--dark-blue)", padding: "20px 0",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
  },
  headerInner: {
    maxWidth: 1200, margin: "0 auto", padding: "0 20px",
    display: "flex", justifyContent: "space-between", alignItems: "center"
  },
  logo: { fontSize: "1.8rem", fontWeight: 700, color: "var(--deep-blue)" },
  logoSpan: { color: "var(--dark-blue)" },
  nav: { display: "flex", gap: 30, listStyle: "none", alignItems: "center" },
  navLink: { fontWeight: 500, cursor: "pointer", transition: "color 0.3s" },
  hero: {
    padding: "180px 0 100px", backgroundColor: "var(--light-teal)"
  },
  heroContainer: {
    maxWidth: 1200, margin: "0 auto", padding: "0 20px",
    display: "flex", alignItems: "center", justifyContent: "space-between"
  },
  heroContent: { flex: 1, paddingRight: 50 },
  heroImage: { flex: 1 },
  heroImg: { width: "100%", borderRadius: 10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
  heroH1: { fontSize: "3rem", marginBottom: 20, color: "var(--dark-blue)", fontWeight: 700, lineHeight: 1.2 },
  heroP: { fontSize: "1.1rem", marginBottom: 30, color: "var(--dark-blue)" },
  heroBtns: { display: "flex", gap: 15 },
  section: { padding: "100px 0" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: 30 },
  card: {
    backgroundColor: "var(--light-teal)", padding: 30, borderRadius: 10,
    transition: "transform 0.3s, box-shadow 0.3s"
  },
  cardH3: { fontSize: "1.5rem", marginBottom: 15, color: "var(--dark-blue)" },
  cardP: { color: "var(--dark-blue)" },
  icon: { fontSize: "2.5rem", color: "var(--deep-blue)", marginBottom: 20 },
  audienceGrid: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 20
  },
  audienceCard: {
    background: "var(--white)", padding: 25, borderRadius: 8, textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)", cursor: "pointer",
    transition: "transform 0.3s"
  },
  steps: { display: "flex", justifyContent: "space-between", marginTop: 50, position: "relative" },
  step: { flex: 1, textAlign: "center", padding: "0 20px" },
  stepNum: {
    width: 50, height: 50, background: "var(--deep-blue)", color: "var(--white)",
    borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "1.5rem", fontWeight: 700, margin: "0 auto 20px"
  },
  cta: {
    padding: "100px 0", background: "var(--dark-blue)", color: "var(--white)", textAlign: "center"
  },
  ctaH2: { fontSize: "2.5rem", marginBottom: 20 },
  ctaP: { fontSize: "1.2rem", marginBottom: 40, maxWidth: 700, marginLeft: "auto", marginRight: "auto", color: "var(--medium-teal)" },
  ctaBtns: { display: "flex", justifyContent: "center", gap: 20 },
  footer: { background: "var(--dark-blue)", color: "var(--white)", padding: "80px 0 30px" },
  footerGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 40, marginBottom: 50 },
  footerBottom: { textAlign: "center", paddingTop: 30, borderTop: "1px solid var(--deep-blue)", color: "var(--medium-teal)" },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.logo}>DigiLift<span style={styles.logoSpan}>Careers</span></div>
          <nav>
            <ul style={styles.nav}>
              <li><a style={styles.navLink} onClick={() => navigate("/login")}>Login</a></li>
              <li><a style={styles.navLink} onClick={() => navigate("/role-selection")}>Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroH1}>AI-Powered Career Guidance for Students</h1>
            <p style={styles.heroP}>Personalized career recommendations through our interactive platform with government scholarship integration and specialized career tracks.</p>
            <div style={styles.heroBtns}>
              <button className="btn" onClick={() => navigate("/role-selection")}>Get Free Guidance</button>
              <button className="btn btn-outline" onClick={() => navigate("/role-selection")}>Explore Services</button>
            </div>
          </div>
          <div style={styles.heroImage}>
            <img style={styles.heroImg} src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Students" />
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <h2 className="section-title">Why DigiLift Careers?</h2>
          <div style={styles.grid}>
            {[
              { icon: "bx bx-chip", title: "AI-Powered Recommendations", desc: "Get personalized career suggestions based on aptitude tests and academic records analysis." },
              { icon: "bx bx-lock", title: "DigiLocker Integration", desc: "Secure access to academic records for accurate, data-driven career suggestions." },
              { icon: "bx bx-award", title: "Scholarship Matching", desc: "Automatically matches students with relevant government scholarship opportunities." },
              { icon: "bx bx-briefcase", title: "Government Job Alerts", desc: "Real-time notifications for public sector job openings and exam notifications." },
              { icon: "bx bx-user-voice", title: "Civil Services Track", desc: "Specialized preparation with mentorship from retired bureaucrats." },
              { icon: "bx bx-code-alt", title: "Policy Hackathons", desc: "Engage in solving real-world governance challenges through competitions." },
              { icon: "bx bx-chat", title: "AI Chatbot Assistance", desc: "24/7 support for career-related queries and expert consultation scheduling." },
              { icon: "bx bx-data", title: "60+ Career Paths", desc: "Comprehensive database of career options with detailed roadmaps for each." },
            ].map((item, i) => (
              <div key={i} style={styles.card}>
                <i className={item.icon} style={styles.icon}></i>
                <h3 style={styles.cardH3}>{item.title}</h3>
                <p style={styles.cardP}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, backgroundColor: "var(--light-teal)" }}>
        <div className="container">
          <h2 className="section-title">Who Can Benefit?</h2>
          <div style={styles.audienceGrid}>
            {["Class 9-10 Students", "Class 11-12 Students", "College Students", "Recent Graduates"].map((item, i) => (
              <div key={i} style={styles.audienceCard}>
                <i className="bx bx-user-pin" style={{ fontSize: "2rem", color: "var(--deep-blue)", marginBottom: 15 }}></i>
                <h3 style={{ fontSize: "1.2rem", color: "var(--dark-blue)" }}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <h2 className="section-title">How Our Platform Works</h2>
          <div style={styles.steps}>
            {[
              { num: "1", title: "Create Profile", desc: "Sign up and complete your profile with basic information and academic details." },
              { num: "2", title: "Take Assessments", desc: "Complete our AI-powered aptitude and interest assessments." },
              { num: "3", title: "Get Recommendations", desc: "Receive personalized career path suggestions with detailed roadmaps." },
            ].map((step, i) => (
              <div key={i} style={styles.step}>
                <div style={styles.stepNum}>{step.num}</div>
                <h3 style={{ fontSize: "1.3rem", marginBottom: 15, color: "var(--dark-blue)" }}>{step.title}</h3>
                <p style={{ color: "var(--dark-blue)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, backgroundColor: "var(--light-teal)" }}>
        <div className="container">
          <h2 className="section-title">About Our Project</h2>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ marginBottom: 20, lineHeight: 1.8 }}>Many students struggle with career decisions due to limited guidance, while existing counseling services are often expensive or generic. DigiLift Careers is an AI-powered web platform designed to provide personalized career recommendations through an interactive and data-driven approach.</p>
            <p style={{ marginBottom: 20, lineHeight: 1.8 }}>The system integrates an AI chatbot for answering queries, expert consultations for in-depth guidance, and an aptitude test analysis module to assess students' strengths. Academic records are securely accessed via DigiLocker, ensuring seamless data integration.</p>
            <p style={{ marginBottom: 20, lineHeight: 1.8 }}>The platform also features government scholarship integration, automatically matching students with relevant opportunities and providing real-time notifications for public sector job openings.</p>
          </div>
        </div>
      </section>

      <section style={styles.cta}>
        <div className="container">
          <h2 style={styles.ctaH2}>Ready to Discover Your Career Path?</h2>
          <p style={styles.ctaP}>Join thousands of students who have found clarity in their career decisions with our AI-powered platform.</p>
          <div style={styles.ctaBtns}>
            <button className="btn" style={{ background: "var(--white)", color: "var(--dark-blue)" }} onClick={() => navigate("/login")}>Login</button>
            <button className="btn btn-outline" style={{ borderColor: "var(--white)", color: "var(--white)" }} onClick={() => navigate("/role-selection")}>Sign Up Now</button>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div className="container">
          <div style={styles.footerGrid}>
            <div>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 20 }}>
                DigiLift<span style={{ color: "var(--medium-teal)" }}>Careers</span>
              </div>
              <p style={{ color: "var(--medium-teal)", marginBottom: 20 }}>AI-powered career guidance platform helping students make informed career decisions.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 20 }}>Contact Us</h3>
              <p style={{ color: "var(--medium-teal)", marginBottom: 15 }}><i className="bx bx-phone" style={{ marginRight: 10 }}></i> +91 98765 43210</p>
              <p style={{ color: "var(--medium-teal)", marginBottom: 15 }}><i className="bx bx-envelope" style={{ marginRight: 10 }}></i> info@digiliftcareers.com</p>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p>&copy; 2024 DigiLift Careers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
