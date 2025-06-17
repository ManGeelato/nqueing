import React, { useState } from 'react';
import importImage from '../../assets/images/trade-2.jpeg';

const ImportExportServices = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    service: 'Cross-Border Permit 14-Day',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    console.log('Sending to email:', formData);
    setModalOpen(false); // Close modal
    // Add email integration here if needed
  };

  const sectionStyle = {
    marginBottom: '40px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  };

  const thTdStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
    verticalAlign: 'middle',
  };

  const actionCellStyle = {
    ...thTdStyle,
    width: '120px',
    textAlign: 'center',
  };

  const priceCellStyle = {
    ...thTdStyle,
    whiteSpace: 'nowrap',
  };

  const buttonStyle = {
    padding: '6px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3',
  };

  const headerStyle = {
    marginTop: '150px',
    textAlign: 'center'
  };

  const imgStyle = {
    width: '100%',
    maxHeight: '350px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '25px',
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

  const section = (title, items) => (
    <div style={sectionStyle}>
      <h3 style={{ marginBottom: '10px', color: '#333' }}>{title}</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Price</th>
            <th style={thTdStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ name, price }, idx) => (
            <tr key={idx}>
              <td style={thTdStyle}>{name}</td>
              <td style={priceCellStyle}>{price}</td>
              <td style={actionCellStyle}>
                <button
                  style={buttonStyle}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, service: name }));
                    setModalOpen(true);
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
                >
                  Apply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={headerStyle}>Import and Export Services</h2>
      <img
        src={importImage}
        alt="Import Export Licenses"
        style={imgStyle}
      />

      {section('Import and Export Services', [
        { name: 'Import and export registration', price: 'R2480,00', action: 'add' },
        { name: 'Amend existing import export registration or add trade agreement', price: 'R1950,00', action: 'add' },
        { name: 'Authorised economic operator (AEO) enrollment', price: 'R4600,00', action: 'add' },
        { name: 'Permit for regulated goods', price: '', action: 'speak' },
        { name: 'Goods intended for human or animal consumption', price: '', action: 'speak' },
        { name: 'Advance Payment Notification (APN) set up on e-Filing', price: 'R2500,00', action: 'add' },
        { name: 'Advance Payment Notification (APN) Code Generation', price: '', action: 'speak' },
      ])}

      {section('Certificates of Origin', [
        { name: 'EUR.1 certificate of origin', price: 'R1450,00 – R4900,00', action: 'select' },
        { name: 'SADC certificate of origin', price: 'R1450,00 – R4900,00', action: 'select' },
        { name: 'MERCOSUR certificate of origin', price: 'R1450,00 – R4900,00', action: 'select' },
        { name: 'Form A certificate of origin', price: 'R480,00 – R4900,00', action: 'select' },
        { name: 'Chamber of commerce', price: 'R1450,00', action: 'add' },
        { name: 'AfCFTA certificate of origin', price: 'R1450,00 – R4900,00', action: 'select' },
      ])}

      {section('Business Services', [
        { name: 'Company registration', price: 'R980,00 – R1280,00', action: 'select' },
        { name: 'VAT registration', price: 'R2980,00', action: 'add' },
        { name: 'SARS eFiling set up', price: 'R2550,00', action: 'add' },
        { name: 'SARS representative registration', price: 'R950,00', action: 'add' },
        { name: 'Personal income tax registration', price: 'R650,00', action: 'add' },
        { name: 'PAYE, UIF and SDL registration', price: 'R1200,00', action: 'add' },
        { name: 'BEE affidavit (micro-enterprises only)', price: 'R350,00', action: 'add' },
        { name: 'Company name reservation', price: 'R280,00', action: 'add' },
        { name: 'CIPC annual returns', price: '', action: 'speak' },
        { name: 'Company amendments', price: 'R450,00 – R850,00', action: 'select' },
        { name: 'Business bank account', price: 'R280,00', action: 'add' },
        { name: 'Digital Copy of CIPC Registration Documents (Company Disclosure)', price: 'R250,00', action: 'add' },
        { name: 'Share certificates (per shareholder)', price: 'R350,00', action: 'add' },
        { name: 'Foreign exchange once-off registration', price: '', action: 'submit' },
        { name: 'Company Beneficial Ownership Filing', price: 'R1250,00', action: 'add' },
      ])}

      {section('Bonded Transport, Clearing & Freight Industry', [
        { name: 'Remover of goods in bond, transporter, consignor bond and renewals', price: 'R3800,00 – R5600,00', action: 'select' },
        { name: 'Clearing agent (customs broker) registrations and renewals', price: 'R3800,00 – R4600,00', action: 'select' },
        { name: 'Deferment account application', price: 'R3600,00 – R5950,00', action: 'select' },
        { name: 'Carrier Registration', price: 'R4600,00', action: 'select' },
        { name: 'EDI Registration', price: 'R4600,00', action: 'add' },
        { name: 'Cross border permit', price: 'R3570,00 – R10190,00', action: 'select' },
      ])}

      {section('Foreigner Services', [
        { name: 'Company annual maintenance package', price: 'R4350,00', action: 'add' },
        { name: 'Foreign Road Haulier and linkage to SA agent', price: 'R5950,00', action: 'add' },
        { name: 'Import and export registration for foreigners', price: 'R2500,00 – R4500,00', action: 'select' },
        { name: 'Foreign Carrier Registration', price: 'R5950,00', action: 'add' },
        { name: 'Customs registered agent registration', price: 'R2500,00', action: 'select' },
        { name: 'South African subsidiary company', price: 'R2030,00', action: 'add' },
        { name: 'South African branch registration', price: 'R2230,00', action: 'add' },
        { name: 'Company registration with foreign directors', price: 'R980,00 – R1280,00', action: 'select' },
      ])}

      {section('Virtual Office Services', [
        { name: 'Virtual office rental (ex VAT)', price: '', action: 'speak' },
        { name: 'Post forwarding service (ex VAT)', price: 'R250,00 – R2500,00', action: 'select' },
        { name: 'Customs registered agent services', price: '', action: 'speak' },
      ])}

      {section('7) Freight Services', [
        { name: 'Freight Services', price: 'Varies', action: 'speak' },
      ])}
       {modalOpen && (
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
              <option>Import export services</option>
              <option>Certificates of origin</option>
              <option>Business Services</option>
              <option>Bonded transport, clearing, and freight industry</option>
              <option>Bonded warehouses, excise, and rebates</option>
              <option>Foreigner Services</option>
              <option>Virtual office Services</option>
              <option>Freight Services</option>
            </select>

            <div style={{ marginTop: '15px', textAlign: 'right' }}>
              <button
                onClick={() => {
                  const mailtoLink = `mailto:nqueueingservices@gmail.com?subject=Service Application - ${formData.service}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DPhone: ${formData.phone}%0DService: ${formData.service}`;
                  setModalOpen(false);
                  window.location.href = mailtoLink;
                }}
                style={buttonStyle}
              >
                Send
              </button>
              <button onClick={() => setModalOpen(false)} 
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

export default ImportExportServices;
