import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questionsPart1 = [
  { q: "What skill do you want to develop?", opts: ["Programming", "Leadership", "Design", "Legal analysis"], vals: ["Technology", "Business", "Arts", "Law"] },
  { q: "What kind of impact do you want to make?", opts: ["Reforming laws and policies", "Promoting sustainability", "Advancing healthcare", "Creating tech innovations"], vals: ["Law", "Environment", "Healthcare", "Technology"] },
  { q: "Which global issue do you want to address?", opts: ["Environmental degradation", "Access to healthcare", "Legal inequalities", "Economic disparities"], vals: ["Environment", "Healthcare", "Law", "Business"] },
  { q: "How do you prefer solving challenges?", opts: ["Technical solutions", "Data-driven strategies", "Creative storytelling", "Legal frameworks"], vals: ["Technology", "Business", "Arts", "Law"] },
  { q: "What inspires your career goals?", opts: ["Innovating new ideas", "Leading a startup", "Climbing the corporate ladder", "Solving global problems"], vals: ["Entrepreneurship", "Entrepreneurship", "Business", "Technology"] },
  { q: "How do you measure success?", opts: ["Achieving org goals", "Launching a venture", "Creating innovations", "Impacting through creativity"], vals: ["Business", "Entrepreneurship", "Technology", "Arts"] },
  { q: "What excites you in business?", opts: ["Strategic management", "Marketing", "Financial growth", "Scaling startups"], vals: ["Business", "Business", "Business", "Entrepreneurship"] },
  { q: "What inspires you in tech?", opts: ["ML models", "IoT devices", "Cloud computing", "Designing interfaces"], vals: ["Technology", "Technology", "Technology", "Arts"] },
  { q: "What motivates you to succeed?", opts: ["Bringing ideas to life", "Solving technical challenges", "Managing projects", "Creating impactful designs"], vals: ["Entrepreneurship", "Technology", "Business", "Arts"] },
  { q: "How do you stay engaged?", opts: ["Managing teams", "Solving challenges", "Creative solutions", "Drafting policies"], vals: ["Business", "Technology", "Arts", "Law"] },
];

const questionsPart2 = [
  { q: "How do you approach new challenges?", opts: ["Creating innovative solutions", "Developing strategies", "Legal research", "Exploring creative ideas"], vals: ["Technology", "Business", "Law", "Arts"] },
  { q: "What motivates your career?", opts: ["Building innovative products", "Leading changes", "Making legal reforms", "Advancing public health"], vals: ["Technology", "Business", "Law", "Healthcare"] },
  { q: "Which skill do you enjoy?", opts: ["Programming", "Designing", "Strategic planning", "Legal analysis"], vals: ["Technology", "Arts", "Business", "Law"] },
  { q: "What drives your curiosity?", opts: ["AI and data", "Legal systems", "Environmental sustainability", "Artistic expression"], vals: ["Technology", "Law", "Environment", "Arts"] },
  { q: "How do you prefer to work?", opts: ["Leading people", "Independently solving", "Collaborating creatively", "Analyzing policies"], vals: ["Business", "Technology", "Arts", "Law"] },
  { q: "What do you value most?", opts: ["Sustainable development", "Technological advancement", "Organizational growth", "Justice"], vals: ["Environment", "Technology", "Business", "Law"] },
  { q: "What work environment do you prefer?", opts: ["Tech startups", "Corporate offices", "Creative studios", "Law firms"], vals: ["Technology", "Business", "Arts", "Law"] },
  { q: "How do you make decisions?", opts: ["Analyzing data", "Testing solutions", "Researching regulations", "Following intuition"], vals: ["Business", "Technology", "Law", "Arts"] },
  { q: "What type of books do you enjoy?", opts: ["Science and tech", "Business and finance", "Legal thrillers", "Creative writing"], vals: ["Technology", "Business", "Law", "Arts"] },
  { q: "Ideal weekend activity?", opts: ["Coding a project", "Networking events", "Visiting galleries", "Outdoor conservation"], vals: ["Technology", "Business", "Arts", "Environment"] },
];

