'use client';

import { useState } from 'react';
import { Upload, Plus } from 'lucide-react';

export function CreateChallengeForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reward, setReward] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle challenge creation
    console.log({ title, description, reward, deadline });
  };

  return (
    <div className="glass-card rounded-theme-lg p-6 gradient-border">
      <h2 className="text-2xl font-bold mb-6">Create New Challenge</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Challenge Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter an engaging title..."
            className="w-full px-4 py-3 bg-surface rounded-theme-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors duration-200"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your challenge..."
            rows={4}
            className="w-full px-4 py-3 bg-surface rounded-theme-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Reward Pool</label>
            <input
              type="text"
              value={reward}
              onChange={(e) => setReward(e.target.value)}
              placeholder="e.g., 100 USDC"
              className="w-full px-4 py-3 bg-surface rounded-theme-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors duration-200"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Deadline</label>
            <input
              type="text"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              placeholder="e.g., 24 hours"
              className="w-full px-4 py-3 bg-surface rounded-theme-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors duration-200"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Challenge Image (Optional)</label>
          <div className="border-2 border-dashed border-gray-700 rounded-theme-lg p-8 text-center hover:border-primary transition-colors duration-200 cursor-pointer">
            <Upload className="w-8 h-8 mx-auto mb-2 text-secondary" />
            <p className="text-sm text-secondary">Click to upload or drag and drop</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button type="submit" className="btn-primary flex-1">
            <Plus className="w-5 h-5 inline mr-2" />
            Create Challenge
          </button>
          <button type="button" className="btn-secondary">
            Save Draft
          </button>
        </div>
      </form>
    </div>
  );
}
