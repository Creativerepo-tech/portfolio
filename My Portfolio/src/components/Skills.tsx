import React from 'react';
import { Code2, Database, Globe, Cpu, PenTool, GitBranch } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: Globe,
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'Python', 'SQL', 'MongoDB', 'Express'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Programming Languages',
    icon: Code2,
    skills: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Tools & Technologies',
    icon: Cpu,
    skills: ['Git', 'Docker', 'AWS', 'Linux', 'VS Code'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    category: 'Design',
    icon: PenTool,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design'],
    color: 'from-violet-500 to-fuchsia-500'
  },
  {
    category: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    color: 'from-blue-500 to-indigo-500'
  }
];

export default function Skills() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-[40px] bg-black relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-indigo-500 sm:border-b-2 border-indigo-500 mb-12">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} p-3 mb-4`}>
                <skill.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {skill.category}
              </h3>
              
              <div className="space-y-3">
                {skill.skills.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full group-hover:animate-fill`}
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-300 mt-1 block">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}