import React from "react";
import { motion } from "framer-motion";

export default function EventDetails() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Event Details
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </motion.h1>

        {/* Rounds Container */}
        <div className="grid md:grid-cols-2 gap-6">
          {["Round 1", "Round 2"].map((round, index) => (
            <motion.div
              key={index}
              className="rounded-2xl backdrop-blur-sm bg-white/5 p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-pink-400 mb-6 group-hover:text-purple-300">
                {round}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 text-sm bg-pink-500/20 rounded-full text-pink-400">
                    {index === 0 ? "36HR" : "12HR"}
                  </span>
                  <span className="text-gray-300">
                    {index === 0 ? "Online Round" : "Offline Round"}
                  </span>
                </div>
                <p className="text-gray-400">
                  {index === 0
                    ? "Feb 21nd, 2025 at 11:55 PM"
                    : "March 8th, 2024 at 8:00 AM"}
                </p>
                <p className="text-gray-400">
                  {index === 0
                    ? "Team Size: 3-4 members"
                    : "Selected teams only"}
                </p>
                <p className="text-gray-400">
                  {index === 0
                    ? "Multiple hack domains available"
                    : "Venue: Main Campus"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hack Domains */}
        <motion.div
          className="rounded-2xl backdrop-blur-sm bg-white/5 p-6 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">
            Hack Domains
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "AI-ML",
              "Healthcare",
              "Blockchain Technology",
              "Cybersecurity",
            ].map((domain, index) => (
              <motion.div
                key={domain}
                className="p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 text-gray-300 hover:text-white text-center hover:scale-105 cursor-pointer border border-transparent hover:border-pink-500/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {domain}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
