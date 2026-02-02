
import React from 'react';

const Resources: React.FC = () => {
  const cheatsheets = [
    {
      title: 'Operators',
      data: [
        { op: '+', desc: 'Add numbers' },
        { op: '-', desc: 'Subtract numbers' },
        { op: '*', desc: 'Multiply' },
        { op: '/', desc: 'Divide (returns decimal)' },
        { op: '//', desc: 'Floor Divide (returns whole number)' },
        { op: '%', desc: 'Modulo (remainder of division)' },
      ]
    },
    {
      title: 'Common List Methods',
      data: [
        { op: 'append()', desc: 'Add to end' },
        { op: 'pop()', desc: 'Remove from end' },
        { op: 'sort()', desc: 'Sort alphabet/num' },
        { op: 'len()', desc: 'Get length' },
      ]
    }
  ];

  return (
    <div className="py-10 space-y-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Quick Resources</h1>
        <p className="text-slate-500">Essential tools and summaries for your Python journey.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cheatsheets.map((sheet, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border dark:border-slate-800 shadow-sm">
            <h2 className="text-xl font-bold mb-6">{sheet.title}</h2>
            <div className="space-y-4">
              {sheet.data.map((row, rIdx) => (
                <div key={rIdx} className="flex justify-between items-center pb-2 border-b dark:border-slate-700 last:border-0">
                  <code className="text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">{row.op}</code>
                  <span className="text-sm text-slate-500 text-right">{row.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-blue-600 text-white rounded-3xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Code Offline?</h2>
        <p className="mb-8 opacity-90 max-w-xl mx-auto">Download the VS Code editor and Python installer to start building apps on your computer.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://code.visualstudio.com/" target="_blank" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold">Download VS Code</a>
          <a href="https://www.python.org/downloads/" target="_blank" className="bg-blue-700 text-white px-8 py-3 rounded-full font-bold">Install Python</a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-8">Downloadable Notes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {['Python Basics PDF', 'Data Structures PDF', 'OOP Guide PDF'].map((note, i) => (
            <div key={i} className="p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📄</span>
                <span className="font-semibold text-sm">{note}</span>
              </div>
              <button className="text-blue-600 font-bold text-xs uppercase tracking-widest hover:underline">Get</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
