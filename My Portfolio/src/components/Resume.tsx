import React, { useState } from 'react';
import { Plus, Minus, GraduationCap, Briefcase, Code } from 'lucide-react';

const resumeData = {
  education: [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Technical University',
      year: '2020 - 2024',
      description: 'Specialization in Artificial Intelligence and Machine Learning'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Science Academy',
      year: '2018 - 2020',
      description: 'Major in Computer Science and Mathematics'
    }
  ],
  experience: [
    {
      position: 'Software Development Intern',
      company: 'Tech Solutions Inc.',
      year: '2023 - Present',
      description: 'Working on full-stack development using React and Node.js'
    },
    {
      position: 'Web Development Intern',
      company: 'Digital Agency',
      year: '2022 - 2023',
      description: 'Developed responsive websites and maintained client projects'
    }
  ],
  skills: [
    'JavaScript/TypeScript',
    'React.js',
    'Node.js',
    'Python',
    'SQL/NoSQL',
    'AWS'
  ]
};

export default function Resume() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="py-16 px-4 bg-black" id="resume">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-[40px] bg-black relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-indigo-500 sm:border-b-2 border-indigo-500 mb-12">
          Resume
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group cursor-pointer" onClick={() => setIsImageModalOpen(true)}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4"
              alt="Resume"
              className="w-full h-[600px] object-cover rounded-lg border-2 border-indigo-500/50 relative transition-transform group-hover:scale-[1.01]"
            />
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('education')}
                className="w-full px-6 py-4 flex items-center justify-between text-left text-white hover:bg-gray-800/50"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  <span className="font-semibold">Education</span>
                </div>
                {activeSection === 'education' ? (
                  <Minus className="w-5 h-5 text-indigo-400" />
                ) : (
                  <Plus className="w-5 h-5 text-indigo-400" />
                )}
              </button>
              {activeSection === 'education' && (
                <div className="px-6 py-4 space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-indigo-500 pl-4">
                      <h4 className="text-white font-semibold">{edu.degree}</h4>
                      <p className="text-indigo-400 text-sm">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.year}</p>
                      <p className="text-gray-300 text-sm mt-1">{edu.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('experience')}
                className="w-full px-6 py-4 flex items-center justify-between text-left text-white hover:bg-gray-800/50"
              >
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-indigo-400" />
                  <span className="font-semibold">Work Experience</span>
                </div>
                {activeSection === 'experience' ? (
                  <Minus className="w-5 h-5 text-indigo-400" />
                ) : (
                  <Plus className="w-5 h-5 text-indigo-400" />
                )}
              </button>
              {activeSection === 'experience' && (
                <div className="px-6 py-4 space-y-4">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-indigo-500 pl-4">
                      <h4 className="text-white font-semibold">{exp.position}</h4>
                      <p className="text-indigo-400 text-sm">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.year}</p>
                      <p className="text-gray-300 text-sm mt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('skills')}
                className="w-full px-6 py-4 flex items-center justify-between text-left text-white hover:bg-gray-800/50"
              >
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-indigo-400" />
                  <span className="font-semibold">Technical Skills</span>
                </div>
                {activeSection === 'skills' ? (
                  <Minus className="w-5 h-5 text-indigo-400" />
                ) : (
                  <Plus className="w-5 h-5 text-indigo-400" />
                )}
              </button>
              {activeSection === 'skills' && (
                <div className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {isImageModalOpen && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer"
            onClick={() => setIsImageModalOpen(false)}
          >
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4"
              alt="Resume"
              className="max-w-[90%] max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}