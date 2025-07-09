import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-overlay">
                    <h1>Welcome to LongTerm</h1>
                    <p>Your trusted partner for quality tools and exceptional service.</p>
                    <a href="#services" className="cta-btn">Explore Our Services</a>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-main">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>LongTerm is the premier source for quality tools. We specialize in Makita, Wasp, and Wera, stocking over 10,000 different tools with over 25,000 available to order. Shop with confidence knowing all of the tools we carry come with a lifetime manufacturer's warranty (with the exception of bits, tweezers, and torque screwdrivers).</p>
                    <p>LongTerm was named a Greater Kansas City Chamber of Commerce 2024 Small Business Superstar and is a Minority Business Enterprise certified by the government. We are committed to providing quality products and services tailored to our customers' needs.</p>
                </div>
                <div className="about-image">
                    <img src="/images/essentials.jpg" alt="About LongTerm" />
                </div>
            </section>

            {/* Our Values Section */}
            <section className="about-values">
                <h3>Our Values</h3>
                <div className="values-list">
                    <div className="value-item">
                        <span role="img" aria-label="quality">🏆</span>
                        <h4>Quality</h4>
                        <p>We never compromise on the quality of our products and services.</p>
                    </div>
                    <div className="value-item">
                        <span role="img" aria-label="integrity">🤝</span>
                        <h4>Integrity</h4>
                        <p>We build trust through transparency and ethical business practices.</p>
                    </div>
                    <div className="value-item">
                        <span role="img" aria-label="innovation">💡</span>
                        <h4>Innovation</h4>
                        <p>We embrace new ideas to deliver the best solutions for our customers.</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services" id="services">
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
            </section>

            {/* Meet the Team Section */}
            <section className="about-team">
                <h3>Meet the Team</h3>
                <div className="team-list">
                    <div className="team-member">
                        <img src="/images/IMG-20250412-WA0001.jpg" alt="Team Member 1" />
                        <h4>George Matasi</h4>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="/images/IMG-20250412-WA0002.jpg" alt="Team Member 2" />
                        <h4>George Matasi</h4>
                        <p>Head of Sales</p>
                    </div>
                    <div className="team-member">
                        <img src="/images/IMG-20250412-WA0003.jpg" alt="Team Member 3" />
                        <h4>George Matasi</h4>
                        <p>Customer Support Lead</p>
                    </div>
                </div>
            </section>

            <footer className="about-footer">
                <p>&copy; 2025 LongTerm. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default About;
