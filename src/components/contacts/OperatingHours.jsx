import React from 'react';
import { Clock } from 'lucide-react';
import './OperatingHours.css';

const OperatingHours = () => {
  const hours = [
    { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday & Public holidays', hours: 'Closed' }
  ];

  // Get current day of week to highlight
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="hours-container">
      <div className="hours-header">
        <Clock className="hours-icon" />
        <h2>Hours of Operation</h2>
      </div>
      
      <div className="hours-table">
        {hours.map((item) => (
          <div 
            key={item.day} 
            className={`hours-row ${item.day === today ? 'today' : ''}`}
          >
            <div className="day">{item.day}</div>
            <div className="time">{item.hours}</div>
          </div>
        ))}
      </div>
      
      <div className="hours-notes">
        <p>
          <strong>Note:</strong> Last appointment is scheduled 30 minutes before closing time.
        </p>
        <p>
          <strong>Holiday Hours:</strong> Please check our announcements for special holiday hours.
        </p>
      </div>
    </div>
  );
};

export default OperatingHours;