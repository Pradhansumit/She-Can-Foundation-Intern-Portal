# Fundraising Intern Portal

A full-stack fundraising intern portal built with React (Frontend) and Node.js/Express (Backend) for the She Can Foundation internship program.

## 🚀 Features

### Frontend (React + Tailwind CSS)

- **Modern Login/Signup Page** - Beautiful authentication interface with form validation
- **Dashboard** - Intern profile with referral code and donation tracking
- **Rewards System** - Badge-based achievement system with progress tracking
- **Leaderboard** - Real-time ranking of top fundraising interns
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Real API Integration** - Connected to backend REST API

### Backend (Node.js + Express)

- **RESTful API** - Clean endpoints for user data, leaderboard, and rewards
- **CORS Support** - Cross-origin resource sharing enabled
- **Dummy Data** - Realistic test data for demonstration
- **Error Handling** - Proper error responses and validation
- **Live Data Updates** - Real-time donation tracking

## 📋 Requirements Met

✅ **Frontend Features:**

- Dummy login/signup page (no auth needed)
- Dashboard showing intern name, referral code, and total donations
- Rewards/unlockables section with static display
- Modern, responsive UI with Tailwind CSS
- **Real API calls to backend**

✅ **Backend Features:**

- REST API returning dummy data for user info and donations
- Mock data for leaderboard and rewards
- CORS enabled for frontend communication
- **Live data updates via POST requests**

✅ **Bonus Features:**

- Leaderboard page with rankings and statistics
- Beautiful rewards/badges system
- Professional UI/UX design
- Component-based architecture
- **Full-stack integration**

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
npm start
```

The backend will run on `http://localhost:3000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (or 5174 if 5173 is busy)

## 🎯 How to Use

1. **Start the Backend:**

   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend:**

   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the Application:**
   - Open `http://localhost:5173` (or the port shown in terminal) in your browser
   - Use any email/password to "login" (demo mode)
   - Explore the dashboard, rewards, and leaderboard
   - **Test the API integration** by clicking the "+ Add $100 (Demo)" button

## 📁 Project Structure

```
She Can Foundation/
├── backend/
│   ├── index.js          # Express server with API endpoints
│   └── package.json      # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginSignup.jsx    # Authentication component
│   │   │   ├── Dashboard.jsx       # Main dashboard with API calls
│   │   │   ├── Rewards.jsx         # Badges and achievements
│   │   │   └── Leaderboard.jsx     # Rankings and stats
│   │   ├── App.jsx                 # Main app router
│   │   └── main.jsx                # Entry point
│   └── package.json                # Frontend dependencies
└── README.md                       # This file
```

## 🔧 API Endpoints

- `GET /api/user` - Get user data (name, referral code, donations)
- `GET /api/leaderboard` - Get leaderboard rankings
- `GET /api/rewards` - Get rewards/badges data
- `POST /api/donations` - Update donation amount (demo)

## 🔗 API Integration

The frontend now makes real API calls to the backend:

- **Dashboard** fetches user data from `/api/user`
- **Rewards** fetches badge data from `/api/rewards`
- **Leaderboard** fetches rankings from `/api/leaderboard`
- **Donation Updates** POST to `/api/donations` to update totals

All components include error handling and fallback to dummy data if the API is unavailable.

## 🎨 Design Features

- **Modern UI** - Clean, professional design with Tailwind CSS
- **Responsive Layout** - Works on all device sizes
- **Loading States** - Smooth loading animations
- **Color-coded Elements** - Visual hierarchy and status indicators
- **Hover Effects** - Interactive elements with smooth transitions
- **Real-time Updates** - Live data changes via API

## 🚀 Deployment Ready

The application is ready for deployment on:

- **Frontend:** Netlify, Vercel, GitHub Pages
- **Backend:** Render, Railway, Cyclic, Firebase Functions

## 📝 Demo Credentials

Since this is a demo, you can use any credentials:

- **Email:** any@example.com
- **Password:** any password
- **Demo User:** John Doe (Rank #3, $1,250 raised)

## 🧪 Testing the API

1. Start both backend and frontend servers
2. Login to the dashboard
3. Click the "+ Add $100 (Demo)" button to test the donation API
4. Check the browser console for API response logs
5. Navigate to Rewards and Leaderboard to see API data

## 🎯 Future Enhancements

- Real authentication system
- Database integration (MongoDB/PostgreSQL)
- Real-time updates with WebSocket
- Payment integration for donations
- Email notifications
- Admin dashboard

---


<img width="1919" height="874" alt="image" src="https://github.com/user-attachments/assets/0ba4706b-cd13-464b-844e-aef69acddbce" />
<img width="1919" height="867" alt="image" src="https://github.com/user-attachments/assets/572c32a3-b3c8-4d4b-aebc-4a647a923553" />
<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/32f80654-5e05-4197-a033-ef1dcbf5aace" />
<img width="1919" height="874" alt="image" src="https://github.com/user-attachments/assets/14c3691c-bb51-443f-beed-18f8b05352e3" />




**Built for She Can Foundation Internship Program** 🌟
