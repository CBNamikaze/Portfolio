import React from "react";

function ContactCard(props) {
  return (
    <div className="home-contact">
      <div className="contact-container">CONTACT ME</div>
      <div className="circle" style={{ borderColor: props.circle }} />
    </div>
  );
}

export default ContactCard;
