import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiFirebase, SiFigma } from "react-icons/si";

const Skill = () => {
    const skills = [
        {
            category: "Frontend",
            skills: [
                { name: "React.js", icon: <FaReact className="text-blue-500" /> },
                { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> }
            ]
        },
        {
            category: "Tools & Others",
            skills: [
                { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
                { name: "Figma", icon: <SiFigma className="text-purple-500" /> }
            ]
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="max-w-5xl mx-auto my-20 px-6"
        >
            {/* Heading */}
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl font-bold text-center text-blue-600 mb-10"
            >
                My Skills
            </motion.h2>

            {/* Skill Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((category, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: index * 0.2 }} 
                        className="bg-white shadow-xl rounded-2xl p-6 text-center"
                    >
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {category.skills.map((skill, i) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={{ scale: 1.2, rotate: 5 }} 
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="flex flex-col items-center cursor-pointer"
                                >
                                    <div className="text-5xl">{skill.icon}</div>
                                    <p className="text-gray-800 font-medium mt-2">{skill.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skill;
