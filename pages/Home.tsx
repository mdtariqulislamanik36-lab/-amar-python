
import React from 'react';
import { Link } from 'react-router-dom';
import { MODULES } from '../constants';

const Home: React.FC = () => {
  const topLessons = MODULES[0].lessons.slice(0, 6);

  return (
    <div className="relative -mt-8 pt-8 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-[100px] animate-float-delayed"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[25%] h-[25%] bg-teal-50/50 dark:bg-teal-900/10 rounded-full blur-[80px] animate-float"></div>
      </div>

      <div className="space-y-24 relative">
        <section className="text-center py-16 md:py-28 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase">
            Start your journey today
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 leading-tight tracking-tight">
            PyHero - Learn Python from Zero <br className="hidden md:block" /> 
            <span className="text-slate-800 dark:text-slate-100">power by THE BD BROS</span> 🐍
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            The most peaceful and effective way to master Python. 
            No jargon, just interactive coding and real-world projects designed for absolute beginners.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <Link
              to="/roadmap"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 dark:shadow-none transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-lg"
            >
              Start Learning Free
            </Link>
            <Link
              to="/lessons"
              className="px-10 py-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow-lg w-full sm:w-auto text-lg"
            >
              Try Code Editor
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Absolute Beginner', 
              desc: 'Start from the very first line of code. We explain like you are 12.', 
              icon: '🌱',
              color: 'from-green-500 to-emerald-600'
            },
            { 
              title: 'Interactive Learning', 
              desc: 'Run code directly in your browser. No complex setup required.', 
              icon: '⚡',
              color: 'from-blue-500 to-indigo-600'
            },
            { 
              title: 'Project Driven', 
              desc: 'Build real apps while you learn. Portfolio ready from day one.', 
              icon: '🏗️',
              color: 'from-purple-500 to-violet-600'
            },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-[2.5rem] border border-white/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Lessons</h2>
              <p className="text-slate-500">Kickstart your path with these core concepts</p>
            </div>
            <Link to="/lessons" className="group px-6 py-2 bg-slate-100 dark:bg-slate-800 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
              Explore All <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topLessons.map((lesson) => (
              <Link
                key={lesson.id}
                to={`/lessons/${lesson.slug}`}
                className="group p-8 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/10 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                <h3 className="text-lg font-bold mb-3 relative z-10">{lesson.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 relative z-10 leading-relaxed">{lesson.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-20 w-32 h-32 border-4 border-white/50 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rotate-45"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to become a Python Hero?</h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join thousands of students and start building your future today. 
              The curriculum is updated for 2024.
            </p>
            <Link 
              to="/roadmap" 
              className="inline-block px-12 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105"
            >
              Get Started Now
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
