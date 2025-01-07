import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    subtitle: '(Full Stack Application)',
    description: 'A comprehensive e-commerce solution with advanced features like real-time inventory management, secure payments, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    link: '#',
    github: '#',
    published: true,
    certificate: 'https://example.com/certificate1',
    tech: ['#react.js', '#node.js', '#mongodb', '#express.js', '#redux', '#stripe', '#typescript', '#tailwindcss']
  },
  {
    title: 'AI Image Generator',
    subtitle: '(Machine Learning)',
    description: 'Advanced AI-powered image generation platform using stable diffusion models with custom training capabilities.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    link: '#',
    github: '#',
    published: true,
    certificate: 'https://example.com/certificate2',
    tech: ['#python', '#pytorch', '#tensorflow', '#aws', '#docker', '#react', '#fastapi']
  },
  {
    title: 'Real-time Chat App',
    subtitle: '(Web Application)',
    description: 'Feature-rich chat application with real-time messaging, file sharing, and video calls.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    link: '#',
    github: '#',
    published: true,
    certificate: 'https://example.com/certificate3',
    tech: ['#next.js', '#socket.io', '#webrtc', '#firebase', '#tailwindcss', '#typescript']
  },
  {
    title: 'Fitness Tracking Platform',
    subtitle: '(Mobile Application)',
    description: 'Cross-platform fitness app with workout planning, progress tracking, and social features.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    link: '#',
    github: '#',
    published: true,
    certificate: 'https://example.com/certificate4',
    tech: ['#react-native', '#redux', '#node.js', '#mongodb', '#aws', '#typescript']
  },
  {
    title: 'Smart Home Dashboard',
    subtitle: '(IoT Platform)',
    description: 'Centralized dashboard for managing smart home devices with automation capabilities.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a',
    link: '#',
    github: '#',
    published: true,
    certificate: 'https://example.com/certificate5',
    tech: ['#vue.js', '#mqtt', '#node.js', '#postgresql', '#docker', '#typescript']
  },
  {
    title: 'Blockchain Wallet',
    subtitle: '(Web3 Application)',
    description: 'Secure cryptocurrency wallet with multi-chain support and DeFi integration.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e',
    link: '#',
    github: '#',
    published: true,
    certificate: 'https://example.com/certificate6',
    tech: ['#react.js', '#web3.js', '#solidity', '#ethereum', '#typescript', '#tailwindcss']
  }
];

export default function Projects() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
      <h2 className="text-3xl sm:text-[40px] bg-black relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-indigo-500 sm:border-b-2 border-indigo-500">
        Projects
      </h2>
      
      <div className="relative mt-16">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-indigo-500/50"></div>
        
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative`}>
            <div className="w-4 h-4 rounded-full border-[3px] border-indigo-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-10 hover:scale-110 transition-transform"></div>
            
            {/* Connection line */}
            <div className={`hidden sm:block absolute top-1/2 ${
              index % 2 === 0 
                ? 'right-[calc(50%+8px)] w-[15%]' 
                : 'left-[calc(50%+8px)] w-[15%]'
            } h-px bg-indigo-500/50 -translate-y-1/2`}></div>
            
            <a href={project.link} className={`flex w-full relative justify-center ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}>
              <div className="flex flex-col items-center relative group sm:hover:scale-105 transition-transform">
                <img 
                  className="max-w-[400px] w-full relative z-10 rounded-lg shadow-[0_0px_60px_rgba(99,102,241,0.3)]" 
                  src={project.image} 
                  alt={project.title}
                />
                <span className="flex group-hover:-top-14 transition-all duration-200 bg-indigo-500 absolute left-1/2 -translate-x-1/2 top-5 px-2 py-1 text-sm rounded-full w-max items-center gap-1">
                  View Project <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>

            <div className="w-full">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-indigo-400 font-bold text-xl md:text-2xl">
                  {project.title}
                </h3>
                {project.published && (
                  <a 
                    href={project.certificate}
                    className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                    title="View Certificate"
                  >
                    <Award className="w-5 h-5" />
                    <span className="text-sm">Published</span>
                  </a>
                )}
              </div>
              <span className="text-indigo-400 text-sm md:text-base">
                {project.subtitle}
              </span>
              <p className="text-justify text-sm mt-2 text-gray-300">
                {project.description}
              </p>
              <div className="flex gap-4 mt-4">
                <a href={project.link} className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center gap-1">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={project.github} className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center gap-1">
                  <Github className="w-4 h-4" /> View Code
                </a>
              </div>
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <li key={i} className="border rounded-[50px] border-gray-700 px-[10px] py-[5px] text-xs text-gray-400 hover:border-indigo-500 hover:text-indigo-400 transition-colors">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}