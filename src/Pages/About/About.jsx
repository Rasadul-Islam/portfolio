import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../../public/Images/banner.jpg"; 

const About = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto my-16 p-8 bg-white shadow-2xl rounded-3xl flex flex-col md:flex-row items-center gap-8"
        >
            {/* Profile Image */}
            <motion.img 
                src={profileImg} 
                alt="Rasadul Islam"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg"
            />

            {/* About Content */}
            <div className="text-center md:text-left">
                {/* Heading */}
                <motion.h2 
                    initial={{ opacity: 0, x: -30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5 }} 
                    className="text-4xl font-bold text-blue-600 mb-4"
                >
                    About Me
                </motion.h2>

                {/* Description */}
                <motion.p 
                    initial={{ opacity: 0, x: 30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5, delay: 0.2 }} 
                    className="text-lg text-gray-700 leading-relaxed"
                >
                    Hi! I’m <span className="font-semibold text-blue-500">Rasadul Islam</span>, a 
                    <span className="font-semibold text-purple-600"> MERN Stack Developer</span> passionate about building 
                    modern, efficient, and scalable web applications. 
                </motion.p>

                {/* Journey */}
                <motion.p 
                    initial={{ opacity: 0, x: 30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5, delay: 0.4 }} 
                    className="mt-4 text-gray-700"
                >
                    I started with <span className="font-semibold">HTML, CSS, JavaScript</span>, then dived deep into 
                    <span className="font-semibold"> React.js, Node.js, Express.js, and MongoDB</span>. I love solving complex problems and 
                    optimizing web performance.
                </motion.p>

                {/* Interests */}
                <motion.p 
                    initial={{ opacity: 0, x: 30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5, delay: 0.6 }} 
                    className="mt-4 text-gray-700"
                >
                    Beyond coding, I enjoy <span className="font-semibold">exploring new places 🌍, 
                    taking care of pets 🐦, and constantly learning new technologies.</span>
                </motion.p>

                {/* Fun Fact */}
                <motion.p 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.6, delay: 0.8 }} 
                    className="mt-6 text-center text-lg font-semibold text-teal-600"
                >
                    "Code is like poetry – when written well, it’s beautiful & powerful!" ✨
                </motion.p>
            </div>
        </motion.div>
    );
};

export default About;
