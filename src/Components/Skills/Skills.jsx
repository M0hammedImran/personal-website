import React from 'react';

import './Skills.scss';

function Skills({ height }) {
  return (
    <div
      id="Skills"
      style={
        height.component === 'Skills'
          ? { height: height.final }
          : { height: height.initial, display: 'none' }
      }
    >
      <h1>Skills Section. Coming Soon.</h1>
    </div>
  );
}

export default Skills;
