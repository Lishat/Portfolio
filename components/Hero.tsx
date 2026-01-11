
import React from 'react';
import { RESUME_DATA } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
          Senior AI & Full Stack Engineer
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Pioneering <span className="gradient-text">AI-Powered</span> Workflows
        </h1>
        <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          {RESUME_DATA.about}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
            View My Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </a>
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl border border-white/10 hover:border-white/30 transition-all">
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Visual background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-0 w-full max-w-6xl aspect-square bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 -z-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
