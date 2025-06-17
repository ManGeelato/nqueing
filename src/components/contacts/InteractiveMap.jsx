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
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d114610.23755044036!2d28.08918690433702!3d-26.145562296401078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3%20linkfied%20road!5e0!3m2!1sen!2sza!4v1748871577584!5m2!1sen!2sza"
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
              <p>123 Test Street</p>
              <p>Test</p>
            </div>
          </div>
          <div className="map-directions">
            <h3>Getting Here</h3>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
