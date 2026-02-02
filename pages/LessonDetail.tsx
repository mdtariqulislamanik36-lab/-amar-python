
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MODULES } from '../constants';
import CodeEditor from '../components/CodeEditor';
import { Lesson } from '../types';

const LessonDetail: React.FC = () => {
  const { slug } = useParams();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  useEffect(() => {
    for (const mod of MODULES) {
      const found = mod.lessons.find(l => l.slug === slug);
      if (found) {
        setLesson(found);
        break;
      }
    }
  }, [slug]);

  if (!lesson) return <div className="p-20 text-center">Loading Lesson...</div>;

  const handleQuizChoice = (qIdx: number, choiceIdx: number) => {
    setQuizAnswers(prev => ({ ...prev, [qIdx]: choiceIdx }));
  };

  const checkResults = () => setShowQuizResults(true);

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 animate-in slide-in-from-bottom-4 duration-500">
      <nav className="flex items-center text-sm text-slate-500">
        <Link to="/lessons" className="hover:text-blue-600">Lessons</Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-slate-900 dark:text-white">{lesson.title}</span>
      </nav>

      <header>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{lesson.title}</h1>
      </header>

      <section className="bg-white dark:bg-slate-800 p-6 rounded-2xl border dark:border-slate-800 shadow-sm leading-relaxed text-lg">
        <h2 className="text-xl font-bold mb-4">Explanation</h2>
        {lesson.content}
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Code Example</h2>
        <div className="bg-slate-900 rounded-xl p-6 font-mono text-green-400">
          <pre>{lesson.example}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Try It Yourself</h2>
        <div className="bg-blue-50 dark:bg-slate-800/50 p-6 rounded-2xl mb-6 border border-blue-100 dark:border-slate-800">
          <p className="font-medium text-blue-800 dark:text-blue-300">Goal:</p>
          <p className="mt-2 text-slate-700 dark:text-slate-300">{lesson.practicePrompt}</p>
        </div>
        <CodeEditor initialCode={lesson.example} />
      </section>

      <section className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/30">
        <h2 className="text-lg font-bold text-red-700 dark:text-red-400 mb-4">⚠️ Common Mistakes</h2>
        <ul className="space-y-2">
          {lesson.mistakes.map((m, idx) => (
            <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
              <span className="mr-2">❌</span> {m}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-8">Quick Quiz 📝</h2>
        <div className="space-y-10">
          {lesson.quizzes.map((q, qIdx) => (
            <div key={qIdx} className="space-y-4">
              <p className="font-bold text-lg">{qIdx + 1}. {q.question}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {q.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleQuizChoice(qIdx, optIdx)}
                    className={`p-4 text-left rounded-xl border transition-all ${
                      quizAnswers[qIdx] === optIdx ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'bg-slate-50 dark:bg-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        {!showQuizResults && (
           <button
            onClick={checkResults}
            className="mt-10 px-8 py-3 bg-blue-600 text-white font-bold rounded-full w-full shadow-lg shadow-blue-200 dark:shadow-none"
          >
            Check Answers
          </button>
        )}
      </section>
    </div>
  );
};

export default LessonDetail;
