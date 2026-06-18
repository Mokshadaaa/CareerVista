const API_BASE = "http://localhost:4000";

export async function registerUser(data) {
  const res = await fetch(`${API_BASE}/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function loginUser(data) {
  const res = await fetch(`${API_BASE}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function registerCounselor(data) {
  const res = await fetch(`${API_BASE}/counselor/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function loginCounselor(data) {
  const res = await fetch(`${API_BASE}/counselor/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function saveTestResult(userId, testResult) {
  const res = await fetch(`${API_BASE}/user/save-result`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, testResult }),
  });
  return res.json();
}

export async function checkTestSubmission(userId) {
  const res = await fetch(`${API_BASE}/user/test-submission/${userId}`);
  return res.json();
}

export async function getStats() {
  const res = await fetch(`${API_BASE}/api/stats`);
  return res.json();
}

export async function getCounselors() {
  const res = await fetch(`${API_BASE}/api/counselors`);
  return res.json();
}

export async function getStudents() {
  const res = await fetch(`${API_BASE}/api/students`);
  return res.json();
}

export async function getVideos() {
  const res = await fetch(`${API_BASE}/api/videos`);
  return res.json();
}

export async function getFeedback() {
  const res = await fetch(`${API_BASE}/api/feedback`);
  return res.json();
}

export async function submitFeedback(data) {
  const res = await fetch(`${API_BASE}/submit-feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
