import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Resume from '../Resume/Resume';

import './Home.scss';

function Home(props) {
  console.log(props);
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
      {/* <div className="resumeLink">
        <div>
          <a href="/Resume">My Resume</a>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
