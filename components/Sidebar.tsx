'use client';

import { Home, Trophy, Users, TrendingUp, Zap, Target, Wallet as WalletIcon } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: 'challenges' | 'create' | 'crews') => void;
}

const menuItems = [
  { id: 'challenges', label: 'Challenges', icon: Home },
  { id: 'create', label: 'Create', icon: Zap },
  { id: 'crews', label: 'My Crews', icon: Users },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  { id: 'kols', label: 'KOLs', icon: TrendingUp },
  { id: 'rewards', label: 'Rewards', icon: Target },
  { id: 'wallet', label: 'Wallet', icon: WalletIcon },
];

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="w-64 glass-card border-r border-gray-700 p-4 hidden md:block">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-theme-lg transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-theme-button'
                  : 'hover:bg-surface text-secondary hover:text-fg'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="mt-8 p-4 glass-card rounded-theme-lg gradient-border">
        <h3 className="font-semibold mb-2">Daily Streak</h3>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-surface rounded-full h-2">
            <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
          <span className="text-sm font-medium">6/10</span>
        </div>
        <p className="text-xs text-secondary mt-2">Complete 4 more challenges to unlock bonus rewards!</p>
      </div>
    </aside>
  );
}
