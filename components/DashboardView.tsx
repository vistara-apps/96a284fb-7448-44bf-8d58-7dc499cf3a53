'use client';

import { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { ChallengesFeed } from './ChallengesFeed';
import { StatsOverview } from './StatsOverview';
import { LeaderboardPanel } from './LeaderboardPanel';

export function DashboardView() {
  const [activeView, setActiveView] = useState<'challenges' | 'create' | 'crews'>('challenges');

  return (
    <div className="min-h-screen flex">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <StatsOverview />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <div className="lg:col-span-2">
                <ChallengesFeed activeView={activeView} />
              </div>
              
              <div className="lg:col-span-1">
                <LeaderboardPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
