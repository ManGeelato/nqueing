import React from 'react';
import { Phone, Mail, Printer } from 'lucide-react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h2>Contact Us</h2>
      <div className="contact-info-grid">
        <div className="contact-info-item">
          <Phone className="contact-icon" />
          <div>
            <h3>Phone</h3>
            <p>Main Line: +27 61 350 96630</p>
            <p>Appointment:+27 61 350 96630</p>
          </div>
        </div>
        
        <div className="contact-info-item">
          <Mail className="contact-icon" />
          <div>
            <h3>Email</h3>
            <p><b>General Inquiries</b>:  nqueueingservices.co.za</p>
            <p><b>Appointments</b>:  nqueueingservices.co.za</p>
            <p><b>Bookings</b>:  nqueueingservices.co.za</p>
          </div>
        </div>
        
        {/* <div className="contact-info-item">
          <Printer className="contact-icon" />
          <div>
            <h3>Fax</h3>
            <p>Medical Records: 26377 484 3841</p>
            <p>Administrative: 26377 484 3841</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;