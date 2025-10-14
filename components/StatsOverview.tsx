'use client';

import { TrendingUp, Users, Award, Coins } from 'lucide-react';

const stats = [
  { label: 'Total Earned', value: '$1,245', change: '+12.5%', icon: Coins, color: 'text-success' },
  { label: 'Active Challenges', value: '8', change: '+3', icon: TrendingUp, color: 'text-primary' },
  { label: 'Crew Members', value: '24', change: '+5', icon: Users, color: 'text-secondary' },
  { label: 'KOL Reposts', value: '156', change: '+28', icon: Award, color: 'text-accent' },
];

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="metric-card gradient-border">
            <div className="flex items-start justify-between mb-2">
              <div className={`p-2 rounded-theme-md bg-surface ${stat.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs text-success font-medium">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-sm text-secondary">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
