
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { RESUME_DATA } from '../data';

const SkillsSection: React.FC = () => {
  /**
   * Updated core pillars based on requested categories and proficiency ranges:
   * React: 90%
   * Python: 90%
   * LLMs: 75%
   * RAG: 88%
   * Document Extraction: 85%
   * Databases: 68%
   * Cloud: 55%
   */
  const corePillars = [
    { subject: 'React', value: 90 },
    { subject: 'Python', value: 90 },
    { subject: 'LLMs', value: 75 },
    { subject: 'RAG', value: 88 },
    { subject: 'Document Extraction', value: 85 },
    { subject: 'Databases', value: 68 },
    { subject: 'Cloud', value: 55 }
  ];

  const chartData = corePillars.map(pillar => ({
    subject: pillar.subject,
    A: pillar.value,
    fullMark: 100,
  }));

  const categories = ['Languages', 'AI', 'Backend', 'Frontend', 'Database', 'Cloud', 'DevOps'];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Arsenal</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Senior engineer specializing in high-scale <strong>RAG (Retrieval-Augmented Generation)</strong> systems and 
            <strong>AI-driven Document Extraction</strong>. Deeply proficient in the <strong>React monorepo ecosystem</strong> 
            and <strong>Python-based (Django/FastAPI)</strong> backends for enterprise SaaS.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {categories.map(category => {
              const categorySkills = RESUME_DATA.skills.filter(s => s.category === category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category}>
                  <h4 className="text-[10px] font-bold text-indigo-400 mb-3 uppercase tracking-[0.2em]">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map(skill => (
                      <span key={skill.name} className="text-xs font-medium text-slate-300 bg-slate-900 border border-white/5 px-2.5 py-1 rounded-md hover:border-indigo-500/50 transition-colors cursor-default">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-[450px] w-full glass-morphism rounded-3xl p-6 flex flex-col items-center justify-center relative border border-white/10 overflow-hidden">
            <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Core Proficiency Pillars</h3>
            <ResponsiveContainer width="100%" height="90%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }}
                />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
