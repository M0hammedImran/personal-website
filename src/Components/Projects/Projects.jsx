import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import covid19Image from '../../assets/images/Covid-19-Tracker.png';
import todoReact from '../../assets/images/todo-react.png';
import todoAngular from '../../assets/images/todoAngular.png';

import './Projects.scss';

function Projects() {
  const [projects] = useState([
    {
      name: 'Covid-19 Tracker',
      description: 'Covid-19 Tracker for Karnataka, India',
      sourceCode: 'https://github.com/M0hammedImran/covid19-india',
      workingSite: 'https://covid19-karnataka.netlify.app',
      imageUrl: covid19Image,
    },
    {
      name: 'Basic TODOs with React',
      description: 'Todo app using react and state. Data is not persistent.',
      sourceCode: 'https://github.com/M0hammedImran/react-todo-list',
      workingSite: 'https://mohammed-imran.vercel.app/',
      imageUrl: todoReact,
    },
    {
      name: 'Basic TODOs with Angular',
      description: 'Todo app using Angular and firebase',
      sourceCode: 'https://github.com/M0hammedImran/angualar-todo-firebase',
      workingSite: 'https://imrans-todo-angular.netlify.app',
      imageUrl: todoAngular,
    },
    {
      name: 'Library Management System',
      description:
        'Library Management System with Authentication, Mailing system and MySql Database.',
      sourceCode: 'https://github.com/M0hammedImran/Final-Year-Project',
      workingSite: null,
    },
  ]);
  return (
    <div id="Projects" className="">
      <div className="card-columns my-3 container-fluid">
        {projects.map((project, index) => {
          return React.Children.toArray(<Cards {...project} />);
        })}
      </div>
    </div>
  );
}

export default Projects;
