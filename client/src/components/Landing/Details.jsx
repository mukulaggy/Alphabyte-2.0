const Details = () => {
  return (
    <div className="bg-black min-h-screen text-white font-inter p-8">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent shadow-lg">
        Funzd Details
      </h1>
      <p className="text-gray-400 text-lg mb-12">
        Registered invite for nitercent yistims of out effluent of they seck
        bases rection.
      </p>

      <h2 className="text-white mb-8 text-2xl">Mode of Conduct</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 transition-transform hover:-translate-y-1 hover:bg-opacity-20">
          <h2 className="text-pink-400 text-xl mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-400 rounded-full"></span> Round 1
          </h2>
          <ul className="list-none space-y-4">
            <li className="relative pl-6 text-gray-300">
              <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-pink-500 bg-opacity-50 rounded-full transform -translate-y-1/2"></span>
              Online Round{" "}
              <span className="ml-2 bg-pink-500 bg-opacity-20 text-pink-400 px-3 py-1 rounded-full text-sm">
                36HR
              </span>
            </li>
            <li className="relative pl-6 text-gray-300">
              March 15th, 2024 at 11:55 PM
            </li>
            <li className="relative pl-6 text-gray-300">
              Team Size: 3-4 members
            </li>
            <li className="relative pl-6 text-gray-300">
              Multiple hack domains available
            </li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 transition-transform hover:-translate-y-1 hover:bg-opacity-20">
          <h2 className="text-pink-400 text-xl mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-400 rounded-full"></span> Round 2
          </h2>
          <ul className="list-none space-y-4">
            <li className="relative pl-6 text-gray-300">
              <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-pink-500 bg-opacity-50 rounded-full transform -translate-y-1/2"></span>
              Offline Round{" "}
              <span className="ml-2 bg-pink-500 bg-opacity-20 text-pink-400 px-3 py-1 rounded-full text-sm">
                12HR
              </span>
            </li>
            <li className="relative pl-6 text-gray-300">
              March 20th, 2024 at 8:00 AM
            </li>
            <li className="relative pl-6 text-gray-300">Selected teams only</li>
            <li className="relative pl-6 text-gray-300">Venue: Main Campus</li>
          </ul>
        </div>
      </div>

      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 transition-transform hover:-translate-y-1 hover:bg-opacity-20">
        <h2 className="text-pink-400 text-xl mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-pink-400 rounded-full"></span> Domains
        </h2>
        <ul className="list-none space-y-4">
          <li className="relative pl-6 text-gray-300">Web Development</li>
          <li className="relative pl-6 text-gray-300">
            Artificial Intelligence
          </li>
          <li className="relative pl-6 text-gray-300">Blockchain Technology</li>
          <li className="relative pl-6 text-gray-300">
            Internet of Things (IoT)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
