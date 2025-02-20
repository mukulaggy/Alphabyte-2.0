const Prizes = () => {
  const prizesData = {
    mainPrizes: [
      {
        position: "2nd",
        title: "Runner Up",
        amount: "₹15,000",
        features: [
          "Swags",
          "certificate",
        ],
        borderColor: "border-silver",
        animation: "animate__fadeInLeft",
        translateY: true,
      },
      {
        position: "1st",
        title: "Winner",
        amount: "₹25,000",
        features: [
          "Sponsored Prizes",
          "Premium Swag Kit",
          "certificate",
          
        ],
        borderColor: "border-yellow-400",
        animation: "animate__fadeInUp",
        isFeatured: true,
      },
      {
        position: "3rd",
        title: "Second Runner Up",
        amount: "₹10,000",
        features: ["Certificate"],
        borderColor: "border-bronze",
        animation: "animate__fadeInRight",
        translateY: true,
      },
    ],
    specialPrizes: [
      {
        title: "Most Innovative",
        amount: "₹1,500",
        description: "For the most innovative solution",
        animationDelay: "",
      },
      {
        title: "Best UI/UX",
        amount: "₹1,500",
        description: "For outstanding design implementation",
        animationDelay: "animate__delay-1s",
      },
      {
        title: "Best First Time Hackers",
        amount: "₹1,500",
        description: "For exceptional first-time participants",
        animationDelay: "animate__delay-2s",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate__animated animate__fadeInDown">
        Prizes & Rewards
      </h2>

      {/* Prize Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
        {prizesData.mainPrizes.map((prize, index) => (
          <div
            key={index}
            className={`w-full ${
              prize.isFeatured ? "md:w-1/3" : "md:w-1/4"
            } transform ${
              prize.translateY ? "md:translate-y-8" : ""
            } animate__animated ${prize.animation}`}
          >
            <div
              className={`${
                prize.isFeatured
                  ? "bg-gradient-to-b from-purple-900 to-neutral-800"
                  : "bg-neutral-800"
              } rounded-2xl p-8 text-center border-2 ${
                prize.borderColor
              } hover:transform hover:scale-105 transition-all duration-300 relative`}
            >
              {prize.isFeatured && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <svg
                    className="w-12 h-12 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              )}

              <div
                className={`text-${
                  prize.isFeatured ? "5xl" : "4xl"
                } font-bold ${
                  prize.isFeatured
                    ? "text-yellow-400"
                    : "text-" + prize.borderColor.split("-")[1]
                } mb-4`}
              >
                {prize.position}
              </div>

              <h3
                className={`text-${
                  prize.isFeatured ? "3xl" : "2xl"
                } font-bold text-white mb-4`}
              >
                {prize.title}
              </h3>

              <div
                className={`text-${
                  prize.isFeatured ? "4xl" : "3xl"
                } font-bold text-purple-400 mb-4`}
              >
                {prize.amount}
              </div>

              <ul className="text-gray-300 space-y-3">
                {prize.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Special Prizes */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-white mb-10 animate__animated animate__fadeInUp">
          Special Category Prizes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizesData.specialPrizes.map((prize, index) => (
            <div
              key={index}
              className={`bg-neutral-800 rounded-xl p-6 text-center animate__animated animate__fadeInUp ${prize.animationDelay}`}
            >
              <h4 className="text-xl font-bold text-purple-400 mb-4">
                {prize.title}
              </h4>
              <div className="text-2xl font-bold text-white mb-2">
                {prize.amount}
              </div>
              <p className="text-gray-400">{prize.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prizes;
