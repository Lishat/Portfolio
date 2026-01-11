
import React from 'react';
import { RESUME_DATA } from '../data';

const EducationAndAwards: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900/10">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-8">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="group relative pl-6 border-l border-white/10 hover:border-indigo-500 transition-colors">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-800 border border-indigo-500 group-hover:bg-indigo-500 transition-colors"></div>
                  <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-indigo-400 text-sm font-medium mb-1">{edu.school}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                  </div>
                  <div className="mt-2 inline-block px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded text-[10px] text-indigo-400 font-bold">
                    Score: {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>
            <div className="space-y-6">
              {RESUME_DATA.achievements.map((ach, idx) => (
                <div key={idx} className="flex gap-4 p-5 glass-morphism rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                    {ach.icon === 'award' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                    )}
                    {ach.icon === 'star' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                    )}
                    {ach.icon === 'medal' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 16v2a2 2 0 002 2h2a2 2 0 002-2v-2M9 9h6v6H9V9z"></path></svg>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{ach.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-white/5 pt-16">
          <h2 className="text-3xl font-bold mb-8">Professional Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="p-6 glass-morphism rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                  <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">{cert.date}</span>
                  <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndAwards;
