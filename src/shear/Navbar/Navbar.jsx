import React, { useEffect, useRef, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../public/Images/logo.jpg";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const resumeUrl = "../../../public/document/Rasadul-Islam-CV.pdf";
    const routes = [
        { path: "/", name: "Home", id: "1" },
        { path: "/about", name: "About", id: "2" },
        { path: "/skills", name: "Skills", id: "3" },
        { path: '/projects', name: "Projects", id: "4" },
        { path: '/contact', name: "Contact", id: "5" },
       
    ];
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [open]);


    return (
        <div>
            <nav className="flex justify-between items-center bg-gray-700 py-0 px-6">
                {/* Website Logo */}
                <Link to="/" className="text-2xl lg:text-4xl font-bold text-white">
                    <img src={logo} alt="Rasadul" className='w-32' />
                </Link>

                {/* Navigation Menu */}
                <ul
                    ref={menuRef}
                    className={`flex flex-col lg:flex-row lg:items-center lg:justify-center absolute z-10 lg:relative right-0 top-20 lg:top-0 lg:bg-transparent text-white lg:text-white px-5 py-5 lg:px-0 lg:py-0 rounded-lg gap-y-6 lg:gap-x-8 transition-all duration-300 text-right w-40 ${open ? "block bg-gray-700" : "hidden lg:flex"
                        }`}
                >
                    {routes.map((route) => (
                        <li key={route.id}>
                            <NavLink
                                to={route.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "px-8 py-2 rounded-xl font-extrabold bg-white text-black border-2 border-black text-base md:text-sm lg:text-lg"
                                        : "hover:text-gray-800 hover:bg-gray-300 border-2 border-teal-300 p-2 rounded-lg z-10 px-6"
                                }
                                onClick={() => setOpen(false)} // Close menu on link click
                            >
                                {route.name}
                            </NavLink>
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
        </div>
    );
};

export default Navbar;