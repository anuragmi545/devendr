import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thank you for reaching out. We will get back to you shortly.');
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Advocate Devendra Singh | Book Consultation</title>
                <meta name="description" content="Get in touch with Advocate Devendra Singh. Office located in Triveni Nagar, Naini, Prayagraj. Call or WhatsApp for a quick consultation." />
            </Helmet>

            {/* Page Header */}
            <div className="page-header">
                <div className="container text-center">
                    <h1>Contact <span className="text-gold">Us</span></h1>
                    <p>Get professional legal support. We're here to help.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="contact-grid">

                    {/* Contact Details */}
                    <div className="contact-info">
                        <h2>Let's Discuss Your Legal Matter</h2>
                        <div className="title-underline" style={{ margin: '0 0 2rem 0' }}></div>
                        <p className="contact-intro">
                            Whether you need to file a case, seek a bail application, or just need honest legal advice, feel free to reach out. The first 5-minute consultation is free.
                        </p>

                        <div className="info-list">
                            <div className="info-item">
                                <div className="info-icon"><MapPin size={24} /></div>
                                <div>
                                    <h4>Office Address</h4>
                                    <p>Triveni Nagar, Naini, <br />Prayagraj – 211008, <br />Uttar Pradesh, India</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><Phone size={24} /></div>
                                <div>
                                    <h4>Phone Numbers</h4>
                                    <p><a href="tel:+919807371966" className="contact-link">+91 9807371966</a></p>
                                    <a href="https://wa.me/919807371966" target="_blank" rel="noreferrer" className="btn btn-whatsapp mt-2" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
                                        <MessageCircle size={16} className="mr-2" /> WhatsApp Me
                                    </a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><Mail size={24} /></div>
                                <div>
                                    <h4>Email Address</h4>
                                    <p><a href="mailto:info@advocatedevendrasingh.com" className="contact-link">info@advocatedevendrasingh.com</a></p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><Clock size={24} /></div>
                                <div>
                                    <h4>Office Hours</h4>
                                    <p>Monday - Saturday: <br />10:00 AM - 7:00 PM<br />Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <h3>Book a Consultation</h3>
                        <p className="form-sub">Fill out the form below and we will contact you shortly.</p>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Briefly Describe Your Issue *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="I need help with..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Request <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Google Maps / Location Section */}
            <div className="map-section">
                <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14415.845873539158!2d81.84918735!3d25.3942361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398acaaaac241a7d%3A0x67ba0d440c11be44!2sTriveni%20Nagar%2C%20Naini%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211008!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
