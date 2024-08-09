import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import img1 from '../assets/react.svg';

const Main = () => {
    return (
        <Router>
            <nav className='h-20 w-full flex items-center px-10'>
                <div className='flex-shrink-0'>
                <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-700  to-indigo-500">
              Designpo
            </h1> {/* Update with your logo path */}
                </div>
                <ul className='flex space-x-5 ml-auto'>
                    <li>
                        <Link to="/" className='bg-gradient-to-r text-white hover:text-transparent hover:bg-clip-text hover:from-indigo-700 hover:to-indigo-500 % text-lg p-2 px-4 transition duration-300'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='bg-gradient-to-r text-white hover:text-transparent hover:bg-clip-text hover:from-indigo-700 hover:from-5% hover:to-indigo-500 hover:to-5% text-lg p-2 px-4 transition duration-300'>About</Link>
                    </li>
                    <li>
                        <Link to="/work" className='bg-gradient-to-r text-white hover:text-transparent hover:bg-clip-text hover:from-indigo-700 hover:from-5% hover:to-indigo-500 hover:to-5% text-lg p-2 px-4 transition duration-300'>Work</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='bg-gradient-to-r text-white hover:text-transparent hover:bg-clip-text hover:from-indigo-700 hover:from-5% hover:to-indigo-500 hover:to-5% text-lg p-2 px-4 transition duration-300'>Contact</Link>
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
