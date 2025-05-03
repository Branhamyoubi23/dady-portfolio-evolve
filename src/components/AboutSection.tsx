
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FileText, User } from "lucide-react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => observer.observe(element));
    
    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, []);
  
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me, my background, what I do, and my current skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative reveal">
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-purple-500/10 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-purple-500/10 z-0"></div>
            
            <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://i.postimg.cc/KjPzLYFS/IMG-20230818-181118-4-removebg-preview.png" 
                alt="Eleazear Dady Profile" 
                className="w-full h-auto object-contain bg-gradient-to-br from-purple-500/20 to-primary/20 p-4"
              />
            </div>
          </div>
          
          <div className="space-y-6 reveal">
            <h3 className="text-2xl font-bold">
              Hi, I'm <span className="text-primary">Eleazear Dady</span> 👋
            </h3>
            
            <p className="text-lg">
              I'm a passionate junior full-stack developer with a specialization in front-end technologies.
              With 2 years of experience in building responsive and interactive web applications,
              I love tackling new challenges and creating exceptional digital experiences.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Current Education</h4>
                <p className="text-muted-foreground">
                  Level 2 student at University of Ebolowa since 2023, specializing in artificial intelligence.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg">Core Values</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Creative</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Problem-Solver</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Fast Learner</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Player</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Detail-Oriented</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button>
                <User className="h-4 w-4 mr-2" />
                More About Me
              </Button>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
