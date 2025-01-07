import React from 'react';
import { FileText } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
          Doodakula Mohammad Abdulla
        </h1>

        <nav className="hidden md:flex items-center gap-8">
          {[
            ['home', 'Home'],
            ['about', 'About'],
            ['projects', 'Projects'],
            ['skills', 'Skills'],
            ['certifications', 'Certifications'],
            ['experience', 'Experience'],
            ['contact', 'Contact'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <button className="group relative px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-lg flex items-center gap-2 hover:from-indigo-600 hover:to-purple-800 transition-all duration-300">
          <span>Download CV</span>
          <FileText className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>
    </header>
  );
}