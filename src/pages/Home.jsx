import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Scale, BookOpen, Clock, Banknote, MapPin, Phone, MessageCircle, CheckCircle, HelpCircle, Star, TrendingUp } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css';
import devendraPhoto from '../assets/devendra-photo.jpg';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Advocate Devendra Singh | District Court Prayagraj | Affordable Lawyer</title>
                <meta name="description" content="Trusted & affordable legal support in Prayagraj by Advocate Devendra Singh (B.Tech, LL.B, LL.M). Expert in District Court matters, Civil, Criminal, and Traffic cases." />
                <meta name="keywords" content="Advocate in Prayagraj, Lawyer in Naini, Legal services in Prayagraj, Affordable lawyer Prayagraj, District Court Prayagraj" />
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Advocate Devendra Singh",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Triveni Nagar, Naini",
                "addressLocality": "Prayagraj",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "211008",
                "addressCountry": "IN"
              },
              "telephone": "+919807371966",
              "priceRange": "₹500 - ₹20000"
            }
          `}
                </script>
            </Helmet>

            {/* Hero Section Slider */}
            <section className="hero-section">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    className="hero-swiper"
                >
                    <SwiperSlide>
                        <div className="hero-slide-bg slide-photo-bg" style={{ backgroundImage: `url(${devendraPhoto})` }}>
                            <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.9) 0%, rgba(32, 58, 67, 0.8) 50%, rgba(44, 83, 100, 0.7) 100%)' }}></div>
                            <div className="container hero-content">
                                <div className="hero-badge">
                                    <Scale size={18} className="text-gold" />
                                    <span>Dedicated to Justice & Integrity</span>
                                </div>
                                <h1>Expert Legal Counsel for <span className="text-gold">Your Peace of Mind</span></h1>
                                <p className="hero-subtitle">
                                    Providing strategic legal solutions with a commitment to excellence and honest representation in every case.
                                </p>
                                <div className="hero-actions">
                                    <Link to="/about" className="btn btn-primary btn-lg">Know More About Me</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero-slide-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')" }}>
                            <div className="hero-overlay"></div>
                            <div className="container hero-content">
                                <div className="hero-badge">
                                    <Scale size={18} className="text-gold" />
                                    <span>2+ Years Practice | District Court Practice – Prayagraj</span>
                                </div>
                                <h1>Trusted Legal Support in Prayagraj – <span className="text-gold">Affordable & Transparent</span></h1>
                                <p className="hero-subtitle">
                                    Professional Legal Assistance by Advocate Devendra Singh <br />
                                    <span className="qualifications">(B.Tech, LL.B, LL.M)</span>
                                </p>

                                <div className="hero-actions">
                                    <Link to="/contact" className="btn btn-primary btn-lg">Book Consultation</Link>
                                    <a href="tel:+919807371966" className="btn btn-outline bg-white-hover btn-lg">
                                        <Phone size={20} className="mr-2" /> Call Now
                                    </a>
                                    <a href="https://wa.me/919807371966" target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">
                                        <MessageCircle size={20} className="mr-2" /> WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero-slide-bg" style={{ backgroundColor: 'var(--primary-navy)' }}>
                            <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(15, 32, 39, 0.95) 0%, rgba(32, 58, 67, 0.9) 100%)' }}></div>
                            <div className="container hero-split-layout">
                                <div className="hero-split-text">
                                    <div className="hero-badge">
                                        <Shield size={18} className="text-gold" />
                                        <span>Your Strongest Advocate in Court</span>
                                    </div>
                                    <h1>Fierce Representation, <span className="text-gold">Compassionate Counsel</span></h1>
                                    <p className="hero-subtitle">
                                        Whether it's family disputes, civil matters, or criminal defense, I stand by you at every step of your legal journey.
                                    </p>
                                    <div className="hero-actions">
                                        <Link to="/services" className="btn btn-primary btn-lg">Explore Practice Areas</Link>
                                    </div>
                                </div>
                                <div className="hero-split-image">
                                    <div className="hero-photo-wrapper">
                                        <div className="hero-photo-frame">
                                            <img src={devendraPhoto} alt="Advocate Devendra Singh" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* Key Highlights Section */}
            <section className="highlights-section section-padding">
                <div className="container">
                    <div className="highlights-grid">
                        <div className="highlight-card">
                            <div className="icon-wrapper"><Clock size={32} /></div>
                            <h3>2+ Years of Experience</h3>
                            <p>Dedicated practice at District Court Prayagraj and nearby courts.</p>
                        </div>
                        <div className="highlight-card">
                            <div className="icon-wrapper text-gold"><Banknote size={32} /></div>
                            <h3>Transparent Fees</h3>
                            <p>Affordable legal assistance starting from just ₹500.</p>
                        </div>
                        <div className="highlight-card">
                            <div className="icon-wrapper"><Shield size={32} /></div>
                            <h3>Client-Focused Approach</h3>
                            <p>Honest advice and personalized attention for every single case.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-us section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2>Why Choose <span className="text-gold">Us?</span></h2>
                        <div className="title-underline"></div>
                        <p className="section-desc">We simplify the legal journey for common people with honesty and dedication.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <CheckCircle size={24} className="text-gold feature-icon" />
                            <div>
                                <h4>Affordable Legal Support</h4>
                                <p>Quality legal aid should not bankrupt you. We offer very competitive rates.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle size={24} className="text-gold feature-icon" />
                            <div>
                                <h4>Transparent Fees</h4>
                                <p>No sudden surprises. Our pricing table is open for everyone to see.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle size={24} className="text-gold feature-icon" />
                            <div>
                                <h4>Quick Response</h4>
                                <p>Your time matters. We ensure fast responses to calls and messages.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle size={24} className="text-gold feature-icon" />
                            <div>
                                <h4>Honest Legal Advice</h4>
                                <p>We won't prolong cases unnecessarily. We tell you the truth upfront.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle size={24} className="text-gold feature-icon" />
                            <div>
                                <h4>Local Court Experience</h4>
                                <p>Deep understanding of the local District Court Prayagraj procedures.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle size={24} className="text-gold feature-icon" />
                            <div>
                                <h4>Personalized Attention</h4>
                                <p>Every case is unique. We give your case the individual time it deserves.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Growth Strategy Section */}
            <section className="growth-strategy border-top section-padding">
                <div className="container">
                    <div className="growth-grid">
                        <div className="growth-content cursor-default">
                            <h2>Our Seamless <span className="text-gold">Client Experience</span></h2>
                            <div className="title-underline" style={{ margin: '0 0 1.5rem 0' }}></div>
                            <p className="mb-4 text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Navigating the legal system is stressful. We make it easy, transparent, and step-by-step so you always know what’s happening in your case.
                            </p>

                            <ul className="growth-steps">
                                <li>
                                    <div className="step-number">1</div>
                                    <div className="step-text">
                                        <h4>Free 5-Minute Consultation</h4>
                                        <p>Call us to briefly discuss your matter absolutely free.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="step-number">2</div>
                                    <div className="step-text">
                                        <h4>Transparent Pricing Policy</h4>
                                        <p>We review your files and provide an upfront estimated fee structure.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="step-number">3</div>
                                    <div className="step-text">
                                        <h4>Easy Documentation Process</h4>
                                        <p>We guide you on what documents to collect, making filing stress-free.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="step-number">4</div>
                                    <div className="step-text">
                                        <h4>Step-by-Step Legal Guidance</h4>
                                        <p>We represent you in court and keep you thoroughly updated.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="growth-image-wrapper">
                            <div className="growth-card">
                                <TrendingUp size={48} className="text-gold mb-3" />
                                <h3>Your Peace of Mind is Our Priority</h3>
                                <p>Join hundreds of satisfied individuals who have found justice and legal relief through our dedicated services in Prayagraj.</p>
                                <Link to="/contact" className="btn btn-primary mt-4">Start Your Case Today</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Slider */}
            <section className="testimonials-section section-padding bg-light">
                <div className="container text-center">
                    <h2>Client <span className="text-gold">Testimonials</span></h2>
                    <div className="title-underline"></div>
                    <div className="testimonials-slider-container mt-5">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{ 768: { slidesPerView: 2 } }}
                            autoplay={{ delay: 6000, disableOnInteraction: true }}
                            pagination={{ clickable: true }}
                            className="testimonials-swiper"
                        >
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div className="stars"><Star size={18} /><Star size={18} /><Star size={18} /><Star size={18} /><Star size={18} /></div>
                                    <p>"Advocate Devendra helped me successfully settle my traffic challan without any hassle. Very affordable and professional!"</p>
                                    <h4>- Rahul S., Student</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div className="stars"><Star size={18} /><Star size={18} /><Star size={18} /><Star size={18} /><Star size={18} /></div>
                                    <p>"Honest advice and transparent fee structure. He clearly explained my property dispute process step-by-step."</p>
                                    <h4>- Amit M., Business Owner</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div className="stars"><Star size={18} /><Star size={18} /><Star size={18} /><Star size={18} /><Star size={18} /></div>
                                    <p>"I was terrified about my court notice, but his patient guidance brought a lot of peace. He handled my case remarkably well."</p>
                                    <h4>- Priya K., Professional</h4>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* FAQ Placeholder */}
            <section className="faq-section section-padding">
                <div className="container max-w-800">
                    <div className="text-center mb-5">
                        <h2>Frequently Asked <span className="text-gold">Questions</span></h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="faq-list">
                        <div className="faq-item">
                            <h4><HelpCircle size={20} className="text-gold mr-2" /> Do you offer free consultations?</h4>
                            <p>Yes, the first 5-minute phone consultation is completely free to understand the basic nature of your case.</p>
                        </div>
                        <div className="faq-item">
                            <h4><HelpCircle size={20} className="text-gold mr-2" /> What are your typical fees?</h4>
                            <p>Our fees are highly affordable, starting from ₹500 for basic affidavits. Please visit our <Link to="/services" className="text-gold">Services Page</Link> for a complete pricing table.</p>
                        </div>
                        <div className="faq-item">
                            <h4><HelpCircle size={20} className="text-gold mr-2" /> Where do you practice?</h4>
                            <p>I primarily practice at the District Court Prayagraj and nearby courts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section bg-navy section-padding text-center">
                <div className="container">
                    <h2>Need Immediate Legal Help?</h2>
                    <p>Get a Free First 5-Minute Consultation. No hidden fees, just honest legal advice.</p>
                    <div className="cta-buttons mt-4">
                        <Link to="/contact" className="btn btn-primary btn-lg">Contact Us Today</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
