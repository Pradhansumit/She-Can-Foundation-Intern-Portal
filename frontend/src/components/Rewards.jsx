import { useState, useEffect } from "react";

function Rewards({ onBack }) {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Real API call to fetch rewards data
    const fetchRewards = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/rewards");
        if (!response.ok) {
          throw new Error("Failed to fetch rewards data");
        }
        const data = await response.json();
        setRewards(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rewards:", error);
        // Fallback to dummy data if API fails
        const dummyRewards = [
          {
            id: 1,
            name: "Bronze Badge",
            description: "Raise your first $100",
            unlocked: true,
            icon: "🥉",
            color: "bronze",
          },
          {
            id: 2,
            name: "Silver Badge",
            description: "Raise $500 total",
            unlocked: true,
            icon: "🥈",
            color: "silver",
          },
          {
            id: 3,
            name: "Gold Badge",
            description: "Raise $1000 total",
            unlocked: true,
            icon: "🥇",
            color: "gold",
          },
          {
            id: 4,
            name: "Diamond Badge",
            description: "Raise $2000 total",
            unlocked: false,
            icon: "💎",
            color: "diamond",
          },
          {
            id: 5,
            name: "Platinum Badge",
            description: "Raise $5000 total",
            unlocked: false,
            icon: "💠",
            color: "platinum",
          },
          {
            id: 6,
            name: "Fundraising Champion",
            description: "Top 10 on leaderboard",
            unlocked: false,
            icon: "🏆",
            color: "champion",
          },
        ];
        setRewards(dummyRewards);
        setLoading(false);
      }
    };

    fetchRewards();
  }, []);

  const getBadgeColor = (color, unlocked) => {
    if (!unlocked) return "bg-gray-200 text-gray-400";

    switch (color) {
      case "bronze":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "silver":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "gold":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "diamond":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "platinum":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "champion":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading rewards...</p>
        </div>
      </div>
    );
  }

  const unlockedCount = rewards.filter((reward) => reward.unlocked).length;
  const totalCount = rewards.length;

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
                  Rewards & Badges
                </h1>
                <p className="text-gray-600">
                  {unlockedCount} of {totalCount} badges unlocked
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round((unlockedCount / totalCount) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Progress</h2>
            <span className="text-sm text-gray-600">
              {unlockedCount}/{totalCount} badges
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className={`bg-white rounded-lg shadow p-6 border-2 transition-all duration-200 ${
                reward.unlocked
                  ? "border-green-200 hover:shadow-lg"
                  : "border-gray-200 opacity-60"
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{reward.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {reward.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {reward.description}
                </p>
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                    reward.unlocked
                      ? getBadgeColor(reward.color, true)
                      : "bg-gray-100 text-gray-400 border-gray-200"
                  }`}
                >
                  {reward.unlocked ? "✓ Unlocked" : "🔒 Locked"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Tips */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            💡 How to unlock more badges:
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Share your referral code with friends and family</li>
            <li>• Reach fundraising milestones ($100, $500, $1000, etc.)</li>
            <li>• Climb the leaderboard to unlock special achievements</li>
            <li>• Stay active and consistent with your fundraising efforts</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Rewards;
