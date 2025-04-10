import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "A Power BI dashboard providing real-time sales insights with automated reporting. Implemented advanced DAX calculations for deep analytics and interactive filtering.",
      technologies: ["Power BI", "DAX", "SQL", "Power Query"],
      image: "https://i.postimg.cc/FH3Rd7SG/Screenshot-2025-03-18-172613.png",
      github: "https://github.com/sudheertanukonda/Pober-BI-reports.git",
      live: "https://app.powerbi.com/reportEmbed?reportId=08c572b5-0715-4e28-80be-913cba6f40cc&autoAuth=true&ctid=4c49cc3b-7d9d-464e-8fc8-a10f91d8117a",
      features: ["Real-time Data Integration", "Custom DAX Measures", "Automated Reporting", "Interactive Filters"]
    },
    {
      title: "Hospital Emergency Report",
      description: "A Power BI solution for monitoring emergency cases, optimizing response times, and managing hospital resources. Integrated SQL databases for accurate data modeling.",
      technologies: ["Power BI", "DAX", "Excel", "Power Query"],
      image: "https://i.postimg.cc/R0m0c4Qm/Screenshot-2025-03-18-171630.png",
      github: "https://github.com/sudheertanukonda/Pober-BI-reports.git",
      live: "https://app.powerbi.com/reportEmbed?reportId=04d342dc-ad82-4340-b5f9-8d4dfc737b09&autoAuth=true&ctid=4c49cc3b-7d9d-464e-8fc8-a10f91d8117a",
      features: ["Emergency Case Tracking", "Response Time Analysis", "Resource Allocation", "SQL-Based Data Modeling"]
    },
    {
      title: "Software Product Sales Analysis",
      description: "Designed a Power BI dashboard using Excel as the primary data source to track product sales, customer behavior, and revenue trends, leveraging Power Query for transformation.",
      technologies: ["Power BI", "DAX", "SQL", "Power Query"],
      image: "https://i.postimg.cc/NFKGgMY6/Screenshot-2025-03-18-172524.png",
      github: "https://github.com/sudheertanukonda/Pober-BI-reports.git",
      live: "https://app.powerbi.com/reportEmbed?reportId=238c0695-d75d-4cad-98a5-4fa778620612&autoAuth=true&ctid=4c49cc3b-7d9d-464e-8fc8-a10f91d8117a",
      features: ["Sales Trend Analysis", "Customer Segmentation", "Excel Data Integration", "Revenue Forecasting"]
    },
    {
      title: "Ticket System Analysis",
      description: "Developed a Power BI report to analyze customer support tickets, track resolution times, and identify service bottlenecks. Used SQL for backend data processing.",
      technologies: ["Power BI", "DAX", "SQL", "Power Query"],
      image: "https://i.postimg.cc/tCVRwYBy/Screenshot-2025-03-18-172355.png",
      github: "https://github.com/sudheertanukonda/Pober-BI-reports.git",
      live: "https://app.powerbi.com/reportEmbed?reportId=a4d47a8c-885d-48bc-9f84-08d0670ee93b&autoAuth=true&ctid=4c49cc3b-7d9d-464e-8fc8-a10f91d8117a",
      features: ["Customer Support Metrics", "Response Time Tracking", "SQL-Based Ticket Analysis", "Issue Resolution Trends"]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center animate-pulse">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/70 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
                </div>

                <div className="relative p-6">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/40 hover:bg-blue-500/30 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-400">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-400 flex items-center space-x-1"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 👇 Links moved to bottom */}
              <div className="px-6 pb-6 mt-auto flex gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-purple-400 transition"
                >
                  <ExternalLink size={18} />
                  View Project
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-purple-400 transition"
                >
                  <ExternalLink size={18} />
                  Live Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
