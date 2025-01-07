import React from 'react';

export default function About() {
  const details = [
    { label: 'Name', value: 'Doodalula Mohammad Abdulla' },
    { label: 'Birthday', value: '20 May 2002' },
    { label: 'Email', value: 'mohammadabdulla20march@gmail.com' },
    { label: 'Education', value: 'B.Tech in Artificial Intelligence' },
    { label: 'Phone', value: '+91 9110418102' },
    { label: 'Address', value: 'Bangaluru, Karnataka' }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-red-400">Introduction</h3>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate B.Tech student specializing in Computer Science, with a keen interest in building innovative solutions. My journey in technology started with curiosity and has evolved into a mission to create impactful software solutions that make a difference in people's lives.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With expertise in both frontend and backend development, I strive to create seamless user experiences while ensuring robust and scalable backend architectures.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {details.map((detail, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-red-400 font-medium">{detail.label}</h4>
                <p className="text-gray-300">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}