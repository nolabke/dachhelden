export interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'admin' | 'user';
}

export interface PointsEntry {
  id: string;
  userId: string;
  amount: number;
  category: 'Anwesenheit' | 'Pünktlichkeit' | 'Ziele' | 'Sonstiges';
  reason: string;
  givenAt: Date;
  weekNumber: number;
}

export interface RankingEntry {
  rank: number;
  user: User;
  points: number;
  change?: 'up' | 'down' | 'same';
}

export interface DashboardData {
  currentUser: User;
  ranking: RankingEntry[];
  myPoints: number;
  statsWeek: {
    totalPoints: number;
    avgPerPerson: number;
    activeUsers: number;
    weekNumber: number;
  };
}

export interface Prize {
  position: number;
  medal: string;
  title: string;
  description: string;
  reward: string;
  icon: string;
}

export interface Bonus {
  id: string;
  icon: string;
  name: string;
  description: string;
  reward: string;
}