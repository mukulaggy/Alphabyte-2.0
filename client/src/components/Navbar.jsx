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

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? " backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex h-16 w-64 items-center">
          {" "}
          {/* Increased overall size */}
          <div className="w-20 h-20">
            {" "}
            {/* Increased size */}
            <img
              className="h-full w-full object-contain" // Ensures it scales properly
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alphabyte%202.o%20logo-WfgekkjYOeQpyfwlJTMPxP3AT8TsY7.png"
              alt="Alphabyte Logo"
            />
          </div>
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
                offset={-100}
                className="text-sm text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl z-50 relative"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 h-screen bg-black/90 backdrop-blur-md transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 overflow-y-auto">
            {["Home", "About", "Details", "Timeline", "Sponsors", "FAQ"].map(
              (item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  className="text-lg text-white hover:text-pink-500 transition-all duration-300 cursor-pointer"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
