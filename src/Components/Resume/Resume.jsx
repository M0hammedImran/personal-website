import React from 'react';

import './Resume.scss';

const Resume = ({ height }) => {
  return (
    <div
      id="Resume"
      style={
        height.component === 'Resume'
          ? { height: height.final }
          : { height: height.initial, display: 'none' }
      }
    >
      <h2>Mohammed Imran</h2>
    </div>
  );
};

export default Resume;
