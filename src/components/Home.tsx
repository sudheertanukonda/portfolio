import React from 'react';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center justify-center gap-12 py-12">
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left px-4 md:px-0">
        <div className="space-y-4">
          <p className="text-blue-400 font-medium">Welcome to my portfolio</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap overflow-visible">
            Hi, I'm Sudheer Tanukonda
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400">
            Power BI Developer
          </h2>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
          As an experienced Power BI Developer, I turn complex data into clear and useful insights with interactive dashboards and reports. I work with Power BI, DAX, Power Query, and MySQL to improve data models and make processes more efficient. My reports help businesses make smart decisions and grow. I stay updated with the latest Power BI features to create better and more effective solutions
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button
            onClick={() => setActiveSection('resume')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            View Resume
          </button>
          <button
            onClick={() => setActiveSection('projects')}
            className="px-8 py-3 border border-blue-400 text-blue-400 rounded-full font-medium hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Circular Image Section - No Head Cropping */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative group">
          {/* Glowing Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 group-hover:duration-300 animate-pulse"></div>
          
          {/* Image Wrapper - Circular Format */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl shadow-blue-400/50 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <img
              src="https://i.postimg.cc/G2Fvbv2J/Whats-App-Image-2025-03-16-at-02-22-49-448600cc.jpg"
              alt="Profile picture of Sudheer Tanukonda"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              style={{
                objectPosition: 'top',  // Adjusted to keep your head visible
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
