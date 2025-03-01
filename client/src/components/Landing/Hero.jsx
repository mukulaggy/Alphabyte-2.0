import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "@dotlottie/player-component";
import {
  FaCloudDownloadAlt,
  FaWhatsapp,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { saveAs } from "file-saver";

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(147, 51, 234, 0.5)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  return (
    <div
      className="relative min-h-screen  overflow-hidden bg-black"
      style={{ fontFamily: "'Sour Gummy', cursive" }}
    >
      {/* Background Blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-blob shadow-lg shadow-purple-500/50" />
      <div className="absolute bottom-24 right-0 w-96 z-10 h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000 shadow-lg shadow-pink-500/50" />

      {/* Center Content */}
      <div className="absolute inset-0 pt-10 flex flex-col items-center z-10 text-center">
        {/* Logo */}
        <motion.img
          src="https://res.cloudinary.com/dloe8x9e4/image/upload/v1739935199/2.0_alphabyte-removebg-preview_1_tuem8m.png"
          alt="Alpha Byte Logo"
          className="w-[300px] md:w-[600px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
          <motion.a
            href="https://unstop.com/hackathons/alphabyte-20-national-level-hackathon-pimpri-chinchwad-college-of-engineering-pccoe-pune-1405902"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white font-medium tracking-wide shadow-lg flex items-center gap-2 text-sm md:text-base"
          >
            <FaExternalLinkAlt /> Register on Unstop
          </motion.a>

          <motion.a
            href="https://chat.whatsapp.com/HfzxWb3Gfdq3naUvMedvx8"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-green-600 to-green-400 rounded-full text-white font-medium tracking-wide shadow-lg flex items-center gap-2 text-sm md:text-base"
          >
            <FaWhatsapp /> Join WhatsApp Group
          </motion.a>
        </div>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          onClick={() => {
            const pdfUrl = "/Alphabyteps.pdf"; // Updated path to the PDF file in the public folder
            saveAs(pdfUrl, "Alphabyte2025_Problem_Statements.pdf");
          }}
          className="px-6 md:px-8 py-2 md:py-3 mt-4 bg-gradient-to-r from-pink-600 to-blue-500 rounded-full text-white font-medium tracking-wide shadow-lg flex items-center gap-2 text-sm md:text-base"
        >
          <FaCloudDownloadAlt /> Download Problem Statements
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* UFO Animation (Hidden on Mobile) */}
        <div
          className="hidden md:block absolute right-0 top-10"
          style={{ width: "350px", height: "350px" }}
        >
          <dotlottie-player
            src="https://lottie.host/25c57345-fe4b-4b4a-ae2b-dcba093bb660/YtEqsq0iL2.lottie"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            loop
            autoplay
          />
        </div>

        {/* Astronaut Animation (Visible on All Screens) */}
        <div
          className="absolute left-0 bottom-1/4"
          style={{ width: "250px", height: "250px" }}
        >
          <dotlottie-player
            src="https://lottie.host/da21a974-35c3-42f6-92a3-c852ccf4fbe2/NRpSWkYuRM.lottie"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            loop
            autoplay
          />
        </div>

        {/* Animated Rings */}
        {[800, 600, 400].map((size, index) => (
          <motion.div
            key={size}
            className="absolute left-1/2 top-1/2 rounded-full border border-purple-500/20"
            style={{
              width: size,
              height: size,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              rotate: index % 2 === 0 ? 360 : -360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20 + index * 5,
                ease: "linear",
                repeat: Infinity,
              },
              scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
