'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Identity } from '@coinbase/onchainkit/identity';
import { Bell, Settings2 } from 'lucide-react';

export function Header() {
  return (
    <header className="glass-card border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gradient">KOL Engage</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface rounded-theme-md transition-colors duration-200">
            <Bell className="w-5 h-5" />
          </button>
          
          <button className="p-2 hover:bg-surface rounded-theme-md transition-colors duration-200">
            <Settings2 className="w-5 h-5" />
          </button>
          
          <Wallet>
            <ConnectWallet>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-theme-lg">
                <Avatar className="w-8 h-8" />
                <Name className="font-medium" />
              </div>
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </header>
  );
}
