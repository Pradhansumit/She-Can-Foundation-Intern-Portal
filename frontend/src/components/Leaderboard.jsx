import { useState, useEffect } from "react";

function Leaderboard({ onBack }) {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser] = useState({
    name: "John Doe",
    referralCode: "johndoe2025",
    totalDonations: 1250,
    rank: 3,
  });

  useEffect(() => {
    // Real API call to fetch leaderboard data
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/leaderboard");
        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard data");
        }
        const data = await response.json();
        setLeaderboardData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        // Fallback to dummy data if API fails
        const dummyData = [
          {
            name: "Sarah Johnson",
            referralCode: "sarah2025",
            totalDonations: 2500,
            rank: 1,
            avatar: "👑",
          },
          {
            name: "Mike Chen",
            referralCode: "mike2025",
            totalDonations: 1800,
            rank: 2,
            avatar: "🥈",
          },
          {
            name: "John Doe",
            referralCode: "johndoe2025",
            totalDonations: 1250,
            rank: 3,
            avatar: "🥉",
          },
          {
            name: "Emily Davis",
            referralCode: "emily2025",
            totalDonations: 950,
            rank: 4,
            avatar: "⭐",
          },
          {
            name: "Alex Kumar",
            referralCode: "alex2025",
            totalDonations: 750,
            rank: 5,
            avatar: "⭐",
          },
          {
            name: "Lisa Wang",
            referralCode: "lisa2025",
            totalDonations: 650,
            rank: 6,
            avatar: "⭐",
          },
          {
            name: "David Brown",
            referralCode: "david2025",
            totalDonations: 550,
            rank: 7,
            avatar: "⭐",
          },
          {
            name: "Maria Garcia",
            referralCode: "maria2025",
            totalDonations: 450,
            rank: 8,
            avatar: "⭐",
          },
        ];
        setLeaderboardData(dummyData);
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 2:
        return "bg-gray-100 text-gray-800 border-gray-200";
      case 3:
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return `#${rank}`;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Leaderboard
                </h1>
                <p className="text-gray-600">Top fundraising interns</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                #{currentUser.rank}
              </div>
              <div className="text-sm text-gray-600">Your Rank</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Current User Card */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow p-6 mb-8 border-2 border-green-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{getRankIcon(currentUser.rank)}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {currentUser.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentUser.referralCode}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                ${currentUser.totalDonations.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Your Total</div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Top Fundraisers
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {leaderboardData.map((user, index) => (
              <div
                key={user.referralCode}
                className={`px-6 py-4 hover:bg-gray-50 transition-colors duration-200 ${
                  user.referralCode === currentUser.referralCode
                    ? "bg-blue-50 border-l-4 border-blue-500"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{user.avatar}</div>
                      <div className="flex flex-col">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900">
                            {user.name}
                          </span>
                          {user.referralCode === currentUser.referralCode && (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              You
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500 font-mono">
                          {user.referralCode}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        ${user.totalDonations.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">raised</div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getRankColor(
                        user.rank,
                      )}`}
                    >
                      {getRankIcon(user.rank)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                $
                {leaderboardData
                  .reduce((sum, user) => sum + user.totalDonations, 0)
                  .toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Raised</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {leaderboardData.length}
              </div>
              <div className="text-sm text-gray-600">Active Interns</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                $
                {Math.round(
                  leaderboardData.reduce(
                    (sum, user) => sum + user.totalDonations,
                    0,
                  ) / leaderboardData.length,
                ).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Average per Intern</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Leaderboard;
