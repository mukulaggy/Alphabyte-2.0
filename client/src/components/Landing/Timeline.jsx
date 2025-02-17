import { motion } from "framer-motion";

export default function Timeline() {
  const timelineItems = [
    {
      title: "Registration Opens",
      date: "Feb 19, 2025",
      description: "Early bird registrations begin with special benefits",
      position: "right",
    },
    {
      title: "Round 1 Begins",
      date: "March 22nd, 2025",
      description: "36-hour online hackathon starts",
      position: "left",
    },
    {
      title: "Round 1 Results",
      date: "March 4th, 2025",
      description: "Shortlisted teams announced",
      position: "right",
    },
    {
      title: "Final Round",
      date: "March 8th, 2025",
      description: "12-hour offline hackathon at main campus",
      position: "left",
    },
    {
      title: "Prize Distribution",
      date: "March 8th, 2025",
      description: "Winner announcement and awards ceremony",
      position: "right",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          {...fadeIn}
        >
          AlphaByte Timeline
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto mt-4" />
        </motion.h1>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 opacity-50" />

          <div className="flex flex-col space-y-12 md:space-y-24">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative flex items-center flex-col md:flex-row"
              >
                

                <div
                  className={`flex w-full ${
                    item.position === "left"
                      ? "md:flex-row-reverse"
                      : "md:flex-row"
                  } flex-col items-center md:items-start`}
                >
                  <div className="w-full md:w-[calc(50%-3rem)]">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] group"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-blue-400 group-hover:from-pink-300 group-hover:to-purple-300 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mt-2 md:mt-3 font-semibold">
                        {item.date}
                      </p>
                      <p className="text-gray-400 mt-2 md:mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                  <div className="hidden md:block w-24" />
                  <div className="w-full md:w-[calc(50%-3rem)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-3/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-32 md:w-64 h-32 md:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>
    </div>
  );
}
