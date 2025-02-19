import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "@dotlottie/player-component";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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

  const handleLogoClick = () => {
    window.location.href = "/"; // This will force a full page refresh
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? " backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center justify-center h-20 w-20 cursor-pointer"
        >
          <div className="w-full h-full">
            <img
              className="h-full w-full object-contain hover:scale-105 transition-transform"
              src="https://res.cloudinary.com/dloe8x9e4/image/upload/v1739935199/2.0_alphabyte-removebg-preview_1_tuem8m.png"
              alt="Alphabyte Logo"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {[
            "Home",
            "About",
            "Details",
            "Timeline",
            "Rulebook",
            "Prizes",
            "Heighlights",
            "Sponsors",
            "FAQ",
          ].map((item) => (
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
          ))}
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
          <div className="flex flex-col items-center justify-start h-full space-y-8 pt-20 overflow-y-auto">
            {[
              "Home",
              "About",
              "Details",
              "Timeline",
              "Rulebook",
              "Prizes",
              "Heighlights",
              "Sponsors",
              "FAQ",
            ].map((item) => (
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
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
