
import React, { useState } from 'react';

const About: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', msg: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-10 max-w-4xl mx-auto space-y-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">About PyHero</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          PyHero was created with one simple mission: to make Python programming accessible to everyone. 
          Whether you're a high school student or someone looking for a career change, we provide 
          the foundation you need without the technical jargon that often scares beginners away.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-slate-500">Have questions about the lessons? Found a bug? Just want to say hi?</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-slate-800 flex items-center justify-center rounded-full text-blue-600">📍</div>
              <span className="text-sm">Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-slate-800 flex items-center justify-center rounded-full text-blue-600">✉️</div>
              <span className="text-sm">support@pyhero.learn</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">Name</label>
            <input 
              required
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              value={formState.name}
              onChange={e => setFormState({...formState, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Email</label>
            <input 
              required
              type="email"
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
              value={formState.email}
              onChange={e => setFormState({...formState, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Message</label>
            <textarea 
              required
              rows={4}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can we help?"
              value={formState.msg}
              onChange={e => setFormState({...formState, msg: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all"
          >
            {submitted ? 'Message Sent! ✨' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default About;
