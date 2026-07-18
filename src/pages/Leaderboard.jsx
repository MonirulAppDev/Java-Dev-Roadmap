import React, { useState } from 'react';
import { Trophy, Medal, Star, Flame, Crown, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import useProgressStore from '../store/useProgressStore';
import './Leaderboard.css';

// Simulated leaderboard data
const generateMockData = (currentUserXP) => {
  const users = [
    { id: 1, name: "CodeNinja99", xp: 14500, avatar: "🥷", streak: 45 },
    { id: 2, name: "JavaBean", xp: 12200, avatar: "☕", streak: 12 },
    { id: 3, name: "SpringMaster", xp: currentUserXP + 500, avatar: "🍃", streak: 28 },
    { id: 4, name: "AlgoRhythm", xp: 8900, avatar: "🎵", streak: 5 },
    { id: 5, name: "DebugDuck", xp: 7500, avatar: "🦆", streak: 14 },
    { id: 6, name: "ByteMe", xp: 6200, avatar: "💻", streak: 3 },
    { id: 7, name: "SyntaxError", xp: currentUserXP - 300, avatar: "⚠️", streak: 1 },
    { id: 8, name: "CoffeeCoder", xp: 4100, avatar: "☕", streak: 8 },
    { id: 9, name: "LambdaLover", xp: 3500, avatar: "λ", streak: 0 },
  ];
  
  // Add current user
  users.push({
    id: 'current',
    name: "You (Learner)",
    xp: currentUserXP,
    avatar: "👤",
    streak: useProgressStore.getState().streak,
    isCurrent: true
  });

  // Sort by XP descending
  return users.sort((a, b) => b.xp - a.xp).map((u, index) => ({ ...u, rank: index + 1 }));
};

const Leaderboard = () => {
  const { totalXP, getLevel } = useProgressStore();
  const [timeframe, setTimeframe] = useState('all-time'); // 'weekly', 'all-time'
  const level = getLevel();
  
  const leaderboardData = generateMockData(totalXP);
  
  // Get top 3
  const top3 = leaderboardData.slice(0, 3);
  const rest = leaderboardData.slice(3);

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown size={20} color="#fbbf24" />;
    if (rank === 2) return <Medal size={20} color="#94a3b8" />;
    if (rank === 3) return <Medal size={20} color="#b45309" />;
    return <span className="rank-number">{rank}</span>;
  };

  return (
    <div className="leaderboard-page">
      <div className="leaderboard-header animate-fade-in-up">
        <div>
          <h1 className="section-title">Global Leaderboard</h1>
          <p className="section-subtitle">See how you rank against other Java learners.</p>
        </div>
        
        <div className="timeframe-toggle">
           <button className={`toggle-btn ${timeframe === 'weekly' ? 'active' : ''}`} onClick={() => setTimeframe('weekly')}>Weekly</button>
           <button className={`toggle-btn ${timeframe === 'all-time' ? 'active' : ''}`} onClick={() => setTimeframe('all-time')}>All Time</button>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="podium-container animate-fade-in-up">
         {/* 2nd Place */}
         {top3[1] && (
            <div className="podium-item place-2">
               <div className="podium-avatar">{top3[1].avatar}</div>
               <div className="podium-name">{top3[1].name}</div>
               <div className="podium-xp">{top3[1].xp.toLocaleString()} XP</div>
               <div className="podium-bar">
                  <div className="podium-rank">2</div>
               </div>
            </div>
         )}
         
         {/* 1st Place */}
         {top3[0] && (
            <div className="podium-item place-1">
               <Crown size={32} color="#fbbf24" className="crown-icon" />
               <div className="podium-avatar">{top3[0].avatar}</div>
               <div className="podium-name">{top3[0].name}</div>
               <div className="podium-xp">{top3[0].xp.toLocaleString()} XP</div>
               <div className="podium-bar">
                  <div className="podium-rank">1</div>
               </div>
            </div>
         )}

         {/* 3rd Place */}
         {top3[2] && (
            <div className="podium-item place-3">
               <div className="podium-avatar">{top3[2].avatar}</div>
               <div className="podium-name">{top3[2].name}</div>
               <div className="podium-xp">{top3[2].xp.toLocaleString()} XP</div>
               <div className="podium-bar">
                  <div className="podium-rank">3</div>
               </div>
            </div>
         )}
      </div>

      {/* Leaderboard List */}
      <div className="leaderboard-list animate-fade-in-up">
         <div className="list-header">
            <div className="col-rank">Rank</div>
            <div className="col-user">User</div>
            <div className="col-streak hide-mobile">Streak</div>
            <div className="col-xp">Score</div>
         </div>
         
         {rest.map(user => (
            <div key={user.id} className={`list-row ${user.isCurrent ? 'current-user' : ''}`}>
               <div className="col-rank">
                  {getRankIcon(user.rank)}
               </div>
               <div className="col-user">
                  <div className="user-avatar">{user.avatar}</div>
                  <div className="user-info">
                     <span className="user-name">{user.name}</span>
                     {user.isCurrent && <span className="user-badge">Lv {level.level}</span>}
                  </div>
               </div>
               <div className="col-streak hide-mobile">
                  {user.streak > 0 ? (
                     <span className="streak-pill"><Flame size={12} color="#ff6b35" /> {user.streak}</span>
                  ) : (
                     <span className="text-muted">-</span>
                  )}
               </div>
               <div className="col-xp">
                  <span className="xp-amount">{user.xp.toLocaleString()} XP</span>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default Leaderboard;