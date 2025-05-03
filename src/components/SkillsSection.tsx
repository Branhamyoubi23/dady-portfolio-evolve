
import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: 'frontend' | 'backend' | 'other';
}

const skills: Skill[] = [
  { name: 'React.js', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'HTML & CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 75, category: 'frontend' },
  { name: 'Express.js', level: 75, category: 'backend' },
  { name: 'Java Swing', level: 70, category: 'backend' },
  { name: 'MongoDB', level: 65, category: 'backend' },
  { name: 'Node.js', level: 70, category: 'backend' },
  { name: 'Git & GitHub', level: 80, category: 'other' },
  { name: 'Responsive Design', level: 85, category: 'other' },
  { name: 'UI/UX Design', level: 75, category: 'other' },
];

const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'other'>('all');
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedSkills(skills.map(skill => skill.name));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);
  
  const filteredSkills = skills.filter(
    skill => activeFilter === 'all' || skill.category === activeFilter
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            My Skills
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are my technical skills and competencies
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-secondary/50 p-1 rounded-full">
            {['all', 'frontend', 'backend', 'other'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveFilter(filter as any)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="p-4 bg-card rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm font-medium text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-1000 ease-out skill-bar fill"
                  style={{
                    width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-secondary/30 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Core Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>
              </div>
              <h4 className="font-medium">Responsive Design</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Creating interfaces that work on all devices
              </p>
            </div>
            
            <div className="p-4 bg-card rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h4 className="font-medium">Full-Stack Development</h4>
              <p className="text-sm text-muted-foreground mt-2">
                End-to-end application development
              </p>
            </div>
            
            <div className="p-4 bg-card rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h4 className="font-medium">Quick Prototyping</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Rapid development and iteration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
