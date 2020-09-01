import React, { useState } from 'react';

import './Projects.scss';

function Projects() {
  const [projects] = useState([
    {
      name: 'Covid-19 Tracker',
      sourceCode: 'https://github.com/M0hammedImran/covid19-india',
      workingSite: 'https://covid19-karnataka.netlify.app',
    },
    {
      name: 'Basic TODOs with React',
      sourceCode: 'https://github.com/M0hammedImran/react-todo-list',
      workingSite: 'https://mohammed-imran.vercel.app/',
    },
    {
      name: 'Basic TODOs with Angular',
      sourceCode: 'https://github.com/M0hammedImran/angualar-todo-firebase',
      workingSite: 'https://imrans-todo-angular.netlify.app',
    },
    {
      name: 'Library Management System',
      sourceCode: 'https://github.com/M0hammedImran/Final-Year-Project',
      workingSite: null,
    },
  ]);
  return (
    <div id="Projects">
      <div className="Projects__container">
        {projects.map((project) => {
          return (
            <div className="container__project">
              <h2>{project.name}</h2>
              <p className="sourceCode">
                Source Code:{' '}
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener  noreferrer"
                >
                  {project.sourceCode}
                </a>
              </p>
              {project.workingSite ? (
                <p className="site">
                  Working Site:{' '}
                  <a
                    href={project.workingSite}
                    target="_blank"
                    rel="noopener  noreferrer"
                  >
                    {project.workingSite}
                  </a>
                </p>
              ) : (
                ''
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
