import React from 'react';

const Contact = () => {
  return (
    <div className="section white" id="contact">
      <div className="sec-title">Contact <span>Me</span></div>
      <div className="sec-line"></div>
      <div className="contact-row">
        <div className="contact-left">
          <p>Have a project in mind? I'd love to hear from you. Let's build something amazing together!</p>
          <div className="ci"><div className="ci-icon">📧</div><p>adeebaashraf.tech@gmail.com</p></div>
          <div className="ci"><div className="ci-icon">📍</div><p>Pakistan</p></div>
          <div className="ci"><div className="ci-icon">💼</div><p>Open to Client Work</p></div>
        </div>
        <div>
          <input type="text" className="form-field" placeholder="Your Name" />
          <input type="email" className="form-field" placeholder="Your Email" />
          <textarea className="form-field form-area" placeholder="Your Message..."></textarea>
          <button className="sub-btn">Send Message ✉️</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;