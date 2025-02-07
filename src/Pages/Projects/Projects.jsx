import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import eduLoop from "../../../public/Images/EduLoop.jpg";
import pullUp from "../../../public/Images/PullUp.jpg";
import warmHearts from "../../../public/Images/Warm-Hearts.jpg";

const projects = [
  {
    name: "EduLoop",
    image: eduLoop,
    link: "https://edu-loop.web.app/",
    stack: "React, Node.js, Express, MongoDB, Firebase, JWT, Stripe",
    description: "A platform for people to donate winter clothing to those in need across Bangladesh.",
  },
  {
    name: "PullUp",
    image: pullUp,
    link: "https://crowd-funding-d936a.web.app/",
    stack: "React, Node.js, Express, MongoDB, Firebase",
    description: "A backend API for managing user authentication, class management, and payment processing.",
  },
  {
    name: "Warm Hearts",
    image: warmHearts,
    link: "https://warm-hearts.web.app/",
    stack: "React, Tailwind CSS, Firebase",
    description: "My personal portfolio showcasing my skills and projects.",
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 animate__animated animate__fadeInDown">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm h-[480px] mx-auto bg-white shadow-xl border-2 border-teal-400 shadow-teal-300 rounded-lg overflow-hidden group relative items-center justify-between flex flex-col"
          >
            {/* Project Image with hover effect */}
            <div className="relative w-full group-hover:overflow-visible transition-all duration-500">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover group-hover:scale-110 group-hover:translate-y-3 group-hover:object-top transition-all duration-500 ease-in-out"
              />
              {/* Full image shown when hovering */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-500"></div>
            </div>

            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-700">{project.name}</h3>
              <p className="text-gray-500 mt-2">{project.description}</p>
            </div>

            <div className="px-3 py-3 w-full flex justify-between items-center bg-gray-100">
              <span className="text-sm text-gray-700">{project.stack}</span>
              <Link
                to={project.link}
                target="_black"
                className="w-40 mx-auto text-center px-2 ml-2 py-3 bg-teal-300 text-black text-sm font-semibold rounded-lg hover:bg-teal-600 transition duration-300"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
