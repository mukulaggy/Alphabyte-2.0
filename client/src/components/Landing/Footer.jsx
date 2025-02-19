import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-28 h-16">
                {" "}
                {/* Increased width & height */}
                <img
                  src="https://res.cloudinary.com/dloe8x9e4/image/upload/v1739935199/2.0_alphabyte-removebg-preview_1_tuem8m.png"
                  alt="AlphaByte Logo"
                  className="w-full h-full"
                />
              </div>
            </div>

            <p className="text-neutral-400 mb-6">
              36-hour hackathon fostering innovation and technical excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/gdgcpccoe?igsh=MTluNWp1cTh1aWkwNQ=="
                target="blank"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <FaInstagram className="text-white w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/dsc-pccoe"
                target="blank"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <FaLinkedin className="text-white w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <FaGithub className="text-white w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-center gap-2">
                <FaEnvelope className="w-5 h-5" />
                <a
                  href="mailto:contact@alphabyte.com"
                  className="hover:text-pink-500"
                >
                  gdgcpccoe@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span>PCCOE Campus, Pune</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © 2025 AlphaByte. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            {/* <a href="#" className="text-neutral-400 hover:text-pink-500">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-pink-500">
                Terms of Service
              </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
