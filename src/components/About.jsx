import React from 'react';

const About = () => {
  return (
    <div className="section alt" id="about">
      <div className="sec-title">About <span>Me</span></div>
      <div className="sec-line"></div>
      <div className="about-grid">
        <div className="about-text">
          <p>I'm Adeeba Ashraf, a passionate Frontend Developer who loves creating clean, modern, and user-friendly web experiences.</p>
          <p>I enjoy turning creative ideas into reality through clean and efficient code.</p>
          <div className="about-info">
            <div className="info-item"><span>Name</span><p>Adeeba Ashraf</p></div>
            <div className="info-item"><span>Field</span><p>Frontend Dev</p></div>
            <div className="info-item"><span>Location</span><p>Pakistan</p></div>
            <div className="info-item"><span>Status</span><p>Available ✅</p></div>
          </div>
        </div>
        <div>
          <div className="about-card"><div className="icon">🎨</div> wholesaler <h3>Clean Design</h3><p>Pixel-perfect, beautiful UI</p></div>
          <div className="about-card"><div className="icon">⚡</div><h3>Fast & Responsive</h3><p>Works on all devices</p></div>
        </div>
      </div>
    </div>
  );
};

export default About;