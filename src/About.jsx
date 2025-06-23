import React from 'react';
import './About.css'; 

function About() {
    return (
        <div className="about">
            <div className="about-header">
                <h2>About Us</h2>
                <p>LongTerm is the premier source for quality tools. We specialize in Makita, Wasp and Wera and we stock over 10,000 different tools with over 25,000 available to order. You can shop with confidence knowing all of the tools we carry come with a lifetime manufacturer's warranty (with the exception of bits, tweezers, and torque screwdrivers).

Longterm was named a Greater Kansas City Chamber of Commerce 2024 Small Business Superstar.

LongTerm is a Minority Business Enterprise certified by the government.</p>
                <p>This is a store that provides quality products to customers and quality services to customers' needs.</p>
            </div>

            <div className="services">
                <h3>Our Services</h3>
                <div className="service-cards">
                    <div className="service-card quality">
                        <div className="service-overlay">
                            <h4>Quality Products</h4>
                            <p>We offer a wide range of high-quality products to meet your needs.</p>
                        </div>
                    </div>
                    <div className="service-card support">
                        <div className="service-overlay">
                            <h4>Customer Support</h4>
                            <p>Our dedicated support team is here to assist you 24/7.</p>
                        </div>
                    </div>
                    <div className="service-card delivery">
                        <div className="service-overlay">
                            <h4>Fast Delivery</h4>
                            <p>We ensure quick and reliable delivery for all your orders.</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="about-footer">
                <p>&copy; 2025 Longterm. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default About;
