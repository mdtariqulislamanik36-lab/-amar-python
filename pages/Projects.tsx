
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="py-10">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Build Something Cool 🔨</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          The best way to learn is by building. Try these beginner-friendly projects to test your knowledge.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border dark:border-slate-800 shadow-sm flex flex-col">
            <div className="h-4 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-8 space-y-6 flex-1">
              <div>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold rounded uppercase mr-2">
                  {project.difficulty}
                </span>
                <h2 className="text-2xl font-bold mt-2">{project.title}</h2>
                <p className="text-slate-500 mt-2 text-sm">{project.description}</p>
              </div>

              <div>
                <h3 className="font-bold text-sm mb-3 text-slate-400 uppercase tracking-widest">Key Features</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border dark:border-slate-800">
                <h3 className="font-bold text-sm mb-3">Steps to Build:</h3>
                <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {project.steps.map((step, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-600 font-bold">{i + 1}.</span> {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            
            <div className="p-8 pt-0 mt-auto">
              <button className="w-full py-3 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                View Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
