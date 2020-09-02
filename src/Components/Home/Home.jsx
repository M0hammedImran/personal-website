import React from 'react';

// import SvgContainer from '../SvgContainer/SvgContainer';

import './Home.scss';

function Home({ height, setHeight }) {
  return (
    <div
      id="Home"
      style={
        height.component === 'Home'
          ? { height: height.final }
          : { height: height.initial, display: 'none' }
      }
    >
      {/* <SvgContainer /> */}
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
      <div className="resumeLink">
        <div>
          <a
            href="#Resume"
            onClick={() => setHeight({ ...height, component: 'Resume' })}
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
