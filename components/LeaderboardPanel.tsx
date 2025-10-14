'use client';

import { Trophy, TrendingUp } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'Hailey Fahim', score: 5605, change: '+12%', avatar: '🏆' },
  { rank: 2, name: 'Dan Casterio', score: 4892, change: '+8%', avatar: '🥈' },
  { rank: 3, name: 'Sarah Chen', score: 4156, change: '+15%', avatar: '🥉' },
  { rank: 4, name: 'Alex Rivera', score: 3847, change: '+5%', avatar: '⭐' },
  { rank: 5, name: 'Emma Wilson', score: 3621, change: '+10%', avatar: '💫' },
];

export function LeaderboardPanel() {
  return (
    <div className="glass-card rounded-theme-lg p-6 gradient-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Trophy className="w-5 h-5 text-accent" />
          Leaderboard
        </h2>
        <button className="text-sm text-primary hover:text-secondary transition-colors duration-200">
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {leaderboardData.map((user) => (
          <div
            key={user.rank}
            className="flex items-center gap-3 p-3 rounded-theme-lg hover:bg-surface transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl flex-shrink-0">
              {user.avatar}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium truncate">{user.name}</span>
                <span className="text-xs text-success">{user.change}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-secondary">#{user.rank}</span>
                <span className="text-sm font-medium">{user.score.toLocaleString()} pts</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-surface rounded-theme-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-secondary">Your Rank</span>
          <TrendingUp className="w-4 h-4 text-success" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">#42</span>
          <span className="text-sm text-success">+5 this week</span>
        </div>
      </div>
    </div>
  );
}
