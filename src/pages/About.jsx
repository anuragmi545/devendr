import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, Award, MapPin, Scale, HeartHandshake } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>About Advocate Devendra Singh | Naini, Prayagraj</title>
                <meta name="description" content="Learn about Advocate Devendra Singh (B.Tech, LL.B, LL.M), a dedicated and affordable lawyer practicing in District Court Prayagraj and based in Naini." />
            </Helmet>

            {/* Page Header */}
            <div className="page-header">
                <div className="container text-center">
                    <h1>About <span className="text-gold">Advocate Devendra Singh</span></h1>
                    <p>Dedicated to helping common people understand and navigate the legal process.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="about-grid">
                    {/* Photo Section */}
                    <div className="about-photo-wrapper">
                        <div className="photo-frame">
                            {/* Note: The user provided a photo, replace '/devendra-photo.jpg' with actual image later or drop it in public */}
                            <img src="/devendra-photo.jpg" alt="Advocate Devendra Singh" className="advocate-photo" />
                        </div>
                        <div className="experience-badge">
                            <span className="years">2+</span>
                            <span className="text">Years of<br />Experience</span>
                        </div>
                    </div>

                    {/* Bio Section */}
                    <div className="about-content">
                        <h2>Professional Legal Support You Can Trust</h2>
                        <div className="title-underline" style={{ margin: '0 0 1.5rem 0' }}></div>

                        <p className="bio-lead">
                            With over 2 years of active practice at the District Court Prayagraj and nearby courts, Advocate Devendra Singh brings a unique blend of technical analytical skills and profound legal knowledge to every case.
                        </p>

                        <div className="credentials-list">
                            <div className="credential-item">
                                <div className="cred-icon"><GraduationCap size={24} className="text-gold" /></div>
                                <div className="cred-text">
                                    <h4>Strong Educational Background</h4>
                                    <p>Holding a <strong>B.Tech</strong>, <strong>LL.B</strong>, and <strong>LL.M</strong>, allowing for a structured, analytical, and highly organized approach to legal problem-solving.</p>
                                </div>
                            </div>

                            <div className="credential-item">
                                <div className="cred-icon"><HeartHandshake size={24} className="text-gold" /></div>
                                <div className="cred-text">
                                    <h4>Client-Focused Philosophy</h4>
                                    <p>My core mission is helping common people understand the complex legal process. I believe in giving honest advice, maintaining clear communication, and charging an affordable fee.</p>
                                </div>
                            </div>

                            <div className="credential-item">
                                <div className="cred-icon"><MapPin size={24} className="text-gold" /></div>
                                <div className="cred-text">
                                    <h4>Local Presence in Naini, Prayagraj</h4>
                                    <p>Readily available for consultations in Naini, providing quick responses and regular updates on your pending matters.</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-values bg-navy">
                            <h3>Our Core Values</h3>
                            <ul>
                                <li><Scale size={18} className="text-gold mr-2" /> Honest Legal Advice</li>
                                <li><Award size={18} className="text-gold mr-2" /> Transparent & Affordable Fee</li>
                                <li><HeartHandshake size={18} className="text-gold mr-2" /> Empathy and Personalized Attention</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
