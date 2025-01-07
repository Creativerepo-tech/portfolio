import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const experiences = [
  {
    role: "Senior Software Engineer",
    type: "Full-time",
    company: "Google",
    location: "Mountain View, CA",
    period: "2022 - Present",
    description: "Led development of cloud-based solutions, managed team of 5 engineers, improved system performance by 40%",
    certificate: "https://example.com/google-cert",
    achievements: [
      "Architected and deployed microservices architecture",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored junior developers and conducted technical interviews"
    ]
  },
  {
    role: "Full Stack Developer",
    type: "Full-time",
    company: "Microsoft",
    location: "Seattle, WA",
    period: "2020 - 2022",
    description: "Developed and maintained enterprise-level applications using React and .NET Core",
    certificate: "https://example.com/microsoft-cert",
    achievements: [
      "Built real-time dashboard reducing reporting time by 75%",
      "Optimized database queries improving response time by 50%",
      "Implemented OAuth 2.0 authentication system"
    ]
  },
  {
    role: "Software Developer",
    type: "Contract",
    company: "Amazon",
    location: "Seattle, WA",
    period: "2018 - 2020",
    description: "Worked on e-commerce platform optimization and feature development",
    certificate: "https://example.com/amazon-cert",
    achievements: [
      "Developed inventory management system",
      "Reduced page load time by 30%",
      "Implemented automated testing framework"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-indigo-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-[40px] bg-black relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-indigo-500 sm:border-b-2 border-indigo-500 mb-16">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500/30"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full border-2 border-indigo-500 bg-black"></div>
              
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-[50%] md:pr-16' : 'md:ml-[50%] md:pl-16'}`}>
                <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-indigo-400" />
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    </div>
                    <span className="text-sm text-indigo-400 px-2 py-1 border border-indigo-400 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-indigo-400" />
                      {exp.company} - {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      {exp.period}
                    </div>
                    <a 
                      href={exp.certificate}
                      className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <Award className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}