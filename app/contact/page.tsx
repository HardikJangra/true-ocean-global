"use client";
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [email, setEmail] = useState('');
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <div className="container">
          <h1 className="contact-title">Contact</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        <div className="contact-grid">
          {/* Form Section */}
          <div className="form-section">
            <div className="form-container">
              <h2 className="form-title">Leave Us A Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={8}
                  required
                />
                
                <button type="submit" className="submit-button">
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-section">
            <img 
              src="/court.png" 
              alt="Supreme Court building"
              className="contact-image"
            />
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-item">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <p className="info-text">000-000-00-07</p>
            </div>
            
            <div className="info-item">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <p className="info-text">bhaskar@trueoceanglobal.com</p>
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
        .contact-section {
          width: 100%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .contact-header {
          padding: 60px 0 40px;
          border-bottom: 3px solid #e0e0e0;
        }

        .contact-title {
          font-size: 48px;
          font-weight: 300;
          margin: 0;
          color: #000;
        }

        /* Main Content */
        .contact-content {
          background: #fff;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 700px;
        }

        /* Form Section */
        .form-section {
          display: flex;
          align-items: center;
          padding: 60px 40px;
        }

        .form-container {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        .form-title {
          font-size: 36px;
          font-weight: 300;
          margin: 0 0 40px;
          color: #000;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-input {
          width: 100%;
          padding: 15px;
          border: 1px solid #d0d0d0;
          background: #f8f8f8;
          font-size: 15px;
          color: #333;
          font-family: inherit;
          transition: border-color 0.3s;
        }

        .form-input:focus {
          outline: none;
          border-color: #999;
        }

        .form-input::placeholder {
          color: #999;
        }

        .form-textarea {
          width: 100%;
          padding: 15px;
          border: 1px solid #d0d0d0;
          background: #f8f8f8;
          font-size: 15px;
          color: #333;
          font-family: inherit;
          resize: vertical;
          margin-bottom: 20px;
          transition: border-color 0.3s;
        }

        .form-textarea:focus {
          outline: none;
          border-color: #999;
        }

        .form-textarea::placeholder {
          color: #999;
        }

        .submit-button {
          width: 100%;
          padding: 18px;
          background: #8b0000;
          color: #fff;
          border: none;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .submit-button:hover {
          background: #a00000;
        }

        /* Image Section */
        .image-section {
          position: relative;
          overflow: hidden;
        }

        .contact-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Contact Info */
        .contact-info {
          background: #fff;
          padding: 80px 0 100px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          max-width: 800px;
          margin: 0 auto;
        }

        .info-item {
          text-align: center;
        }

        .icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          margin-bottom: 20px;
        }

        .icon {
          width: 32px;
          height: 32px;
          color: #c41e3a;
        }

        .info-text {
          font-size: 18px;
          color: #000;
          margin: 0;
          font-weight: 400;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .image-section {
            min-height: 400px;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .form-section {
            padding: 50px 20px;
          }
        }

        @media (max-width: 640px) {
          .contact-header {
            padding: 40px 0 30px;
          }

          .contact-title {
            font-size: 32px;
          }

          .form-title {
            font-size: 28px;
            margin-bottom: 30px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-info {
            padding: 60px 0 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;