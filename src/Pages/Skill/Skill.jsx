import React from "react";
import "animate.css";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiFirebase, SiFigma } from "react-icons/si";

const Skill = () => {
    const skills = [
        {
            category: "Frontend",
            skills: [
                { name: "React.js", level: "90%", icon: <FaReact className="text-blue-500" /> },
                { name: "HTML", level: "95%", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS", level: "95%", icon: <FaCss3Alt className="text-blue-600" /> },
                { name: "Tailwind CSS", level: "85%", icon: <SiTailwindcss className="text-sky-400" /> },
                { name: "JavaScript", level: "80%", icon: <SiJavascript className="text-yellow-500" /> }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", level: "85%", icon: <FaNodeJs className="text-green-600" /> },
                { name: "Express.js", level: "80%", icon: <SiExpress className="text-gray-500" /> },
                { name: "MongoDB", level: "75%", icon: <SiMongodb className="text-green-500" /> },
                { name: "Firebase", level: "70%", icon: <SiFirebase className="text-yellow-400" /> }
            ]
        },
        {
            category: "Tools & Others",
            skills: [
                { name: "Git & GitHub", level: "90%", icon: <FaGitAlt className="text-red-500" /> },
                { name: "Figma", level: "75%", icon: <SiFigma className="text-purple-500" /> }
            ]
        }
    ];

    return (
        <div className="max-w-5xl mx-auto my-20 px-6">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-10 animate__animated animate__fadeInDown">
                My Skills
            </h2>

            {/* Skill Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((category, index) => (
                    <div 
                        key={index} 
                        className="bg-white shadow-xl rounded-2xl p-6 animate__animated animate__fadeInUp"
                    >
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center border-b pb-2">
                            {category.category}
                        </h3>
                        {category.skills.map((skill, i) => (
                            <div key={i} className="mb-4">
                                <div className="flex items-center gap-2">
                                    {skill.icon}
                                    <p className="text-gray-800 font-medium">{skill.name}</p>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full animate__animated animate__fadeInLeft"
                                        style={{ width: skill.level }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
