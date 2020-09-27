import React from 'react';

import './Home.scss';

function Home(props) {
  return (
    <div id="Home">
      <div className="description">
        <h1>
          Hi, I'm <span>Imran</span> {`;)`}
        </h1>
        <p>
          I'm a FullStack Web developer and designer based in{' '}
          <span>Bangalore, India. </span>
        </p>
        <p>
          I make web applications, usually with <span>React</span> and{' '}
          <span>NodeJS.</span>
        </p>
      </div>
      {props.children}
    </div>
  );
}

export default Home;
