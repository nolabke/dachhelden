const API_BASE = import.meta.env.PUBLIC_API_URL || 'http://localhost:3000/api';

export async function fetchCurrentWeekRanking() {
  const res = await fetch(`${API_BASE}/points/current-week`);
  if (!res.ok) throw new Error('Failed to fetch ranking');
  return res.json();
}

export async function fetchLeaderboard() {
  const res = await fetch(`${API_BASE}/leaderboard`);
  if (!res.ok) throw new Error('Failed to fetch leaderboard');
  return res.json();
}

export async function addPoints(userId: string, amount: number, category: string, reason: string) {
  const res = await fetch(`${API_BASE}/points/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount, category, reason }),
  });
  if (!res.ok) throw new Error('Failed to add points');
  return res.json();
}

export async function resetWeeklyPoints() {
  const res = await fetch(`${API_BASE}/points/reset-weekly`, { method: 'POST' });
  if (!res.ok) throw new Error('Failed to reset');
  return res.json();
}