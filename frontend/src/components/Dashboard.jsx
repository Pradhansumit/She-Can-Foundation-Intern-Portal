import { useState, useEffect } from "react";
import Rewards from "./Rewards";
import Leaderboard from "./Leaderboard";

function Dashboard({ onLogout }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState("dashboard"); // "dashboard", "rewards", or "leaderboard"

  useEffect(() => {
    // Real API call to fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/user");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Fallback to dummy data if API fails
        setUserData({
          name: "John Doe",
          referralCode: "johndoe2025",
          totalDonations: 1250,
          rank: 3,
        });
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleAddDonation = async (amount) => {
    try {
      const response = await fetch("http://localhost:3000/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      if (!response.ok) {
        throw new Error("Failed to update donation");
      }

      const result = await response.json();
      // Update the local state with new total
      setUserData((prev) => ({
        ...prev,
        totalDonations: result.newTotal,
      }));

      console.log("Donation updated successfully:", result);
    } catch (error) {
      console.error("Error updating donation:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (currentView === "rewards") {
    return <Rewards onBack={() => setCurrentView("dashboard")} />;
  }

  if (currentView === "leaderboard") {
    return <Leaderboard onBack={() => setCurrentView("dashboard")} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Intern Portal
              </h1>
              <p className="text-gray-600">Welcome back, {userData?.name}!</p>
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Info Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Your Profile
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium">{userData?.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Referral Code:</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">
                    {userData?.referralCode}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Current Rank:</span>
                  <span className="font-medium text-blue-600">
                    #{userData?.rank}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Donations Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Total Donations
              </h2>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${userData?.totalDonations?.toLocaleString()}
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Keep up the great work!
                </p>
                {/* Demo button to test API */}
                <button
                  onClick={() => handleAddDonation(100)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
                >
                  + Add $100 (Demo)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
              <div className="text-blue-600 font-medium">
                Share Referral Code
              </div>
              <div className="text-sm text-gray-600">
                Invite friends to join
              </div>
            </button>
            <button
              onClick={() => setCurrentView("leaderboard")}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
            >
              <div className="text-green-600 font-medium">View Leaderboard</div>
              <div className="text-sm text-gray-600">See how you rank</div>
            </button>
            <button
              onClick={() => setCurrentView("rewards")}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
            >
              <div className="text-purple-600 font-medium">View Rewards</div>
              <div className="text-sm text-gray-600">Check your badges</div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
