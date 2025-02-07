import React from "react";
import "animate.css";
const About = () => {
    return (
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg text-gray-800 my-10">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 animate__animated animate__fadeInDown">
                About Me
            </h2>

            {/* Programming Journey */}
            <p className="text-lg text-gray-700 leading-relaxed animate__animated animate__fadeInUp">
                Hi! I’m <span className="font-semibold text-blue-500">Rasadul Islam</span>, a passionate
                <span className="font-semibold text-purple-600"> MERN Stack Developer</span> who loves building efficient, scalable, and user-friendly web applications.
                My coding journey started with curiosity and has now turned into a Web developer.
            </p>

            {/* Journey & Work Interests */}
            <p className="mt-4 text-gray-700 animate__animated animate__fadeInUp animate__delay-1s">
                I started with HTML, CSS, and JavaScript before diving deep into <span className="font-semibold">React.js, Node.js, Express.js, and MongoDB</span>.
                I enjoy working on full-stack applications, API development, and optimizing performance.
            </p>

            {/* Hobbies & Interests */}
            <p className="mt-4 text-gray-700 animate__animated animate__fadeInUp animate__delay-2s">
                Beyond coding, I love <span className="font-semibold">spending time with pets, especially birds 🐦, and exploring new places 🌍</span>.
                I also enjoy learning about new technologies and improving my skills every day.
            </p>

            {/* Fun Fact */}
            <p className="mt-6 text-center text-lg font-semibold text-teal-600 animate__animated animate__zoomIn animate__delay-3s">
                "Code is like poetry – when written well, it can be beautiful and powerful!" ✨
            </p>
        </div>
    );
};

export default About;