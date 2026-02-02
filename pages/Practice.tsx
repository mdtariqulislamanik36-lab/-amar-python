
import React, { useState } from 'react';
import { PRACTICE_PROBLEMS } from '../constants';

const Practice: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [visibleSolutions, setVisibleSolutions] = useState<Record<number, boolean>>({});

  const topics = ['All', ...new Set(PRACTICE_PROBLEMS.map(p => p.topic))];
  const filteredProblems = filter === 'All' 
    ? PRACTICE_PROBLEMS 
    : PRACTICE_PROBLEMS.filter(p => p.topic === filter);

  const toggleSolution = (id: number) => {
    setVisibleSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-4">Practice Problems</h1>
      <p className="text-slate-500 mb-10">Sharpen your skills with 50+ hand-picked exercises.</p>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        {topics.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              filter === t 
                ? 'bg-blue-600 text-white' 
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredProblems.map((p) => (
          <div key={p.id} className="bg-white dark:bg-slate-800 p-6 rounded-3xl border dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{p.topic}</span>
              <span className="text-slate-300 text-xs">Problem #{p.id}</span>
            </div>
            <h3 className="text-lg font-bold mb-4">{p.prompt}</h3>
            
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl mb-4">
              <p className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-tighter">Sample I/O:</p>
              <div className="text-xs font-mono text-slate-700 dark:text-slate-400">
                Input: {p.input} <br />
                Output: {p.output}
              </div>
            </div>

            <button
              onClick={() => toggleSolution(p.id)}
              className="text-blue-600 text-sm font-bold hover:underline"
            >
              {visibleSolutions[p.id] ? 'Hide Solution' : 'Reveal Solution →'}
            </button>

            {visibleSolutions[p.id] && (
              <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-slate-900 p-4 rounded-xl font-mono text-sm text-green-400 overflow-x-auto">
                  <pre>{p.solution}</pre>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold">Explanation:</span> {p.explanation}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice;
