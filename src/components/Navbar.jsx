import React from 'react';

const Navbar = () => {
  return (
    <div className="nav">
      {/* Brand Logo Group with Monogram and Stylish Text */}
      <div className="brand-group" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Full Circle Monogram 'A' Logo */}
        <div className="logo-circle" style={{
          background: '#8b5cf6',
          color: '#ffffff',
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.1rem',
          fontWeight: '800',
          boxShadow: '0 4px 10px rgba(139, 92, 246, 0.3)',
          letterSpacing: 'normal'
        }}>
          A
        </div>
        
        {/* Stylish Name Branding */}
        <div className="logo" style={{ 
          fontSize: '1.2rem', 
          fontWeight: '800', 
          letterSpacing: '-0.5px' 
        }}>
          Adeeba <span style={{ color: '#8b5cf6', fontWeight: '400', fontStyle: 'italic' }}>Ashraf</span>
        </div>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="nav-btn">Hire Me</a>
    </div>
  );
};

export default Navbar;