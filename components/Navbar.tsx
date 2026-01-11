
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text tracking-tighter uppercase">Subhadeep.Dash</a>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="bg-indigo-600/20 text-indigo-400 px-4 py-2 rounded-full border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all">Get in Touch</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
