
import React from 'react';
import { RESUME_DATA } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-12">
          {RESUME_DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l border-white/10 hover:border-indigo-500 transition-colors duration-500">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-indigo-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-bold bg-white/5 px-3 py-1 rounded-full text-slate-400 border border-white/10">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                    <span className="text-indigo-500 mt-1">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
