
const Prizes = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate__animated animate__fadeInDown">
        Prizes & Rewards
      </h2>

      {/* Prize Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
        {/* Second Prize */}
        <div className="w-full md:w-1/4 transform md:translate-y-8 animate__animated animate__fadeInLeft">
          <div className="bg-neutral-800 rounded-2xl p-8 text-center border-2 border-silver hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-silver mb-4">2nd</div>
            <h3 className="text-2xl font-bold text-white mb-4">Runner Up</h3>
            <div className="text-3xl font-bold text-purple-400 mb-4">
              ₹75,000
            </div>
            <ul className="text-gray-300 space-y-3">
              <li>Additional Sponsored Prizes</li>
              <li>Premium Swag Kit</li>
              <li>Internship Opportunities</li>
            </ul>
          </div>
        </div>

        {/* First Prize */}
        <div className="w-full md:w-1/3 animate__animated animate__fadeInUp">
          <div className="bg-gradient-to-b from-purple-900 to-neutral-800 rounded-2xl p-8 text-center border-2 border-yellow-400 transform hover:scale-105 transition-all duration-300 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <svg
                className="w-12 h-12 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <div className="text-5xl font-bold text-yellow-400 mb-4">1st</div>
            <h3 className="text-3xl font-bold text-white mb-4">Winner</h3>
            <div className="text-4xl font-bold text-purple-400 mb-4">
              ₹1,00,000
            </div>
            <ul className="text-gray-300 space-y-3">
              <li>Direct Interview Opportunities</li>
              <li>Exclusive Mentorship Program</li>
              <li>Premium Swag Kit</li>
              <li>Incubation Support</li>
            </ul>
          </div>
        </div>

        {/* Third Prize */}
        <div className="w-full md:w-1/4 transform md:translate-y-8 animate__animated animate__fadeInRight">
          <div className="bg-neutral-800 rounded-2xl p-8 text-center border-2 border-bronze hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-bronze mb-4">3rd</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Second Runner Up
            </h3>
            <div className="text-3xl font-bold text-purple-400 mb-4">
              ₹50,000
            </div>
            <ul className="text-gray-300 space-y-3">
              <li>Sponsored Prizes</li>
              <li>Swag Kit</li>
              <li>Certificate</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Special Prizes */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-white mb-10 animate__animated animate__fadeInUp">
          Special Category Prizes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-800 rounded-xl p-6 text-center animate__animated animate__fadeInUp">
            <h4 className="text-xl font-bold text-purple-400 mb-4">
              Most Innovative
            </h4>
            <div className="text-2xl font-bold text-white mb-2">₹25,000</div>
            <p className="text-gray-400">For the most innovative solution</p>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 text-center animate__animated animate__fadeInUp animate__delay-1s">
            <h4 className="text-xl font-bold text-purple-400 mb-4">
              Best UI/UX
            </h4>
            <div className="text-2xl font-bold text-white mb-2">₹25,000</div>
            <p className="text-gray-400">
              For outstanding design implementation
            </p>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 text-center animate__animated animate__fadeInUp animate__delay-2s">
            <h4 className="text-xl font-bold text-purple-400 mb-4">
              Best First Time Hackers
            </h4>
            <div className="text-2xl font-bold text-white mb-2">₹25,000</div>
            <p className="text-gray-400">
              For exceptional first-time participants
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
