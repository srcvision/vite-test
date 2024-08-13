import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { FaBars } from 'react-icons/fa';

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <nav className="h-20 w-full flex items-center px-10 shadow-md overflow-hidden">
                <div className="flex-shrink-0">
                    <a href="/" className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-indigo-500">
                        Designpo
                    </a>
                </div>
                <button
                    className="ml-auto block lg:hidden text-indigo-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <FaBars size={30} />
                </button>
                <ul className={`lg:flex space-x-5 ml-auto ${isOpen ? 'block' : 'hidden'} lg:block transition duration-300`}>
                    <li className="mt-2 lg:mt-0">
                        <Link to="/" className="bg-gradient-to-r text-white hover:text-transparent hover:bg-clip-text hover:from-indigo-700 hover:to-indigo-500 text-lg p-2 px-4 transition duration-300">
                            Home
                        </Link>
                    </li>
                    <li className="mt-2 lg:mt-0">
                        <Link to="/about" className="bg-gradient-to-r text-white hover:text-transparent hover:bg-clip-text hover:from-indigo-700 hover:to-indigo-500 text-lg p-2 px-4 transition duration-300">
                            About
                        </Link>
                    </li>
                    <li className="mt-2 lg:mt-0">
                        <Link to="/work" className="bg-gradient-to-r text-white hover:text-transparent hover:bg-clip-text hover:from-indigo-700 hover:to-indigo-500 text-lg p-2 px-4 transition duration-300">
                            Work
                        </Link>
                    </li>
                    <li className="mt-2 lg:mt-0">
                        <Link to="/contact" className="bg-gradient-to-r text-white hover:text-transparent hover:bg-clip-text hover:from-indigo-700 hover:to-indigo-500 text-lg p-2 px-4 transition duration-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default Main;
