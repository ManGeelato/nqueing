import React from "react";
import { MapPin } from "lucide-react";
import "./InteractiveMap.css";

const InteractiveMap = () => {
  return (
    <div className="map-container">
      <h2>Find Us</h2>
      <div className="map-content">
        <div className="map-wrapper">
        
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458451.0386877374!2d27.83865655082141!3d-26.142993625371382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9509b7395d56df%3A0xfd8612d483488e0e!2sOrmonde%20View!5e0!3m2!1sen!2sza!4v1750252491357!5m2!1sen!2sza"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mitral Clinic Location"
          />
        </div>
        <div className="map-info">
          <div className="map-address">
            <MapPin className="map-icon" />
            <div>
              <h3>Our Location</h3>
              <p>4 Rysdal Place Ormonde Extension 1 Johannesburg South 2091</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
