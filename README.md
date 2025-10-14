# KOL Engage - Base Mini App

A Farcaster-native social game rewarding users for creating and completing challenges that drive KOL amplification and community engagement.

## Features

- 🎯 Challenge Creation & Co-creation
- 👥 Crew Mechanics for Collaborative Content
- 🏆 KOL Amplification & Reward System
- 💰 On-chain Rewards on Base
- 🔐 Farcaster Identity Integration
- ⚡ Gasless Transactions via OnchainKit

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with Coinbase Theme
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx            # Main dashboard
├── providers.tsx       # OnchainKit provider setup
└── globals.css         # Global styles with Coinbase theme

components/
├── DashboardView.tsx   # Main dashboard container
├── Header.tsx          # App header with wallet
├── Sidebar.tsx         # Navigation sidebar
├── ChallengesFeed.tsx  # Challenge feed
├── ChallengeCard.tsx   # Individual challenge card
├── CreateChallengeForm.tsx  # Challenge creation
├── StatsOverview.tsx   # Stats cards
└── LeaderboardPanel.tsx     # Leaderboard

public/
└── farcaster.json      # Farcaster Mini App manifest
```

## Key Features Implementation

### Challenge System
- Create daily Farcaster-native challenges
- Invite friends to join crews
- Submit collaborative content
- Track KOL amplification

### Reward Mechanism
- On-chain reward distribution
- Transparent crypto/token rewards
- Crew-based reward sharing
- Reputation scoring

### Farcaster Integration
- Seamless identity with Basename/ENS
- MiniKit for Farcaster actions
- Frame-based challenges
- Native notifications

## Smart Contract Integration

The app integrates with Base smart contracts for:
- Challenge management
- Crew registry
- Reward distribution
- Fraud detection

## License

MIT
