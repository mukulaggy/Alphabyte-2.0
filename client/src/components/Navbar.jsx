import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "@dotlottie/player-component";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
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
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Details", "Timeline", "Sponsors", "FAQ"].map(
            (item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={800}
                offset={-80} // Adjusts for navbar height
                className="text-sm text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 right-0 w-2/3 h-full bg-black/90 backdrop-blur-md flex flex-col items-center space-y-6 py-20 z-50">
            {["Home", "About", "Details", "Timeline", "Sponsors", "FAQ"].map(
              (item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="text-lg text-white hover:text-pink-500 transition-all duration-300 cursor-pointer"
                  onClick={toggleMenu} // Closes menu after click
                >
                  {item}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
