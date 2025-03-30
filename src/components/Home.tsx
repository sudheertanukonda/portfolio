const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-12 px-4 md:px-0 bg-transparent">
      {/* Left Section (Text) */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <div className="space-y-4">
          <p className="text-blue-400 font-medium">Welcome to my portfolio</p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hi, I'm Sudheer Tanukonda
          </h1>

          <h2 
            className="text-xl md:text-2xl font-semibold animate-pulse"
            style={{
              background: "linear-gradient(90deg, #facc15, #f472b6, #38bdf8, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {roles[currentRole]}
          </h2>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
          As an experienced Power BI Developer, I specialize in transforming complex data into actionable insights through custom reports and interactive dashboards.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <button
            onClick={() => setActiveSection('resume')}
            className="px-8 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg transition"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #9333ea)",
              color: "white",
            }}
          >
            View Resume
          </button>

          <button
            onClick={() => setActiveSection('projects')}
            className="px-8 py-3 rounded-full font-medium hover:scale-105 hover:shadow-md transition"
            style={{
              background: "linear-gradient(90deg, #facc15, #f97316)",
              color: "white",
            }}
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
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
