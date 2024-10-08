import React, { useState } from 'react';
import './Header.css';

const Header = ({ setActiveSection }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleNavClick = (section) => {
        setActiveSection(section);
        setIsNavOpen(false);
    };

    return (
        <header>
            <h1>Niranjana Kathirvel</h1>
            <button className="nav-toggle" onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
                <ul className="nav-list">
                    <li><a href="#home" onClick={() => handleNavClick('home')}>Home</a></li>
                    <li><a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a></li>
                    <li><a href="#skills" onClick={() => handleNavClick('skills')}>Skills</a></li>
                    <li><a href="" target="" rel="noopener noreferrer">Resume</a></li>
                    <li><a href="#education" onClick={() => handleNavClick('education')}>Education</a></li>
                    <li><a href="#certificates" onClick={() => handleNavClick('certificates')}>Certificates</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
