import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import './FloatingContactButtons.css';

const FloatingContactButtons = () => {
    const whatsappNumber = "919807371966";
    const phoneNumber = "+919807371966";
    const message = encodeURIComponent("Hello Advocate Devendra Singh, I would like to book a legal consultation.");

    return (
        <div className="floating-buttons-container">
            <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="float-btn float-whatsapp"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle size={28} />
            </a>
            <a
                href={`tel:${phoneNumber}`}
                className="float-btn float-call"
                aria-label="Call Now"
            >
                <PhoneCall size={28} />
            </a>
        </div>
    );
};

export default FloatingContactButtons;
