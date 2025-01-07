import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-950 flex items-center px-4 pt-16">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <span className="text-xl text-indigo-400">Hello, I'm</span>
          <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-300 to-purple-400 text-transparent bg-clip-text">
            Mohammad Abdulla D
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 typewriter">
            Student
          </p>
          <p className="text-gray-400 max-w-lg">
            Aspiring AI engineer and tech enthusiast, passionate about building innovative solutions that bridge technology and real-world impact.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Abdulla-1234" target="_blank" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-abdulla-doodakula-8a3307258/" target="_blank" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
            alt="Profile"
            className="w-96 h-96 object-cover rounded-full border-4 border-indigo-500/50 mx-auto relative"
          />
        </div>
      </div>
    </div>
  );
}