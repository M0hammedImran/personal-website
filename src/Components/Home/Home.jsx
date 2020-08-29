import React from 'react';

import SvgContainer from '../SvgContainer/SvgContainer';

import './Home.scss';

function Home() {
  return (
    <div id="Home">
      <SvgContainer />
      <div className="description">
        <h1>
          Hi, I'm <span>Imran</span> {`;)`}
        </h1>
        <p>
          I'm a FullStack Web developer and designer based in Bangalore, India.
        </p>
        <p>I make web applications, usually with React and NodeJS.</p>
      </div>
      <div className="resumeLink">
        <div>
          <a href="#Resume">My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
