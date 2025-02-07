import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "@dotlottie/player-component";

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Existing particles configuration for ambient effects.
  const particlesConfig = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 0.1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
      },
    },
    background: {
      color: {
        value: "transparent",
      },
    },
  };

  // Additional particles configuration for falling stars.
  const fallingStarsConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "star",
      },
      color: {
        value: "#ffffff",
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom",
        straight: false,
        out_mode: "out",
      },
      opacity: {
        value: 0.9,
        random: true,
      },
    },
    interactivity: {
      events: {},
    },
    background: {
      color: {
        value: "transparent",
      },
    },
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-black"
      style={{ fontFamily: "'Sour Gummy', cursive" }} // Apply the font here.
    >
      {/* Glowing Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-blob shadow-lg shadow-purple-500/50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000 shadow-lg shadow-pink-500/50" />

      {/* Ambient Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />

      {/* Falling Stars Particle Layer */}
      <Particles
        id="fallingStars"
        init={particlesInit}
        options={fallingStarsConfig}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex items-center justify-between p-6"
      >
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10">
            <dotlottie-player
              src="https://lottie.host/25c57345-fe4b-4b4a-ae2b-dcba093bb660/YtEqsq0iL2.lottie"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "100%" }}
              loop
              autoplay
            />
          </div>
          <span className="text-xl font-bold text-white">Alphabyte</span>
        </motion.div>

        <div className="flex items-center space-x-8">
          {["Home", "About", "Products", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/70 hover:text-white transition-colors"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-pink-500 px-6 py-2 text-sm font-medium text-white hover:bg-pink-600 transition-colors"
          >
            FAQ
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Center Lottie Animation (Enlarged for more impact) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: "500px", height: "500px" }}
        >
          
        </div>

        {/* UFO Animation (Right, slightly enlarged) */}
        <div
          className="absolute right-0 top-1/4"
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

        {/* Astronaut Animation (Left, slightly enlarged) */}
        <div
          className="absolute left-0 bottom-1/4"
          style={{ width: "350px", height: "350px" }}
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

        {/* Animated Rings for a Futuristic Flair */}
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
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
