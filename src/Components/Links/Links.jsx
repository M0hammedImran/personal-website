import React from 'react';
import './links.scss';

function Links({ Link, Name, BrandSvg }) {
  console.log(BrandSvg);
  return (
    <div id="links">
      <a href={Link} target="_blank" rel="noopener  noreferrer">
        <BrandSvg />
      </a>
      <p>{Name}</p>
    </div>
  );
}

export default Links;
