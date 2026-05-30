import React from 'react';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div>
        <div className="hero-tag">👋 Hello World!</div>
        <div className="hero-name">I'm <span>Adeeba</span><br />Ashraf</div>
        <div className="hero-role">⚡ Frontend Developer</div>
        <div className="hero-desc">I build beautiful, responsive websites & web apps using React, HTML, CSS and modern tools.</div>
        <div className="btns">
          <a href="#projects" className="b1">View Projects</a>
          <a href="#contact" className="b2">Contact Me</a>
        </div>
        <div className="stats">
          <div className="stat"><h4>3+</h4><p>Projects</p></div>
          <div className="stat"><h4>6+</h4><p>Skills</p></div>
          <div className="stat"><h4>100%</h4><p>Passion</p></div>
        </div>
      </div>
      <div className="hero-right">
        <div className="available">🟢 Available for work</div>
        <div className="avatar">👩‍💻</div>
        <div className="hero-card"><div>Specialization</div><div>React & CSS</div></div>
      </div>
    </div>
  );
};

export default Hero;