import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../../public/Images/logo.jpg";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const resumeUrl = "../../../public/document/Rasadul-Islam-CV.pdf";

    const routes = [
        { path: "/home", name: "Home", id: "1" },
        { path: "/about", name: "About", id: "2" },
        { path: "/skills", name: "Skills", id: "3" },
        { path: "/projects", name: "Projects", id: "4" },
        { path: "/contact", name: "Contact", id: "5" },
    ];

    // Handle scroll to toggle sticky state
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true); // Add sticky class when scrolling
            } else {
                setSticky(false); // Remove sticky class when at the top
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            setOpen(false); // Close menu after clicking
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 w-full z-50 ${
                sticky ? "bg-gray-700 shadow-md" : "bg-transparent"
            } transition-all duration-300 flex justify-between items-center px-6 py-3 max-w-7xl mx-auto`}
        >
            {/* Website Logo */}
            <Link to="/" className="text-2xl lg:text-4xl font-bold text-white">
                <img src={logo} alt="Rasadul" className="w-32" />
            </Link>

            {/* Navigation Menu */}
            <ul
                className={`flex flex-col lg:flex-row lg:items-center absolute lg:relative left-0 right-0 top-16 lg:top-0 text-white lg:text-white px-5 py-5 lg:px-0 lg:py-0 rounded-lg gap-y-6 lg:gap-x-8 transition-all duration-300 w-40 mr-32 ${
                    open ? "block bg-gray-700 shadow-lg" : "hidden lg:flex"
                }`}
            >
                {routes.map((route) => (
                    <li key={route.id}>
                        <button
                            onClick={() => handleScrollToSection(route.path.substring(1))}
                            className="hover:text-gray-800 hover:bg-gray-300 border-2 border-teal-300 p-2 rounded-lg z-10 px-6 transition"
                        >
                            {route.name}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Menu Icons and Resume Button */}
            <div className="flex gap-4 items-center">
                {/* Resume Button */}
                <Link
                    to={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-teal-600 transition"
                >
                    Resume
                </Link>

                {/* Hamburger Menu */}
                <div
                    className="lg:hidden border-2 border-teal-400 py-1 px-4 rounded-lg bg-teal-300 hover:bg-teal-600"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <IoClose className="bg-white text-black text-3xl rounded-full p-1" />
                    ) : (
                        <IoMenu className="bg-white text-black text-3xl rounded-full p-1" />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
