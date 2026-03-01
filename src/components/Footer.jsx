import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Scale } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-navy">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col about-col">
                        <div className="footer-logo">
                            <Scale size={28} className="text-gold" />
                            <h3>Advocate Devendra Singh</h3>
                        </div>
                        <p className="footer-desc">
                            Professional, transparent, and affordable legal support in Prayagraj. Dedicated to helping common people navigate the legal system with confidence.
                        </p>
                    </div>

                    <div className="footer-col links-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Advocate</Link></li>
                            <li><Link to="/services">Services & Pricing</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h4>Contact Info</h4>
                        <div className="contact-item">
                            <MapPin size={18} className="text-gold" />
                            <span>Triveni Nagar, Naini, Prayagraj – 211008, U.P., India</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} className="text-gold" />
                            <span>+91 9807371966</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} className="text-gold" />
                            <span>info@advocatedevendrasingh.com</span>
                        </div>
                        <div className="contact-item">
                            <Clock size={18} className="text-gold" />
                            <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
                        </div>
                    </div>
                </div>

                <div className="footer-disclaimer">
                    <p>
                        <strong>Disclaimer:</strong> This website is for informational purposes only and does not create an advocate-client relationship. The information provided is not intended as legal advice.
                    </p>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Advocate Devendra Singh. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
