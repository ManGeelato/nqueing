import React from "react";
import ContactInfo from "../../components/contacts/ContactInfo";
import LocationMap from "../../components/contacts/InteractiveMap";
import ContactForm from "../../components/contacts/ContactForm";
import "./Contact.css";

import OperatingHours from "../../components/contacts/OperatingHours";

function Contact() {
  return (
    <div id="contactBox">
      <div id="contactBoxWrap">
        <ContactInfo />
        <LocationMap />
        <ContactForm />
        <OperatingHours />
 
      </div>
    </div>
  );
}

export default Contact;
