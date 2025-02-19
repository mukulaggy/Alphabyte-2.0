"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stats = [
    { number: "36", label: "Hours of Coding" },
    { number: "100+", label: "Participants" },
    { number: "20+", label: "Volunteers" },
    { number: "₹50k+", label: "In Prizes" },
  ];

  const benefits = [
    "Network with industry experts",
    "Win exciting prizes",
    "Learn new technologies",
  ];

  return (
    <div className="min-h-screen bg-transparent text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About AlphaByte
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors"
            {...fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              What is AlphaByte?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              AlphaByte is a 36-hour hackathon organized by GDGC PCCOE, bringing
              together innovative minds to solve real-world challenges through
              technology. Our mission is to foster creativity, collaboration,
              and technical excellence.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border hover:border-purple-500/50 border-gray-800 transition-colors"
            {...fadeIn}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">
              Event Highlights
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-gray-800/50 rounded-xl transition-all hover:scale-105"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors"
            {...fadeIn}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Why Participate?
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors"
            {...fadeIn}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Location
            </h2>
            <p className="text-gray-300">
              PCCOE Campus, Pimpri-Chinchwad College of Engineering, Pune,
              Maharashtra
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
