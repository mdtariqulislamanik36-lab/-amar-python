
import React, { useState, useMemo } from 'react';
import { PRACTICE_PROBLEMS } from '../constants';

const Practice: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [visibleSolutions, setVisibleSolutions] = useState<Record<number, boolean>>({});

  const topics = useMemo(() => ['All', ...new Set(PRACTICE_PROBLEMS.map(p => p.topic))], []);
  
  const filteredProblems = useMemo(() => {
    return filter === 'All' 
      ? PRACTICE_PROBLEMS 
      : PRACTICE_PROBLEMS.filter(p => p.topic === filter);
  }, [filter]);

  const toggleSolution = (id: number) => {
    setVisibleSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-10 animate-in fade-in duration-500">
      <h1 className="text-4xl font-bold mb-4">Practice Problems</h1>
      <p className="text-slate-500 mb-10">Sharpen your skills with 50+ hand-picked exercises.</p>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        {topics.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              filter === t 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none scale-105' 
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredProblems.map((p) => (
          <div key={p.id} className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{p.topic}</span>
              <span className="text-slate-300 text-xs font-mono">#{p.id}</span>
            </div>
            <h3 className="text-lg font-bold mb-4">{p.prompt}</h3>
            
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl mb-4 border border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-400 mb-2 uppercase">Expected Interaction:</p>
              <div className="text-xs font-mono text-slate-700 dark:text-slate-400 space-y-1">
                <p><span className="text-blue-500">Input:</span> {p.input || 'N/A'}</p>
                <p><span className="text-green-500">Output:</span> {p.output}</p>
              </div>
            </div>

            <button
              onClick={() => toggleSolution(p.id)}
              className="text-blue-600 dark:text-blue-400 text-sm font-bold hover:underline inline-flex items-center gap-1"
            >
              {visibleSolutions[p.id] ? 'Hide Solution' : 'Reveal Solution →'}
            </button>

            {visibleSolutions[p.id] && (
              <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-slate-900 p-5 rounded-2xl font-mono text-sm text-green-400 overflow-x-auto border border-slate-800 shadow-inner">
                  <pre>{p.solution}</pre>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-blue-800 dark:text-blue-300">Strategy:</span> {p.explanation}
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
