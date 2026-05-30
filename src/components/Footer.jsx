import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">Adeeba <span>Ashraf</span></div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social">💼</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social">🐙</a>
          <a href="mailto:adeebaashraf.tech@gmail.com" className="social" title="Email Me">📧</a>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Adeeba Ashraf. All rights reserved. Made with ❤️ in Pakistan</div>
    </div>
  );
};

export default Footer;