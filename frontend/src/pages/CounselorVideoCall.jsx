import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CounselorVideoCall() {
  const navigate = useNavigate();
  const localVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [messages, setMessages] = useState([{ sender: "counselor", text: "Hello! How can I help you today?" }]);
  const [msgInput, setMsgInput] = useState("");
  const [showChat, setShowChat] = useState(true);
  let localStream = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => { localStream.current = stream; if (localVideoRef.current) localVideoRef.current.srcObject = stream; })
      .catch(err => console.error(err));
  }, []);

  const toggleMute = () => {
    if (localStream.current) {
      localStream.current.getAudioTracks().forEach(t => t.enabled = isMuted);
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = () => {
    if (localStream.current) {
      localStream.current.getVideoTracks().forEach(t => t.enabled = isVideoOff);
      setIsVideoOff(!isVideoOff);
    }
  };

  const endCall = () => {
    if (confirm("End the call?")) {
      if (localStream.current) localStream.current.getTracks().forEach(t => t.stop());
      navigate("/counselor-dashboard");
    }
  };

  const sendMessage = () => {
    if (!msgInput.trim()) return;
    setMessages([...messages, { sender: "counselor", text: msgInput }]);
    setMsgInput("");
  };

  const btnStyle = { padding: "12px 24px", background: "var(--dark-blue)", color: "var(--white)", border: "none", borderRadius: 30, cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", gap: 8 };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Poppins',sans-serif" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: 20, background: "var(--white)" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
          <video ref={localVideoRef} autoPlay muted style={{ width: "100%", height: "80%", maxHeight: "70vh", background: "var(--medium-teal)", borderRadius: 12, objectFit: "cover" }} />
          <div style={{ position: "absolute", bottom: 20, right: 20, width: "25%", minWidth: 200, height: "25%", minHeight: 150, background: "var(--white)", borderRadius: 8, border: "2px solid var(--deep-blue)", overflow: "hidden" }}>
            <video autoPlay muted style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>
            <div style={{ position: "absolute", bottom: 5, left: 10, background: "rgba(0,0,0,0.5)", color: "white", padding: "3px 8px", borderRadius: 4, fontSize: "0.8rem" }}>Student</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 15, padding: "15px 0" }}>
          <button style={btnStyle} onClick={toggleMute}>
            <i className={`bx ${isMuted ? "bx-microphone-off" : "bx-microphone"}`}></i> {isMuted ? "Unmute" : "Mute"}
          </button>
          <button style={btnStyle} onClick={toggleVideo}>
            <i className={`bx ${isVideoOff ? "bx-video-off" : "bx-video"}`}></i> {isVideoOff ? "Camera On" : "Camera Off"}
          </button>
          <button style={btnStyle} onClick={() => setShowChat(!showChat)}>
            <i className="bx bx-chat"></i> Chat
          </button>
          <button style={{ ...btnStyle, background: "#e74c3c" }} onClick={endCall}>
            <i className="bx bx-phone-call"></i> End Call
          </button>
        </div>
      </div>

      {showChat && (
        <div style={{ width: 350, background: "var(--white)", borderLeft: "1px solid var(--medium-teal)", display: "flex", flexDirection: "column", height: "100vh" }}>
          <div style={{ padding: 15, borderBottom: "1px solid var(--medium-teal)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ color: "var(--dark-blue)" }}>Session Chat</h3>
            <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", color: "var(--dark-blue)" }} onClick={() => setShowChat(false)}><i className="bx bx-x"></i></button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: 15, background: "var(--light-teal)" }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                marginBottom: 15, padding: "10px 15px", borderRadius: 8, maxWidth: "80%",
                wordWrap: "break-word",
                background: m.sender === "counselor" ? "var(--deep-blue)" : "var(--white)",
                color: m.sender === "counselor" ? "var(--white)" : "var(--dark-blue)",
                marginLeft: m.sender === "counselor" ? "auto" : 0,
                border: m.sender !== "counselor" ? "1px solid var(--medium-teal)" : "none"
              }}>
                <strong>{m.sender === "counselor" ? "You:" : "Student:"}</strong> {m.text}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", padding: 15, borderTop: "1px solid var(--medium-teal)" }}>
            <input style={{ flex: 1, padding: 12, border: "1px solid var(--medium-teal)", borderRadius: 8, fontSize: "1rem" }} value={msgInput} onChange={e => setMsgInput(e.target.value)} onKeyPress={e => e.key === "Enter" && sendMessage()} placeholder="Type a message..." />
            <button style={{ padding: "12px 20px", background: "var(--dark-blue)", color: "var(--white)", border: "none", borderRadius: 8, cursor: "pointer", marginLeft: 10 }} onClick={sendMessage}><i className="bx bx-send"></i></button>
          </div>
        </div>
      )}
    </div>
  );
}
