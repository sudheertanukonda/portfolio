import React from 'react';
import { MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Power BI Developer",
      company: "Deepija Telecom Pvt. Ltd.",
      project: "Telecom Sales, CRM & Ticket Performance Reporting Solution",
      period: "2023(Dec) - 2025(Jan)",
      location: "Hyderabad, India",
      companyLogo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/a50f6cee0c5e4dc68c36a96c6aea52ef",
      responsibilities: [
        "Developed and deployed interactive dashboards and reports in Power BI, assisting business stakeholders in data-driven decision-making.",
        "Utilized Power Query and DAX to clean, transform, and model data from multiple sources, ensuring accurate reporting and analysis.",
        "Designed and optimized data models, creating relationships between tables for enhanced performance and data integrity.",
        "Managed data refresh schedules and worked on troubleshooting and optimizing performance of Power BI reports and dashboards.",
        "Collaborated with business users to gather requirements and provide insights into data trends and potential areas for business improvement.",
        "Utilized Power BI Service for collaboration, sharing reports, and creating dashboards accessible to all stakeholders."
      ]
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-start justify-center pt-8">
      <div className="max-w-5xl w-full px-6 py-8">
        {/* Adjusted Font Size & Moved Up */}
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-80 transition duration-500"></div>

              {/* Experience Card */}
              <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.03] transition-all duration-300">
                <div className="flex items-start gap-6">
                  
                  {/* Company Logo */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 border-cyan-400 shadow-md shadow-cyan-500/30 transform transition-transform group-hover:rotate-3">
                    <img 
                      src={exp.companyLogo} 
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Experience Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-1 tracking-wide">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-300">{exp.company}</p>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-gray-400 mt-2">
                          <MapPin size={20} className="text-cyan-400" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>

                      {/* Period */}
                      <span className="text-md text-cyan-400 font-semibold mt-2 md:mt-0 bg-gray-700 px-3 py-1 rounded-md shadow-md shadow-cyan-400/30">
                        {exp.period}
                      </span>
                    </div>

                    {/* Project Name */}
                    {exp.project && (
                      <p className="text-md text-gray-400 italic mt-2 mb-4 font-light">{exp.project}</p>
                    )}

                    {/* Responsibilities List */}
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li 
                          key={idx} 
                          className="text-gray-300 flex items-start space-x-3"
                        >
                          <span className="h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0 mt-2 shadow-md shadow-cyan-400/50"></span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Line */}
        <div className="mt-8 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full w-3/4 mx-auto"></div>
      </div>
    </div>
  );
};

export default Experience;
