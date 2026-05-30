import React from 'react';

const Skills = () => {
  const coreSkills = [
    { name: 'React', icon: '⚛️' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Git & GitHub', icon: '🔧' }
  ];

  return (
    <div className="section white" id="skills">
      <div className="sec-title">My <span>Skills</span></div>
      <div className="sec-line"></div>
      <div className="skills-row">
        {coreSkills.map((skill, index) => (
          <div className="skill" key={index}>
            <div>{skill.icon}</div>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;