import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoleSelection from "./pages/RoleSelection";
import StudentLogin from "./pages/StudentLogin";
import CounselorAuth from "./pages/CounselorAuth";
import AdminLogin from "./pages/AdminLogin";
import StudentDashboard from "./pages/StudentDashboard";
import CounselorDashboard from "./pages/CounselorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AptitudeTest from "./pages/AptitudeTest";
import Jobs from "./pages/Jobs";
import Scholarships from "./pages/Scholarships";
import ScienceStream from "./pages/ScienceStream";
import CommerceStream from "./pages/CommerceStream";
import ArtsStream from "./pages/ArtsStream";
import VideoCall from "./pages/VideoCall";
import CounselorVideoCall from "./pages/CounselorVideoCall";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/login" element={<StudentLogin />} />
          <Route path="/counselor-auth" element={<CounselorAuth />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/counselor-dashboard" element={<CounselorDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/aptitude-test" element={<AptitudeTest />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/science-stream" element={<ScienceStream />} />
          <Route path="/commerce-stream" element={<CommerceStream />} />
          <Route path="/arts-stream" element={<ArtsStream />} />
          <Route path="/video-call" element={<VideoCall />} />
          <Route path="/counselor-video-call" element={<CounselorVideoCall />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
