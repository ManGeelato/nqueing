import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
    alert('Thank you for your inquiry. We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Send Us a Message</h2>
      <p className="form-intro">Have a question or need more information? Fill out the form below and one of our staff members will respond promptly.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+27"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject*</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Please select</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Appointment Information">Appointment Information</option>
              <option value="Insurance Question">Imports & Export</option>
              <option value="Billing Question">Vehicle Registration</option>
              <option value="Medical Records">Cross Border Permits</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="How can we help you?"
            rows="5"
          ></textarea>
        </div>
        
        <div className="form-privacy">
          <p>By submitting this form, you agree to our <a href="/privacy-policy">privacy policy</a>. We respect your privacy and will never share your information.</p>
        </div>
        
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;