
import React from 'react';
import { RESUME_DATA } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <span className="gradient-text">extraordinary</span></h2>
        <p className="text-slate-400 mb-12 text-lg">
          Whether you have a specific project in mind or just want to say hi, my inbox is always open.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="group flex items-center gap-4 p-4 glass-morphism rounded-2xl w-full md:w-auto hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div className="text-left">
              <span className="block text-xs text-slate-500 uppercase font-bold tracking-widest">Email</span>
              <span className="text-slate-200 font-medium">{RESUME_DATA.contact.email}</span>
            </div>
          </a>

          <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 glass-morphism rounded-2xl w-full md:w-auto hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <div className="text-left">
              <span className="block text-xs text-slate-500 uppercase font-bold tracking-widest">LinkedIn</span>
              <span className="text-slate-200 font-medium">Connect with me</span>
            </div>
          </a>
        </div>

        <div className="text-slate-600 text-sm">
          © {new Date().getFullYear()} {RESUME_DATA.name}. Built with React and Tailwind.
        </div>
      </div>
    </section>
  );
};

export default Contact;
