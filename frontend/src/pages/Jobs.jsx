import { useState } from "react";
import { useNavigate } from "react-router-dom";

const jobData = [
  { title: "Junior Engineer (Civil)", dept: "Public Works Department", location: "New Delhi", lastDate: "15 Aug 2023", qualification: "Diploma in Civil Engineering" },
  { title: "Staff Nurse", dept: "Health Department", location: "Mumbai", lastDate: "20 Aug 2023", qualification: "B.Sc Nursing" },
  { title: "Tax Assistant", dept: "Income Tax Department", location: "Multiple Locations", lastDate: "10 Sep 2023", qualification: "Graduate with Tally Knowledge" },
  { title: "Agricultural Officer", dept: "Agriculture Department", location: "Jaipur", lastDate: "25 Aug 2023", qualification: "B.Sc Agriculture" },
  { title: "Police Constable", dept: "State Police", location: "Lucknow", lastDate: "30 Aug 2023", qualification: "12th Pass" },
];

export default function Jobs() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar" style={{ background: "var(--white)", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "15px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
        <h2 style={{ color: "var(--dark-blue)" }}>DigiLift Careers</h2>
        <button className="btn" style={{ borderRadius: 30, padding: "10px 20px" }} onClick={() => navigate("/student-dashboard")}>Back to Dashboard</button>
      </div>

      <div style={{ textAlign: "center", padding: "6rem 0 2rem", background: "linear-gradient(135deg, var(--medium-teal), var(--light-teal))", borderBottom: "2px solid var(--deep-blue)" }}>
        <h2 style={{ fontSize: "2rem", color: "var(--dark-blue)", marginBottom: "0.5rem" }}>Find Your Perfect Government Job</h2>
        <p style={{ fontSize: "1.1rem", maxWidth: 800, margin: "0 auto" }}>Get matched with the latest Sarkari Naukri opportunities.</p>
      </div>

      <div style={{ maxWidth: 1200, margin: "2rem auto", padding: "0 20px" }}>
        <h3 style={{ color: "var(--deep-blue)", marginBottom: "1.5rem" }}>Latest Government Job Openings</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px,1fr))", gap: "1.5rem" }}>
          {jobData.map((job, i) => (
            <div key={i} style={{ background: "var(--white)", borderRadius: 10, overflow: "hidden", border: "1px solid var(--medium-teal)" }}>
              <div style={{ background: "var(--deep-blue)", color: "var(--white)", padding: "1rem" }}>
                <h3 style={{ fontSize: "1.2rem" }}>{job.title}</h3>
                <span style={{ display: "inline-block", background: "var(--light-teal)", color: "var(--dark-blue)", padding: "0.3rem 0.8rem", borderRadius: 20, fontSize: "0.8rem", marginTop: 8 }}>{job.dept}</span>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <p style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: 8 }}><i className="bx bx-map-pin" style={{ color: "var(--deep-blue)" }}></i> {job.location}</p>
                <p style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: 8 }}><i className="bx bx-calendar" style={{ color: "var(--deep-blue)" }}></i> Last Date: {job.lastDate}</p>
                <p style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: 8 }}><i className="bx bx-graduation" style={{ color: "var(--deep-blue)" }}></i> {job.qualification}</p>
                <button className="btn" style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem" }}>Apply Now</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "var(--white)", borderRadius: 10, padding: "2rem", marginTop: "3rem", border: "1px solid var(--medium-teal)" }}>
          <h3 style={{ color: "var(--deep-blue)", textAlign: "center", marginBottom: "1.5rem" }}>Free Exam Preparation Resources</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: "1.5rem" }}>
            {["UPSC Civil Services", "SSC CGL", "Banking Exams", "Railway Recruitment", "Defense Exams"].map((exam, i) => (
              <div key={i} style={{ background: "var(--light-teal)", borderRadius: 10, padding: "1.5rem", textAlign: "center", border: "1px solid var(--medium-teal)" }}>
                <h4 style={{ color: "var(--deep-blue)", marginBottom: "0.5rem" }}>{exam}</h4>
                <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Comprehensive study material and mock tests.</p>
                <button className="btn" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>Start Preparing</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
