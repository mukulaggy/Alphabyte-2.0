"use client";

import React from "react";
import { motion } from "framer-motion";

const Details = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          {...fadeIn}
        >
          Event Details
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors"
            {...fadeIn}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Event Overview
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This event brings together developers, designers, and innovators
              to collaborate on exciting projects, solve real-world challenges,
              and enhance their technical skills.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Key Highlights
            </h2>
            <ul className="space-y-4">
              <li className="text-gray-300">Workshops by industry experts</li>
              <li className="text-gray-300">
                Exciting networking opportunities
              </li>
              <li className="text-gray-300">Hands-on project building</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Details;
