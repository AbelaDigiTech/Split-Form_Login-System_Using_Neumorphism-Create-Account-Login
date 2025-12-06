

const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS: if FRONTEND_ORIGIN set, restrict to it; otherwise allow all (dev)
const allowedOrigin = process.env.FRONTEND_ORIGIN || null;
if (allowedOrigin) {
  app.use(cors({ origin: allowedOrigin }));
  console.log("CORS restricted to:", allowedOrigin);
} else {
  app.use(cors());
  console.log("CORS: allowing all origins (set FRONTEND_ORIGIN in production)");
}

// Serve static frontend (public/)
app.use(express.static(path.join(__dirname, "public")));

// Data folder and users.json (note: ephemeral on Render)
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
const usersPath = path.join(dataDir, "users.json");
if (!fs.existsSync(usersPath)) fs.writeFileSync(usersPath, "[]", "utf8");

// Helpers
function loadUsers() {
  try {
    const raw = fs.readFileSync(usersPath, "utf8");
    return JSON.parse(raw || "[]");
  } catch (err) {
    console.error("Error reading users:", err);
    return [];
  }
}
function saveUsers(users) {
  try {
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2), "utf8");
  } catch (err) {
    console.error("Error saving users:", err);
  }
}

// ===== REGISTER =====
app.post("/register", (req, res) => {
  const { email, password, confirm } = req.body;
  if (!email) return res.json({ success: false, message: "Email is required!" });
  if (!password) return res.json({ success: false, message: "Password is required!" });
  if (!confirm) return res.json({ success: false, message: "Confirm password is required!" });
  if (password !== confirm) return res.json({ success: false, message: "Passwords do not match!" });

  const users = loadUsers();
  if (users.find(u => u.email === email)) {
    return res.json({ success: false, message: "Email already exists!" });
  }

  users.push({ email, password });
  saveUsers(users);
  res.json({ success: true, message: "Account created successfully!" });
});

// ===== LOGIN =====
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email) return res.json({ success: false, message: "Email is required!" });

  const users = loadUsers();
  const user = users.find(u => u.email === email);
  if (!user) return res.json({ success: false, message: "Email not found!" });
  if (user.password !== password) return res.json({ success: false, message: "Incorrect password!" });

  res.json({ success: true, message: "Login successful!" });
});

// ===== HEALTH CHECK (handy) =====
app.get("/health", (req, res) => res.json({ ok: true, env: process.env.NODE_ENV || "development" }));

// ===== START SERVER =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});