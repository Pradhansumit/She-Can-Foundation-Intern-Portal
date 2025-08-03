const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy data
const userData = {
  name: "John Doe",
  referralCode: "johndoe2025",
  totalDonations: 1250,
  rank: 3,
};

const leaderboardData = [
  {
    name: "Sarah Johnson",
    referralCode: "sarah2025",
    totalDonations: 2500,
    rank: 1,
  },
  {
    name: "Mike Chen",
    referralCode: "mike2025",
    totalDonations: 1800,
    rank: 2,
  },
  {
    name: "John Doe",
    referralCode: "johndoe2025",
    totalDonations: 1250,
    rank: 3,
  },
  {
    name: "Emily Davis",
    referralCode: "emily2025",
    totalDonations: 950,
    rank: 4,
  },
  {
    name: "Alex Kumar",
    referralCode: "alex2025",
    totalDonations: 750,
    rank: 5,
  },
];

const rewardsData = [
  {
    id: 1,
    name: "Bronze Badge",
    description: "Raise your first $100",
    unlocked: true,
  },
  {
    id: 2,
    name: "Silver Badge",
    description: "Raise $500 total",
    unlocked: true,
  },
  {
    id: 3,
    name: "Gold Badge",
    description: "Raise $1000 total",
    unlocked: true,
  },
  {
    id: 4,
    name: "Diamond Badge",
    description: "Raise $2000 total",
    unlocked: false,
  },
  {
    id: 5,
    name: "Platinum Badge",
    description: "Raise $5000 total",
    unlocked: false,
  },
];

// API Routes
app.get("/", (req, res) => {
  res.send("Intern Portal API is running!");
});

// Get user data
app.get("/api/user", (req, res) => {
  res.json(userData);
});

// Get leaderboard
app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboardData);
});

// Get rewards
app.get("/api/rewards", (req, res) => {
  res.json(rewardsData);
});

// Update donations (for demo purposes)
app.post("/api/donations", (req, res) => {
  const { amount } = req.body;
  if (amount && typeof amount === "number") {
    userData.totalDonations += amount;
    res.json({ success: true, newTotal: userData.totalDonations });
  } else {
    res.status(400).json({ error: "Invalid amount" });
  }
});

app.listen(port, () => {
  console.log(`Intern Portal API listening on port ${port}`);
});
