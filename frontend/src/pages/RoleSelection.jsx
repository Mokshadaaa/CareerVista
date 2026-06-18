import { useNavigate } from "react-router-dom";

const wrapperStyle = {
  minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
  padding: 20, backgroundColor: "var(--light-teal)"
};

const containerStyle = {
  background: "var(--white)", borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  width: "100%", maxWidth: 1000, overflow: "hidden"
};

const headerStyle = {
  background: "var(--deep-blue)", color: "var(--white)", padding: 40, textAlign: "center"
};

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: 10, fontWeight: 600 }}>Welcome to DigiLift Careers</h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>Select your role to continue</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 30, padding: 40 }}>
          {[
            { icon: "bx bx-user", title: "Student", desc: "Get personalized career guidance, aptitude analysis, and roadmap for your future success.", path: "/login" },
            { icon: "bx bx-chat", title: "Counselor", desc: "Guide students with your expertise and manage counseling sessions through our platform.", path: "/counselor-auth" },
            { icon: "bx bx-cog", title: "Administrator", desc: "Manage system configurations, user accounts, and platform settings.", path: "/admin-login" },
          ].map((role, i) => (
            <div key={i} style={{
              background: "var(--white)", borderRadius: 12, padding: 30, textAlign: "center",
              transition: "all 0.3s", border: "1px solid var(--medium-teal)",
              boxShadow: "0 5px 15px rgba(0,0,0,0.03)"
            }}>
              <div style={{
                width: 80, height: 80, margin: "0 auto 25px", display: "flex",
                alignItems: "center", justifyContent: "center",
                backgroundColor: "var(--medium-teal)", borderRadius: "50%"
              }}>
                <i className={role.icon} style={{ fontSize: "2.5rem", color: "var(--deep-blue)" }}></i>
              </div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: 15, color: "var(--dark-blue)" }}>{role.title}</h3>
              <p style={{ color: "var(--dark-blue)", opacity: 0.8, marginBottom: 25, fontSize: "0.95rem", lineHeight: 1.6 }}>{role.desc}</p>
              <button className="btn" onClick={() => navigate(role.path)} style={{ borderRadius: 30 }}>
                Continue as {role.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
