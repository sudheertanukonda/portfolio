import React, { useState, useEffect } from 'react';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

// Job Role Titles for Dynamic Effect
const roles = [
  "Power BI Developer",
  "Data Modeling Expert",
  "Business Intelligence Analyst",
  "Data Visualization Specialist"
];

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const [currentRole, setCurrentRole] = useState(0);

  // Cycle Through Job Roles Every 3 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center justify-center gap-12 py-12 relative bg-transparent">
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left px-4 md:px-0">
        <div className="space-y-4">
          <p className="text-blue-400 font-medium">Welcome to my portfolio</p>

          {/* Adjusted Font Size to Fit Name in One Line */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hi, I'm Sudheer Tanukonda
          </h1>

          {/* Dynamic Job Role Effect */}
          <h2 
            className="text-xl md:text-2xl font-semibold transition-all duration-500 animate-pulse"
            style={{
              background: "linear-gradient(90deg, #facc15, #f472b6, #38bdf8, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "textGradient 4s ease infinite",
            }}
          >
            {roles[currentRole]}
          </h2>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
          As an experienced Power BI Developer, I specialize in transforming complex data into actionable insights through custom reports and interactive dashboards. Using Power BI, DAX, and Power Query, I provide real-time analytics that support data-driven decision-making.
        </p>

        {/* Buttons with Updated Backgrounds */}
        <div className="flex gap-4 justify-center md:justify-start">
          {/* View Resume Button - Blue to Purple Gradient */}
          <button
            onClick={() => setActiveSection('resume')}
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 hover:rotate-1"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #9333ea)", // Blue → Purple Gradient
              color: "white",
            }}
          >
            View Resume
          </button>

          {/* View Projects Button - Yellow-Orange Gradient */}
          <button
            onClick={() => setActiveSection('projects')}
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-yellow-400/50"
            style={{
              background: "linear-gradient(90deg, #facc15, #f97316)", // Yellow → Orange Gradient
              color: "white",
            }}
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Circular Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative group">
          {/* Glowing Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

          {/* Profile Picture with Hover Effects */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl shadow-blue-400/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-pink-500/50">
            <img
              src="https://i.postimg.cc/G2Fvbv2J/Whats-App-Image-2025-03-16-at-02-22-49-448600cc.jpg"
              alt="Sudheer Tanukonda"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: 'top' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

