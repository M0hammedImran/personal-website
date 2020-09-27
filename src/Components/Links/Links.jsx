import React from 'react';
import './links.scss';

function Links({ Link, Name, BrandSvg }) {
  return (
    <a href={Link} id="target" target="_blank" rel="noopener  noreferrer">
      <div id="links">
        <BrandSvg />
        <p>{Name}</p>
      </div>
    </a>
  );
}

export default Links;
