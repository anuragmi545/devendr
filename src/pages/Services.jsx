import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, Shield, FileText, Gavel, Users, Car, Home, Handshake, AlertCircle } from 'lucide-react';
import './Services.css';

const Services = () => {
    const pricingData = [
        { service: "FIR File Study & Legal Opinion", fee: "₹500" },
        { service: "Legal Notice Drafting", fee: "₹1,500 – ₹3,000" },
        { service: "Complaint Filing", fee: "₹1,000 – ₹3,000" },
        { service: "Court Case Filing (Basic Civil)", fee: "₹3,000 – ₹8,000" },
        { service: "Bail Application Drafting", fee: "₹2,000 – ₹7,000" },
        { service: "Court Appearance (Per Date)", fee: "₹1,000 – ₹3,000" },
        { service: "Bike/Traffic Challan Court Settlement", fee: "₹1,000" },
        { service: "Affidavit Drafting", fee: "₹500 – ₹1,500" },
        { service: "Agreement Drafting", fee: "₹2,000 – ₹10,000" },
        { service: "Divorce Petition Drafting", fee: "₹5,000 – ₹20,000" },
        { service: "RTI Drafting", fee: "₹800 – ₹2,000" },
    ];

    const practiceAreas = [
        { title: "Criminal Law", icon: <Shield size={32} /> },
        { title: "Civil Matters", icon: <Scale size={32} /> },
        { title: "Traffic & Challan Cases", icon: <Car size={32} /> },
        { title: "Bail Matters", icon: <Gavel size={32} /> },
        { title: "Legal Notices", icon: <FileText size={32} /> },
        { title: "Property Disputes", icon: <Home size={32} /> },
        { title: "Family Matters", icon: <Users size={32} /> },
        { title: "Agreement Drafting", icon: <Handshake size={32} /> },
        { title: "FIR Review & Guidance", icon: <AlertCircle size={32} /> },
    ];

    return (
        <div className="services-page">
            <Helmet>
                <title>Legal Services & Transparent Pricing | Advocate Devendra Singh</title>
                <meta name="description" content="Transparent pricing for legal services in Prayagraj. FIR consultation, Bail drafting, Court appearances, and Civil matters starting from ₹500." />
            </Helmet>

            {/* Page Header */}
            <div className="page-header">
                <div className="container text-center">
                    <h1>Practice Areas & <span className="text-gold">Pricing</span></h1>
                    <p>Clear, upfront, and affordable legal support tailored for you.</p>
                </div>
            </div>

            {/* Practice Areas */}
            <section className="practice-areas-section section-padding">
                <div className="container text-center">
                    <h2>Our Practice Areas</h2>
                    <div className="title-underline"></div>
                    <p className="section-desc">Extensive expertise across various fields of law at the District Court Prayagraj level.</p>

                    <div className="practice-grid">
                        {practiceAreas.map((area, index) => (
                            <div key={index} className="practice-card">
                                <div className="practice-icon">{area.icon}</div>
                                <h3>{area.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Table */}
            <section className="pricing-section section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2>Transparent Fee Structure</h2>
                        <div className="title-underline"></div>
                        <p className="section-desc">No hidden charges. We believe in providing affordable access to justice.</p>
                    </div>

                    <div className="table-responsive">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Legal Service</th>
                                    <th>Estimated Professional Fee *</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.service}</td>
                                        <td className="fee-amount">{item.fee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pricing-disclaimer">
                        <AlertCircle size={20} className="text-gold" />
                        <p><strong>* Please Note:</strong> The fees listed above are indicative. The final fee may vary depending on the complexity of the matter, time required, and specific court expenses.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
