import React, { useState } from 'react';
import "./Services.css";
import permitImage from '../../assets/images/Our-experts-explaining-how-much-is-cross-border-permit-service-in-South-Africa.jpg.webp';

const CrossBorderPermits = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Cross Border Permit 14 Day',
  });
  const sectionStyle = {
    marginBottom: '40px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
  };
  const headerStyle = {
    marginTop: '150px',
    textAlign: 'center'
  }
  const imgStyle = {
    width: '100%',
    maxHeight: '350px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '25px',
  };
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '0', // Remove padding here so title sits flush
    marginBottom: '15px',
    overflow: 'hidden', // So rounded corners stay neat
  };
  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    backgroundColor: '#007bff', // Blue background
    color: '#fff',              // White text
    padding: '10px 15px',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
  };
  const priceStyle = { marginBottom: '10px', color: '#007bff' };
  const listStyle = { marginLeft: '20px' };
  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };
    const modalOverlay = {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  };

  const modalContent = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={headerStyle}>Cross‑Border Permits</h2>
      <img src={permitImage} alt="Cross Border Permits" style={imgStyle} />

      <p>Transport Operators who want to conduct cross-border-road-transport-business in South Africa and the neighboring countries, 
         needs to get the required Cross-Border Permit. This is done through a representative at the Cross-Border Road Transport Agency
        (CBRTA). This is where we come in – we specialise in getting this done as quick as possible.
      </p>

      <div style={sectionStyle}>
        <div style={cardStyle}>
          <div style={titleStyle}>Cross-Border 14‑Day Permit</div>
          <div style={{ padding: '15px' }}>
            <div style={priceStyle}>R5 990 (once‑off)</div>
            <ul style={listStyle}>
              <li>Roadworthy Certificate</li>
              <li>Vehicle Registration Certificate</li>
              <li>Company Registration Documents</li>
              <li>Tax Clearance</li>
              <li>SARS Registered Representative updated at SARS</li>
              <li>Timeframe: ~1 week</li>
            </ul>
            <div style={{ textAlign: 'right' }}>
              <button  style={buttonStyle} onClick={() => setShowModal(true)}>Apply Now</button>
            </div>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={titleStyle}>Cross-Border 12‑Month Permit</div>
           <div style={{ padding: '15px' }}>
            <div style={priceStyle}>R9 900 (once‑off)</div>
              <ul style={listStyle}>
                <li>Roadworthy Certificate</li>
                <li>Vehicle Registration Certificate</li>
                <li>Company Registration Documents</li>
                <li>SARS Registered Representative updated at SARS</li>
                <li>Tax Clearance</li>
                <li>Timeframe: ~1 week</li>
              </ul>
              <div style={{ textAlign: 'right' }}>
                <button  style={buttonStyle} onClick={() => setShowModal(true)}>Apply Now</button>
              </div>
            </div>
        </div>

        <div style={cardStyle}>
          <div style={titleStyle}>Cross-Border Taxi Passenger Permit (12‑Month)</div>
          <div style={{ padding: '15px' }}>
            <div style={priceStyle}>R9 990</div>
            <ul style={listStyle}>
              <li>Roadworthy Certificate</li>
              <li>Valid Vehicle License</li>
              <li>Vehicle Registration Certificate</li>
              <li>Company Registration Documents</li>
              <li>Tax Clearance</li>
              <li>SARS Registered Representative updated at SARS</li>
              <li>Timeframe: ~21 working days</li>
            </ul>
              <div style={{ textAlign: 'right' }}>
                <button  style={buttonStyle} onClick={() => setShowModal(true)}>Apply Now</button>
              </div>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={titleStyle}>Cross-Border Bus Passenger Permit (12‑Month)</div>
           <div style={{ padding: '15px' }}>
            <div style={priceStyle}>R12 900</div>
              <ul style={listStyle}>
                <li>Roadworthy Certificate</li>
                <li>Valid Vehicle License</li>
                <li>Vehicle Registration Certificate</li>
                <li>Company Registration Documents</li>
                <li>Tax Clearance</li>
                <li>SARS Registered Representative updated at SARS</li>
                <li>Timeframe: ~21 working days</li>
              </ul>
                <div style={{ textAlign: 'right' }}>
                  <button  style={buttonStyle} onClick={() => setShowModal(true)}>Apply Now</button>
                </div>
           </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <p><strong>Note:</strong> Class 2 (above 20 000 kg) permits require a separate quote.</p>
      </div>

      <div style={sectionStyle}>
        <h3>Why Our Service?</h3>
        <ul style={listStyle}>
          <li>Processing through the CBRTA under the Cross‑Border Road Transport Act</li>
          <li>Standard processing: 1–3 weeks depending on permit type</li>
          <li>Money‑back guarantee if we can’t deliver</li>
          <li>Get Compliant from Anywhere, Easy and Fast!</li>
        </ul>
            <div style={{ textAlign: 'right' }}>
              <a href="tel:+27613509663" style={{ ...buttonStyle, textDecoration: 'none', display: 'inline-block' }}>
                Speak to a Specialist
              </a>
            </div>
      </div>



      <div style={sectionStyle}>
        <h3>How to Apply</h3>
        <ol style={listStyle}>
          <li>Select the permit type</li>
          <li>Upload required documents</li>
          <li>We handle submission to CBRTA</li>
          <li>Receive updates via email/SMS</li>
          <li>Receive permit & documentation</li>
        </ol>
      </div>

      <footer style={{ marginTop: '30px', textAlign: 'center' }}>
        <p>Need help? Call us toll‑free or sign up for a free consultation now.</p>
        <p><strong>Toll‑Free:</strong> 0800 007 269</p>
      </footer>
      {showModal && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h2>Apply for Service</h2>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={inputStyle}
            />
            <input
              type="tel"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={inputStyle}
            />
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              style={inputStyle}
            >
              <option>Cross Border Permit 14 Day</option>
              <option>Cross Border Permit 12 Month</option>
              <option>Cross Border Permit Mini Bus</option>
              <option>Cross Border Permit Bus</option>
              <option>Free Consultation</option>
            </select>

            <div style={{ marginTop: '15px', textAlign: 'right' }}>
              <button
                onClick={() => {
                  const mailtoLink = `mailto:nqueueingservices@gmail.com?subject=Service Application - ${formData.service}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DPhone: ${formData.phone}%0DService: ${formData.service}`;
                  setShowModal(false);
                  window.location.href = mailtoLink;
                }}
                style={buttonStyle}
              >
                Send
              </button>
              <button onClick={() => setShowModal(false)} 
              style={{ marginLeft: '10px', 
                backgroundColor:'red', 
                padding: '8px 16px',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer', }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrossBorderPermits;