export default function AptitudeTest() {
  const navigate = useNavigate();
  const [page, setPage] = useState("welcome");
  const [scores, setScores] = useState({ Business: 0, Technology: 0, Healthcare: 0, Arts: 0, Law: 0, Entrepreneurship: 0, Environment: 0 });
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  const handleAnswer = (qIndex, value, part) => {
    setAnswers({ ...answers, [`p${part}_${qIndex}`]: value });
  };

  const submitPart = (part, nextPage) => {
    const qs = part === 1 ? questionsPart1 : questionsPart2;
    const allAnswered = qs.every((_, i) => answers[`p${part}_${i}`]);
    if (!allAnswered) { alert("Please answer all questions before submitting."); return; }

    const newScores = { ...scores };
    qs.forEach((_, i) => { const v = answers[`p${part}_${i}`]; if (v && newScores[v] !== undefined) newScores[v]++; });
    setScores(newScores);

    if (nextPage === "result") {
      const sorted = Object.entries(newScores).sort((a, b) => b[1] - a[1]);
      let txt = "<h3>Your aptitude scores:</h3>";
      sorted.forEach(([f, s]) => { txt += `<p><strong>${f}:</strong> ${s} points</p>`; });
      txt += `<h3 style="margin-top:20px">Your strongest aptitude is: <span style="color:var(--deep-blue)">${sorted[0][0]}</span></h3>`;
      setResult(txt);
      setPage("result");
    } else {
      setPage(nextPage);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "20px auto", padding: 20, background: "var(--white)", borderRadius: 8, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      {page === "welcome" && (
        <>
          <div style={{ marginBottom: 20, padding: 15, background: "var(--medium-teal)", borderRadius: 8, textAlign: "center" }}>
            <h1 style={{ color: "var(--dark-blue)" }}>Let's begin with Aptitude Test!</h1>
            <p>This test will help you discover your strengths and interests.</p>
          </div>
          <div style={{ marginBottom: 20, padding: 15, background: "var(--medium-teal)", borderRadius: 8 }}>
            <h2>Rules</h2>
            <ul style={{ paddingLeft: 20 }}>
              <li>Do not copy or share the questions.</li>
              <li>Answer all questions to get accurate results.</li>
              <li>Do not refresh the page during the test.</li>
            </ul>
          </div>
          <button className="btn" style={{ width: "100%", padding: 15 }} onClick={() => setPage("part1")}>Begin Test</button>
        </>
      )}

      {page === "part1" && (
        <>
          <h2 style={{ textAlign: "center", color: "var(--dark-blue)" }}>Part 1</h2>
          {questionsPart1.map((q, i) => (
            <div key={i} style={{ marginBottom: 20, padding: 15, border: "1px solid var(--medium-teal)", borderRadius: 8 }}>
              <p style={{ fontWeight: "bold", marginBottom: 10 }}>{i + 1}. {q.q}</p>
              {q.opts.map((opt, j) => (
                <label key={j} style={{ display: "block", marginBottom: 5, padding: 8, borderRadius: 4 }}>
                  <input type="radio" name={`p1_${i}`} value={q.vals[j]} onChange={() => handleAnswer(i, q.vals[j], 1)} /> {opt}
                </label>
              ))}
            </div>
          ))}
          <button className="btn" style={{ width: "100%", padding: 15 }} onClick={() => submitPart(1, "part2")}>Submit Part 1</button>
        </>
      )}

      {page === "part2" && (
        <>
          <h2 style={{ textAlign: "center", color: "var(--dark-blue)" }}>Part 2</h2>
          {questionsPart2.map((q, i) => (
            <div key={i} style={{ marginBottom: 20, padding: 15, border: "1px solid var(--medium-teal)", borderRadius: 8 }}>
              <p style={{ fontWeight: "bold", marginBottom: 10 }}>{i + 11}. {q.q}</p>
              {q.opts.map((opt, j) => (
                <label key={j} style={{ display: "block", marginBottom: 5, padding: 8, borderRadius: 4 }}>
                  <input type="radio" name={`p2_${i}`} value={q.vals[j]} onChange={() => handleAnswer(i, q.vals[j], 2)} /> {opt}
                </label>
              ))}
            </div>
          ))}
          <button className="btn" style={{ width: "100%", padding: 15 }} onClick={() => submitPart(2, "result")}>Submit Part 2</button>
        </>
      )}

      {page === "result" && (
        <>
          <h2 style={{ textAlign: "center", color: "var(--dark-blue)" }}>Your Aptitude Result</h2>
          <div style={{ marginTop: 20, padding: 20, background: "var(--medium-teal)", borderRadius: 8, textAlign: "center", fontSize: "1.2rem" }} dangerouslySetInnerHTML={{ __html: result }} />
          <button className="btn" style={{ width: "100%", padding: 15, marginTop: 20 }} onClick={() => navigate("/student-dashboard")}>GO TO DASHBOARD</button>
        </>
      )}
    </div>
  );
}
