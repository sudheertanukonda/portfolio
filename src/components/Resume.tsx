import React, { useState } from 'react';
import { Download, Eye } from 'lucide-react';

const Resume = () => {
  const [downloaded, setDownloaded] = useState(false);

  // Updated Google Drive View Link
  const resumeViewLink = "https://drive.google.com/file/d/1mQhDxh1mPlNW_aTf2W7n6l8y_XBPX1cH/view?usp=sharing";

  // Updated GitHub raw URL for downloading the resume
  // Note: GitHub raw URLs have this pattern: 
  // https://raw.githubusercontent.com/{username}/{repo}/{branch}/{file}
  // Your provided URL is the repo clone URL, so I'll convert it accordingly:
  const resumeDownloadLink = "https://raw.githubusercontent.com/sudheertanukonda/resume/main/Sudheer_Power%20BI%20Developer.pdf";

  const handleDownloadClick = () => {
    setDownloaded(true);

    const link = document.createElement('a');
    link.href = resumeDownloadLink;
    link.download = 'Sudheer_Power BI Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-800 flex justify-center items-center py-16">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center">
        <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          My Resume
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Click below to either view or download my professional resume. Explore my experience and skills.
        </p>

        <div className="flex justify-center flex-col gap-6">
          <a
            href={resumeViewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-xl hover:scale-105 transition-all duration-300 w-full"
          >
            <Eye size={24} />
            View Resume
          </a>

          <button
            onClick={handleDownloadClick}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-xl hover:scale-105 transition-all duration-300 w-full"
          >
            <Download size={24} />
            Download Resume
          </button>
        </div>

        {downloaded && (
          <p className="mt-6 text-green-600 font-medium text-xl">
            The resume was downloaded successfully.
          </p>
        )}
      </div>
    </div>
  );
};

export default Resume;
