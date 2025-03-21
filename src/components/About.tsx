import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left - Profile Image */}
        <motion.div
          className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/50"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://i.postimg.cc/nc3Wx0Hn/Whats-App-Image-2025-03-16-at-02-49-23-88a95a8e.jpg"
            alt="Sudheer Tanukonda"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Right - About Me Content */}
        <motion.div
          className="flex-1 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            I am <span className="text-blue-400 font-semibold">Sudheer Tanukonda</span>, an <span className="text-blue-400 font-semibold">experienced Power BI Developer</span> with expertise in transforming complex data into meaningful insights. I design and deploy <span className="text-blue-400 font-semibold">interactive dashboards</span> and reports in <span className="text-blue-400 font-semibold">Power BI</span>, helping business stakeholders make informed, <span className="text-blue-400 font-semibold">data-driven decisions</span>.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-3">
            With strong skills in <span className="text-blue-400 font-semibold">Power BI, DAX, Power Query, and MySQL</span>, I specialize in <span className="text-blue-400 font-semibold">data cleaning, transformation, and modeling</span>. I create optimized <span className="text-blue-400 font-semibold">data models</span> that enhance performance, improve relationships between tables, and ensure <span className="text-blue-400 font-semibold">data integrity</span>.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-3">
            My experience includes <span className="text-blue-400 font-semibold">collaborating with business teams</span> to analyze trends and identify areas for improvement. I leverage <span className="text-blue-400 font-semibold">Power BI Service</span> for seamless collaboration, <span className="text-blue-400 font-semibold">real-time reporting</span>, and secure <span className="text-blue-400 font-semibold">data sharing</span>.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-3">
            Passionate about <span className="text-blue-400 font-semibold">data visualization</span> and <span className="text-blue-400 font-semibold">business intelligence</span>, I stay updated with the latest <span className="text-blue-400 font-semibold">Power BI features</span> to provide innovative and impactful solutions. My goal is to help businesses <span className="text-blue-400 font-semibold">drive growth, enhance efficiency</span>, and support strategic decision-making through <span className="text-blue-400 font-semibold">data-driven insights</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
