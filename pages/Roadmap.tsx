
import React from 'react';
import { Link } from 'react-router-dom';
import { MODULES } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 -mt-8 py-16 bg-[#355E3B] min-h-screen">
      {/* Decorative elements for dynamic feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-5%] w-64 h-64 bg-emerald-400 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 bg-green-300 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <header className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-100 text-xs font-bold uppercase tracking-widest mb-4">
            30 Specialized Modules
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Learning Roadmap</h1>
          <p className="text-emerald-100/70 text-lg max-w-xl mx-auto">
            Your step-by-step journey from zero to a professional Python Developer. 
            Follow the path, master the skills.
          </p>
        </header>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-white/10 hidden md:block"></div>
          
          <div className="space-y-12">
            {MODULES.map((module, index) => (
              <div 
                key={module.id} 
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse animate-in slide-in-from-right-4 duration-500'}`}
              >
                <div className="flex-1 w-full">
                  <div className="group bg-slate-100 dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-emerald-400">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Module {module.id}</div>
                      <span className="text-[10px] text-slate-400 dark:text-white/30 font-mono">{module.lessons.length} LESSONS</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-emerald-300 transition-colors">{module.title}</h3>
                    <div className="space-y-3">
                      {module.lessons.map(lesson => (
                        <Link 
                          key={lesson.id} 
                          to={`/lessons/${lesson.slug}`}
                          className="flex items-center text-slate-600 dark:text-emerald-100/60 hover:text-blue-600 dark:hover:text-white transition-all py-2 group/link"
                        >
                          <span className="mr-3 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)] group-hover/link:scale-150 transition-transform"></span>
                          <span className="text-sm font-medium">{lesson.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Connector Circle */}
                <div className="z-10 bg-emerald-500 text-[#355E3B] w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.4)] border-4 border-[#355E3B]">
                   {module.id}
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center pb-20">
          <div className="p-8 bg-emerald-900/40 rounded-[3rem] border border-emerald-500/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">The Final Graduation</h2>
            <p className="text-emerald-100/60 mb-8 max-w-lg mx-auto">
              Once you complete all 30 modules, you'll be ready to build complex AI systems, 
              web applications, and professional-grade software.
            </p>
            <Link 
              to="/projects" 
              className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#355E3B] font-bold rounded-2xl transition-all hover:scale-105 inline-block"
            >
              Explore Final Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
