import React, { useState } from 'react';
import vehicleImage from '../../assets/images/Attachment1_20345.jpeg'
import { useNavigate } from "react-router-dom";

const VehicleRegistration = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '' });
  const navigate = useNavigate();

  const services = [
    "New & Pre‑Owned Vehicle Registration",
    "Change of Ownership",
    "License Disc Renewal",
    "Traffic Fine Reduction",
    "Change of Address",
    "Number Plates — Standard/Personalised",
    "BRNC Certificate",
    "Traffic Register Number",
    "De‑registration / Scrapping",
    "Duplicate Natis (RC1)",
    "Commissioner of Oaths / Affidavit",
    "Trade Plate Applications",
    "Driver's License Renewal",
    "Dealer Stock Application"
  ];

  const openModal = (service) => {
    setFormData({ ...formData, service });
    setModalOpen(true);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSend = () => {
    setModalOpen(false);
    const mailto = `mailto:nqueueingservices@gmail.com?subject=Vehicle Service - ${encodeURIComponent(formData.service)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}`)}`;
    window.location.href = mailto;
  };

  const sectionStyle = {
    marginBottom: '40px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
  };
  const headerStyle = {
    marginTop: '150px',
    textAlign: 'center'
  };
  const subHeaderStyle = { fontSize: '1.4rem', margin: '20px 0 10px' };
  const listStyle = { marginLeft: '20px' };
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  };
  const thTdStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
  };
  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHover = { backgroundColor: '#0056b3' };

  const modalOverlay = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999
  };

  const modalStyle = {
    background: '#fff', padding: '30px', borderRadius: '8px', width: '400px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
  };

  const inputStyle = {
    width: '100%', padding: '10px', marginBottom: '12px',
    border: '1px solid #ccc', borderRadius: '4px'
  };
  const imgStyle = {
    width: '100%',
    maxHeight: '350px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '25px',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={headerStyle}>Vehicle Registration Services</h2>
      <img src={vehicleImage} alt="Vehicle Registration" style={imgStyle} />

      <p>
        We assist with both <strong>new</strong> and <strong>pre‑owned</strong> vehicle registrations
        at your district licensing department—no queues, no stress.
      </p>

      <div style={sectionStyle}>
        <h3 style={subHeaderStyle}>📄 Documents Needed</h3>
        <div>
          <strong>New Vehicle:</strong>
          <ul style={listStyle}>
            <li>Manufacturer’s certificate</li>
            <li>ID copy + proof of address</li>
            <li>Roadworthy (heavy/RTQS vehicles)</li>
            <li>Completed RLV form + signed affidavit</li>
          </ul>
          <strong>Pre‑owned Vehicle:</strong>
          <ul style={listStyle}>
            <li>RC1 (green Natis), previous owner’s ID</li>
            <li>Roadworthy certificate (if required)</li>
            <li>Change of ownership form (NCO)</li>
            <li>RLV form + affidavit</li>
          </ul>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3 style={subHeaderStyle}>🗓️ When to Register</h3>
        <ul style={listStyle}>
          <li>If you've bought a vehicle (new or used)</li>
          <li>Within <strong>21 days</strong> after change of ownership—otherwise fines and arrears apply.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={subHeaderStyle}>💲 Fee Breakdown</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Fee Type</th>
              <th style={thTdStyle}>Amount (approx.)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={thTdStyle}>Johannesburg district administration</td><td style={thTdStyle}>R200.00</td></tr>
            <tr><td style={thTdStyle}>Licensing Department registration</td><td style={thTdStyle}>R216.00</td></tr>
            <tr><td style={thTdStyle}>Licensing Department admin fee</td><td style={thTdStyle}>R72.00</td></tr>
            <tr><td style={thTdStyle}>Annual license (pro‑rata by weight/expiry)</td><td style={thTdStyle}>Varies</td></tr>
            <tr><td style={thTdStyle}>Fines / arrears (if overdue)</td><td style={thTdStyle}>Calculated on expiry date</td></tr>
            <tr><td style={thTdStyle}>Full-service turnaround</td><td style={thTdStyle}>~4 working days</td></tr>
          </tbody>
        </table>
      </div>

      <div style={sectionStyle}>
        <h3 style={subHeaderStyle}>🛠️ Full List of Services</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Service</th>
              <th style={thTdStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, i) => (
              <tr key={i}>
                <td style={thTdStyle}>{service}</td>
                <td style={thTdStyle}>
                  <button
                    style={buttonStyle}
                    onClick={() => openModal(service)}
                    onMouseOver={(e) => e.target.style.background = buttonHover.backgroundColor}
                    onMouseOut={(e) => e.target.style.background = buttonStyle.backgroundColor}
                  >Apply Now</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={sectionStyle}>
        <h3 style={subHeaderStyle}>📍 Locations We Serve</h3>
        <p>
          We operate in multiple districts including Alberton, Benoni, Brakpan, Centurion, Edenvale,
          Germiston, Kempton Park, Krugersdorp, Pretoria, Roodepoort, Westonaria, and more.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={subHeaderStyle}>🚀 Ready to Register?</h3>
        <div style={{ textAlign: 'right' }}>
          <button style={buttonStyle} onClick={() => navigate("/contact")}>Get Started</button>
        </div>
      </div>

      {modalOpen && (
        <div style={modalOverlay}>
          <div style={modalStyle}>
            <h3>Apply for: {formData.service}</h3>
            <input name="name" value={formData.name} placeholder="Name" onChange={handleChange} style={inputStyle} />
            <input name="email" value={formData.email} placeholder="Email" onChange={handleChange} style={inputStyle} />
            <input name="phone" value={formData.phone} placeholder="Contact Number" onChange={handleChange} style={inputStyle} />
            <div style={{ textAlign: 'right' }}>
              <button
                style={buttonStyle}
                onClick={handleSend}
                onMouseOver={(e) => e.target.style.background = buttonHover.backgroundColor}
                onMouseOut={(e) => e.target.style.background = buttonStyle.backgroundColor}
              >Send</button>
              <button
                style={{ ...buttonStyle, backgroundColor: '#aaa', marginLeft: '12px'}}
                onClick={() => setModalOpen(false)}
                onMouseOver={(e) => e.target.style.background = '#888'}
                onMouseOut={(e) => e.target.style.background = '#aaa'}
              >Cancel</button>
            </div>
          </div>
        </div>
      )}

      <footer style={{ marginTop: '30px', textAlign: 'center' }}>
        <p>
          Have questions? Contact any of our branches or visit our website.
        </p>
      </footer>
    </div>
  );
};

export default VehicleRegistration;
