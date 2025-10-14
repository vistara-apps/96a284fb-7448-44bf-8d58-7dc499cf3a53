'use client';

import { Users, Clock, Award } from 'lucide-react';
import { Avatar } from '@coinbase/onchainkit/identity';

interface Challenge {
  id: string;
  title: string;
  description: string;
  creator: string;
  creatorAvatar: string;
  participants: number;
  reward: string;
  deadline: string;
  status: 'active' | 'completed' | 'pending';
  image?: string;
}

interface ChallengeCardProps {
  challenge: Challenge;
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <div className="glass-card rounded-theme-lg p-6 gradient-border hover:bg-opacity-80 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
          <span className="text-xl">🎯</span>
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold mb-1">{challenge.title}</h3>
              <p className="text-secondary text-sm">{challenge.description}</p>
            </div>
            <span className="px-3 py-1 bg-success bg-opacity-20 text-success rounded-full text-xs font-medium">
              {challenge.status}
            </span>
          </div>
          
          <div className="flex items-center gap-2 mt-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-surface"></div>
            <span className="text-sm text-secondary">{challenge.creator}</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-secondary">
              <Users className="w-4 h-4" />
              <span>{challenge.participants} participants</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <Clock className="w-4 h-4" />
              <span>{challenge.deadline}</span>
            </div>
            <div className="flex items-center gap-2 text-success">
              <Award className="w-4 h-4" />
              <span className="font-medium">{challenge.reward}</span>
            </div>
          </div>
          
          <div className="flex gap-3 mt-4">
            <button className="btn-primary flex-1">
              Join Challenge
            </button>
            <button className="btn-secondary">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
