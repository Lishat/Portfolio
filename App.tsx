
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import SkillsSection from './components/SkillsSection';
import Experience from './components/Experience';
import EducationAndAwards from './components/EducationAndAwards';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <ProjectGallery />
        <Experience />
        <SkillsSection />
        <EducationAndAwards />
        <Contact />
      </main>
      
      {/* Interactive AI Assistant */}
      <AIChatbot />
    </div>
  );
}

export default App;
