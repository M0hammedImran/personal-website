import React from 'react';
import './links.css';

function Links({ Link, Name }) {
  return (
    <div>
      <a href={Link} target="_blank" rel="noopener  noreferrer">
        {Name}
      </a>
    </div>
  );
}

export default Links;
