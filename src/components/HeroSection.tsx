
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Typewriter from '@/components/Typewriter';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pattern-bg overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building <span className="highlight">digital</span> <br />
              products, <span className="highlight">brands</span> <br />
              <span className="text-purple-500">experience</span>
              <span className="text-primary">.</span>
            </h1>
            
            <div className="flex space-x-1 text-lg md:text-xl font-medium h-8">
              <Typewriter 
                texts={[
                  "Junior Full-Stack Developer",
                  "React & Next.js Enthusiast",
                  "AI Learner"
                ]} 
                delay={3000}
              />
            </div>

            <p className="text-muted-foreground text-lg max-w-md">
              I specialize in Full-stack Development, Responsive Design, and UI/UX,
              crafting exceptional digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="rounded-full">
                View Portfolio
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-500/10 rounded-full"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://i.postimg.cc/KjPzLYFS/IMG-20230818-181118-4-removebg-preview.png" 
                  alt="Eleazear Dady Profile" 
                  className="w-full h-auto object-contain bg-gradient-to-br from-purple-500/20 to-primary/20"
                />
              </div>
              
              <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-0 translate-x-1/3 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronDown className="h-6 w-6" />
            </Button>
          </a>
        </div>
      </div>
      
      <div className="absolute inset-0 z-0">
        <svg className="absolute right-0 top-1/4 text-purple-500/5 w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.1,-46.4C62.2,-35.7,76.4,-17.9,77.9,1.5C79.3,20.9,67.9,41.8,52.7,58C37.5,74.3,18.8,85.9,-0.6,86.5C-20,87.2,-39.9,76.7,-53.9,60.5C-67.8,44.2,-75.8,22.1,-74.8,0.9C-73.9,-20.2,-64.1,-40.4,-49.4,-51.1C-34.6,-61.8,-17.3,-62.9,0.5,-63.4C18.2,-64,32.1,-57,47.1,-46.4Z" transform="translate(100 100)" />
        </svg>
        
        <svg className="absolute left-0 bottom-1/4 text-purple-500/5 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M32.1,-54.4C39.5,-44.7,42.1,-31.6,50.1,-19.2C58.1,-6.8,71.4,5,74.4,18.8C77.3,32.7,69.8,48.5,57.9,58.2C45.9,67.9,29.5,71.6,13.9,70.7C-1.7,69.8,-17.4,64.3,-31.3,56C-45.1,47.7,-57.2,36.6,-64.6,22.5C-72,8.4,-74.8,-8.9,-70,-23.6C-65.2,-38.3,-52.7,-50.5,-39,-58.5C-25.3,-66.5,-10.1,-70.4,2,-73C14.2,-75.6,24.7,-64.1,32.1,-54.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
