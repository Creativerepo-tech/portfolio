import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Solutions Architect',
    provider: 'Amazon Web Services',
    items: ['Cloud Architecture', 'AWS Services', 'Best Practices'],
    link: '#'
  },
  {
    title: 'Full Stack Development',
    provider: 'Meta',
    items: ['React', 'Node.js', 'Database Design'],
    link: '#'
  },
  {
    title: 'Machine Learning',
    provider: 'Stanford Online',
    items: ['Neural Networks', 'Deep Learning', 'TensorFlow'],
    link: '#'
  },
  {
    title: 'UI/UX Design',
    provider: 'Google',
    items: ['User Research', 'Wireframing', 'Prototyping'],
    link: '#'
  },
  {
    title: 'Cybersecurity',
    provider: 'IBM',
    items: ['Network Security', 'Cryptography', 'Threat Analysis'],
    link: '#'
  },
  {
    title: 'DevOps Engineering',
    provider: 'Microsoft',
    items: ['CI/CD', 'Docker', 'Kubernetes'],
    link: '#'
  }
];

export default function Certifications() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900" id="certifications">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-indigo-400 text-sm uppercase tracking-wider">Achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Professional Certifications</h2>
          <p className="text-gray-400 mt-2">Continuous learning and skill development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                  <Award className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-indigo-400 text-sm">{cert.provider}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {cert.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href={cert.link}
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
              >
                View Certificate <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}