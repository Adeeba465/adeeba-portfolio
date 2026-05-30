import React from 'react';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Digital Tally Counter',
      desc: 'A functional counter-app project featuring increment, decrement, and reset logic layout.',
      className: 'proj1',
      icon: '🔢',
      tags: ['React', 'CSS'],
      liveLink: 'https://react-counter-app-gamma-six.vercel.app/', 
      gitLink: 'https://github.com'
    },
    {
      id: 2,
      title: 'To-Do List App',
      desc: 'Task manager web application with structural layout sorting ready for integration.',
      className: 'proj2',
      icon: '📝',
      tags: ['React', 'CSS'],
      liveLink: '#', // Add when deployed, or leave as placeholder
      gitLink: 'https://github.com'
    },
    {
      id: 3,
      title: 'Nexcent Clone',
      desc: 'Fully responsive business landing page user interface clone project and its deployment management.',
      className: 'proj3',
      icon: '🏢',
      tags: ['HTML5', 'CSS3'],
      liveLink: 'https://nexcent-clone-eta.vercel.app/', 
      gitLink: 'https://github.com'
    }
  ];

  return (
    <div className="section alt" id="projects">
      <div className="sec-title">My <span>Projects</span></div>
      <div className="sec-line"></div>
      <div className="proj-row">
        {projectList.map((project) => (
          <div className={`proj ${project.className}`} key={project.id}>
            <div className="proj-img">{project.icon}</div>
            <div className="proj-body">
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span className={`tag${project.id}`} key={i}>{tag}</span>
                ))}
              </div>
              <div className="proj-links">
                <a href={project.liveLink} target="_blank" rel="noreferrer">🔗 Live Demo</a>
                <a href={project.gitLink} target="_blank" rel="noreferrer">⌨️ GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;