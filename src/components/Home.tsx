import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = [
  "Power BI Developer",
  "Data Modeling Expert",
  "Business Intelligence Analyst",
  "Data Visualization Specialist"
];

const Home = ({ setActiveSection }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setCharIndex(0);

    const interval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev < roles[currentRole].length) {
          setDisplayedText(roles[currentRole].slice(0, prev + 1));
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50);

    const changeRole = setTimeout(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(changeRole);
    };
  }, [currentRole]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 py-8 px-6 md:px-16"
    >
      {/* Left Content */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-blue-400 font-medium"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Hi, I'm Sudheer Tanukonda
        </motion.h1>

        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600"
        >
          {displayedText}
        </motion.div>

        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-gray-300 text-lg"
        >
          Transforming complex data into actionable insights through interactive dashboards and reports.
        </motion.p>

        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex gap-4"
        >
          <button
            onClick={() => setActiveSection('projects')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View Projects
          </button>
          <button
            onClick={() => setActiveSection('contact')}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full font-medium hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative group animate-float">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
            <img
              src="https://i.postimg.cc/G2Fvbv2J/Whats-App-Image-2025-03-16-at-02-22-49-448600cc.jpg"
              alt="Sudheer Tanukonda"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ objectPosition: 'top' }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
