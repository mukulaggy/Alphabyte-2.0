import React from "react";
import { motion } from "framer-motion";

export default function EventDetails() {

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          {...fadeIn}
        >
          Event Details
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </motion.h1>

        {/* Rounds Container */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Round 1 */}
          <div className="rounded-2xl backdrop-blur-sm bg-white/5 p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] group">
            <h2 className="text-2xl font-semibold text-pink-400 mb-6 group-hover:text-purple-300">Round 1</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 text-sm bg-pink-500/20 rounded-full text-pink-400">36HR</span>
                <span className="text-gray-300">Online Round</span>
              </div>
              <p className="text-gray-400">March 15th, 2024 at 11:55 PM</p>
              <p className="text-gray-400">Team Size: 3-4 members</p>
              <p className="text-gray-400">Multiple hack domains available</p>
            </div>
          </div>

          {/* Round 2 */}
          <div className="rounded-2xl backdrop-blur-sm bg-white/5 p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group">
            <h2 className="text-2xl font-semibold text-pink-400 mb-6 group-hover:text-purple-300">Round 2</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 text-sm bg-pink-500/20 rounded-full text-pink-400">12HR</span>
                <span className="text-gray-300">Offline Round</span>
              </div>
              <p className="text-gray-400">March 20th, 2024 at 8:00 AM</p>
              <p className="text-gray-400">Selected teams only</p>
              <p className="text-gray-400">Venue: Main Campus</p>
            </div>
          </div>
        </div>

        {/* Hack Domains */}
        <div className="rounded-2xl backdrop-blur-sm bg-white/5 p-6 border border-white/10">
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">Hack Domains</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Web Development", "Artificial Intelligence", "Blockchain Technology", "Internet of Things (IoT)"].map(
              (domain) => (
                <div
                  key={domain}
                  className="p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 text-gray-300 hover:text-white text-center hover:scale-105 cursor-pointer border border-transparent hover:border-pink-500/30"
                >
                  {domain}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

