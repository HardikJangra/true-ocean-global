"use client";
import { useState } from "react";


import React from 'react';

const AboutSection: React.FC = () => {
  const [email, setEmail] = useState("");

const handleSubmit = () => {
  if (!email) return;
  alert(`Thank you! We'll contact you at ${email}`);
  setEmail("");
};

  return (
    <section className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <h1 className="about-title">About Us</h1>
        </div>
      </div>

      {/* History Section */}
      <div className="history-section">
        <div className="container">
          <div className="history-grid">
            <div className="history-content">
              <p className="section-label">History</p>
              <h2 className="history-title">
                TrueOcean is an export focused company built on structured processes,
                reliability, and long term thinking.
              </h2>
              
              <div className="history-text">
                <p>
                  TrueOcean was founded with a clear objective: to build a reliable,
                  process-driven export organisation that values consistency over
                  shortcuts. Starting with a focused portfolio in rice and spices, the
                  company is being built step by step prioritising structured sourcing,
                  compliance, and long-term partnerships.
                </p>
                
                <p>
                  From the beginning, our approach has centered on clarity in
                  operations and discipline in execution. As global trade continues to
                  evolve, TrueOcean is designed to adapt responsibly, with systems
                  that support sustainable growth across products and markets.
                </p>
                
                <p>
                  Today, we are focused on laying a strong operational foundation one
                  that supports trust, repeatability, and scale in international trade.
                </p>
              </div>
            </div>
            
            <div className="history-image">
              <img 
                src="/legality.png" 
                alt="Professional business setting with Lady Justice statue"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Pillars Section */}
      <div className="pillars-section">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar">
              <h3 className="pillar-title">Rice & Spices</h3>
              <p className="pillar-subtitle">Core Product Categories</p>
            </div>
            
            <div className="pillar">
              <h3 className="pillar-title">Global</h3>
              <p className="pillar-subtitle">Markets Served</p>
            </div>
            
            <div className="pillar">
              <h3 className="pillar-title">Quality Compliance Reliability</h3>
              <p className="pillar-subtitle">Operational Focus</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="vision-section">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-image">
              <img 
                src="/vision.png" 
                alt="Business meeting in modern office"
              />
            </div>
            
            <div className="vision-content">
              <p className="section-label">Vision</p>
              <h2 className="vision-title">
                Building dependable trade systems for a connected global economy
              </h2>
              
              <div className="vision-text">
                <p>
                  Our vision is to create an export organisation that contributes to
                  global trade through reliability, transparency, and responsible
                  growth. We believe long-term success comes from disciplined
                  processes, ethical sourcing, and continuous improvement.
                </p>
                
                <p>
                  As we expand across markets and product categories, our focus
                  remains on building systems that are efficient, compliant, and
                  sustainable-supporting lasting partnerships and meaningful global
                  connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form Section */}
      <section id="contact" className="bg-red-900 px-20 py-20">
        <div className="text-white text-sm font-semibold mb-5">Have Any Question?</div>
        <h2 className="text-5xl font-normal text-white mb-12">Let Us Reach You</h2>
        <div className="flex gap-0 max-w-2xl">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 text-lg border-2 border-white bg-white text-gray-900"
          />
          <button
            onClick={handleSubmit}
            className="px-12 py-4 bg-red-900 text-white border-2 border-white hover:bg-red-800 transition text-lg font-medium"
          >
            Send
          </button>
        </div>
      </section>

      <style jsx>{`
        .about-section {
          width: 100%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        

        .about-title {
          font-size: 48px;
          font-weight: 300;
          margin: 0;
          color: #000;
        }

        /* History Section */
        .history-section {
          padding: 80px 0;
          background: #fff;
        }

        .history-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .section-label {
          color: #c41e3a;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .history-title {
          font-size: 32px;
          font-weight: 300;
          line-height: 1.4;
          margin: 0 0 30px;
          color: #000;
        }

        .history-text p {
          font-size: 15px;
          line-height: 1.7;
          color: #333;
          margin-bottom: 20px;
        }

        .history-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Pillars Section */
        .pillars-section {
          padding: 60px 0;
          background: #f8f8f8;
          border-top: 1px solid #e0e0e0;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          text-align: center;
        }

        .pillar {
          padding: 20px;
        }

        .pillar-title {
          font-size: 28px;
          font-weight: 300;
          color: #c41e3a;
          margin: 0 0 10px;
          line-height: 1.3;
        }

        .pillar-subtitle {
          font-size: 16px;
          color: #000;
          margin: 0;
          font-weight: 400;
        }

        /* Vision Section */
        .vision-section {
          padding: 80px 0;
          background: #fff;
        }

        .vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .vision-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        .vision-title {
          font-size: 32px;
          font-weight: 300;
          line-height: 1.4;
          margin: 0 0 30px;
          color: #000;
        }

        .vision-text p {
          font-size: 15px;
          line-height: 1.7;
          color: #333;
          margin-bottom: 20px;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .history-grid,
          .vision-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .vision-grid .vision-image {
            order: -1;
          }

          .pillars-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .about-title {
            font-size: 36px;
          }

          .history-title,
          .vision-title {
            font-size: 26px;
          }
        }

        @media (max-width: 640px) {
          .about-hero {
            padding: 40px 0 30px;
          }

          .about-title {
            font-size: 28px;
          }

          .history-section,
          .vision-section {
            padding: 50px 0;
          }

          .history-title,
          .vision-title {
            font-size: 22px;
          }

          .pillar-title {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
