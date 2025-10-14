'use client';

import { ChallengeCard } from './ChallengeCard';
import { CreateChallengeForm } from './CreateChallengeForm';

interface ChallengesFeedProps {
  activeView: string;
}

const mockChallenges = [
  {
    id: '1',
    title: 'Farcaster Daily',
    description: 'Complete one 6-daily challenge with/to our 10 friends',
    creator: 'Hailey Fahim salute',
    creatorAvatar: 'https://i.imgur.com/placeholder1.jpg',
    participants: 5,
    reward: '150 USDC',
    deadline: '2h left',
    status: 'active' as const,
    image: 'https://i.imgur.com/placeholder-challenge.jpg',
  },
  {
    id: '2',
    title: 'Comedy Daily',
    description: 'Make your funniest meme about crypto',
    creator: 'Dan Casterio',
    creatorAvatar: 'https://i.imgur.com/placeholder2.jpg',
    participants: 12,
    reward: '200 USDC',
    deadline: '5h left',
    status: 'active' as const,
  },
  {
    id: '3',
    title: 'KOL Spotlight',
    description: 'Get 3 KOLs to engage with your content',
    creator: 'Sarah Chen',
    creatorAvatar: 'https://i.imgur.com/placeholder3.jpg',
    participants: 8,
    reward: '300 USDC',
    deadline: '1d left',
    status: 'active' as const,
  },
];

export function ChallengesFeed({ activeView }: ChallengesFeedProps) {
  if (activeView === 'create') {
    return <CreateChallengeForm />;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Active Challenges</h2>
        <div className="flex gap-2">
          <button className="btn-secondary text-sm">All</button>
          <button className="glass-card px-4 py-2 rounded-theme-md text-sm hover:bg-opacity-70 transition-all duration-200">
            My Challenges
          </button>
          <button className="glass-card px-4 py-2 rounded-theme-md text-sm hover:bg-opacity-70 transition-all duration-200">
            Trending
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {mockChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
