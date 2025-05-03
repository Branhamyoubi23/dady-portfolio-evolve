
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "ChatGPT Frontend Clone",
    description: "A modern UI clone of the ChatGPT interface with real-time chat capabilities.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: "2",
    title: "Auto-Posting Platform",
    description: "Automated content sharing tool for social media marketing.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    tags: ["Next.js", "Express.js", "MongoDB"],
    github: "https://github.com"
  },
  {
    id: "3",
    title: "QR Code Generator Website",
    description: "Simple utility app for creating custom QR codes for any URL or text.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["JavaScript", "HTML/CSS", "QR Code API"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: "4",
    title: "Text-to-Speech Webpage",
    description: "Real-time voice synthesis tool that converts typed text to natural-sounding speech.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["React.js", "Web Speech API", "CSS"],
    github: "https://github.com"
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "My personal portfolio website to showcase projects and skills.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isVisible, setIsVisible] = useState(false);
  
  // Extract unique tags for filter
  const allTags = ["all", ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.tags.includes(activeFilter)
      ));
    }
  }, [activeFilter]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            My Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent work
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeFilter === tag
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag === "all" ? "All" : tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card relative bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="project-overlay absolute inset-0 bg-primary/80 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-secondary text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
