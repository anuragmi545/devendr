import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="navbar-header">
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <Scale size={32} className="logo-icon text-gold" />
                    <div className="logo-text">
                        <span className="logo-name">Advocate Devendra Singh</span>
                        <span className="logo-sub">High Court & District Court, Prayagraj</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="desktop-nav">
                    <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>About</NavLink>
                    <NavLink to="/services" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Services & Pricing</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Contact</NavLink>
                    <Link to="/contact" className="btn btn-primary nav-btn">Book Consultation</Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="mobile-nav">
                    <NavLink to="/" className={({ isActive }) => "mobile-link" + (isActive ? " active" : "")} onClick={closeMenu} end>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => "mobile-link" + (isActive ? " active" : "")} onClick={closeMenu}>About</NavLink>
                    <NavLink to="/services" className={({ isActive }) => "mobile-link" + (isActive ? " active" : "")} onClick={closeMenu}>Services & Pricing</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => "mobile-link" + (isActive ? " active" : "")} onClick={closeMenu}>Contact</NavLink>
                    <Link to="/contact" className="btn btn-primary mobile-btn" onClick={closeMenu}>Book Consultation</Link>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
