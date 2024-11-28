import React from "react";

// Importing React Icons for LinkedIn and GitHub
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-darkblue text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo or Brand Name */}
        <div className="text-lg font-semibold">
          <a href="#" className="hover:text-gray-300">My Portfolio</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/utkarshbhadauria03/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/utkarshbhadauria03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
