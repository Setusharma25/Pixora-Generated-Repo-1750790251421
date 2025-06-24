import React from 'react';
import { Heart, BarChart2, TrendingUp } from 'lucide-react';
import ChartCard from './components/ChartCard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">🎮 Gaming Dashboard</h1>
        <Heart className="w-8 h-8 text-red-500 hover:text-red-600 transition-colors" />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ChartCard icon={<BarChart2 className="w-8 h-8 text-blue-500" />} title="Player Stats" />
        <ChartCard icon={<TrendingUp className="w-8 h-8 text-green-500" />} title="Revenue Trends" />
      </main>
    </div>
  );
};

export default App;