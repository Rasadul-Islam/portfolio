import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import bannerImg from "./../../../public/Images/banner.jpg";
import resume from "../../../public/document/Rasadul-Islam-CV.pdf";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row py-10 items-center justify-between md:h-96 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg overflow-hidden px-10">
      {/* Left Section - Name, Title, Resume */}
      <div className="flex flex-col justify-center">
        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left mt-10"
        >
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="text-yellow-300">Rasadul Islam</span>
          </h1>
          <p className="text-xl mt-2 font-semibold">MERN Stack Developer</p>
        </motion.div>

        {/* Resume Download Button */}
        <motion.a
          href={resume}
          download
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 px-6 py-3 bg-teal-400 text-black font-semibold rounded-lg shadow-lg w-fit mx-auto md:mx-0 hover:bg-teal-600 transition duration-300"
        >
          📄 Download Resume
        </motion.a>
      </div>

      {/* Right Section - Profile Image & Social Links */}
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <motion.img
          src={bannerImg}
          alt="Your Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
        />

        {/* Social Media Links */}
        <div className="flex mt-4 space-x-4">
          <motion.a
            href="https://github.com/Rasadul-Islam"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rasadul-islam-sg-gsf/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white hover:text-gray-300 transition duration-300"
          > 
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="https://x.com/rasadul_sggsf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <Twitter size={28} />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/rasadul.islam.sg.gsf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <Facebook size={28} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
