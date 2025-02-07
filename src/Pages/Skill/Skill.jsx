import React from "react";
import "animate.css";
const Skill = () => {
    const skills = [
        {
            category: "Frontend", skills: [
                { name: "React.js", level: "90%" },
                { name: "HTML & CSS", level: "95%" },
                { name: "Tailwind CSS", level: "85%" },
                { name: "JavaScript", level: "80%" }
            ]
        },
        {
            category: "Backend", skills: [
                { name: "Node.js", level: "85%" },
                { name: "Express.js", level: "80%" },
                { name: "MongoDB", level: "75%" },
                { name: "Firebase", level: "70%" }
            ]
        },
        {
            category: "Tools & Others", skills: [
                { name: "Git & GitHub", level: "90%" },
                { name: "Figma", level: "75%" }
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto my-20 px-6 py-10 bg-white shadow-lg rounded-lg text-gray-800">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 animate__animated animate__fadeInDown">
                My Skills
            </h2>

            {/* Skills List */}
            {skills.map((category, index) => (
                <div key={index} className="mb-6 animate__animated animate__fadeInUp animate__delay-1s">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">{category.category}</h3>
                    {category.skills.map((skill, i) => (
                        <div key={i} className="mb-3">
                            <p className="text-gray-800 font-medium">{skill.name}</p>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-blue-500 h-3 rounded-full animate__animated animate__fadeInLeft"
                                    style={{ width: skill.level }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default Skill;