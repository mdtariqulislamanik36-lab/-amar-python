
import React from 'react';
import { Link } from 'react-router-dom';
import { MODULES } from '../constants';

const Lessons: React.FC = () => {
  return (
    <div className="py-10 space-y-12">
      <header>
        <h1 className="text-4xl font-bold mb-4">Course Curriculum</h1>
        <p className="text-slate-500">Structured lessons for self-paced learning.</p>
      </header>

      <div className="grid grid-cols-1 gap-12">
        {MODULES.map((module) => (
          <section key={module.id} className="bg-slate-100 dark:bg-slate-800/50 p-6 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl font-bold shadow-lg shadow-blue-200 dark:shadow-none">
                {module.id}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{module.title}</h2>
                <p className="text-sm text-slate-500 font-medium">{module.lessons.length} Learning Topics</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {module.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/lessons/${lesson.slug}`}
                  className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{lesson.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{lesson.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
