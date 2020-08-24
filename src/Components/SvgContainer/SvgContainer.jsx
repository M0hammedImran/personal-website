import React, { useState, useEffect } from 'react';

import './SvgContainer.css';

function SvgContainer() {
  const [imranValues, setImranValues] = useState({ x: 350, y: 140 });
  const [charcoalValues, setCharcoalValues] = useState({ x: 230, y: -40 });
  useEffect(() => {
    setImranValues({ x: 250, y: 90 });
    setCharcoalValues({ x: 180, y: 40 });
  }, []);
  return (
    <div className="svg-container">
      <svg
        className="sga-homepage-hero-collage fade-in-section is-visible"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 552"
      >
        <g fill="none" fillRule="evenodd">
          <image
            className="rellax charcoal"
            height="330"
            width="333"
            data-rellax-speed="1"
            x={charcoalValues.x}
            y={charcoalValues.y}
            href={require('../../assets/images/dark_background.png')}
            style={{ transform: ' translate3d(0px, 0px, 0px)' }}
          ></image>
          <path
            d="M73,272.5a226.5,226.5 0 1,0 453,0a226.5,226.5 0 1,0 -453,0"
            stroke="#39a6ff"
            strokeWidth="4"
            className="circle"
          ></path>
          <image
            className="rellax imran"
            height="400"
            data-rellax-speed="1"
            x={imranValues.x}
            y={imranValues.y}
            href={require('../../assets/images/my_picture.png')}
            style={{ transform: ' translate3d(0px, 0px, 0px)' }}
          ></image>
          <polygon
            fill="#39a6ff"
            points="209.95 269.013 209.95 273.553 227.254 273.553 191.111 309.782 175.446 294.084 140.004 329.609 130.074 319.66 100 349.803 103.201 353.013 130.074 326.078 140.004 336.029 175.446 300.502 191.111 316.2 230.471 276.748 230.471 294.12 235 294.12 235 269.013"
            transform="matrix(-1 0 0 1 335 0)"
          ></polygon>
          <g transform="translate(66 82.047)">
            <circle
              className="rellax"
              data-rellax-speed="-1.5"
              cx="81"
              cy="275.953"
              r="6"
              fill="#FFF"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            ></circle>
            <circle
              className="rellax"
              data-rellax-speed="-1"
              cx="474"
              cy="402.953"
              r="6"
              fill="#39a6ff"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            ></circle>
            <circle
              className="rellax"
              data-rellax-speed="1"
              cx="67"
              cy="6.953"
              r="6"
              fill="#D6F7EE"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            ></circle>
            <circle
              className="rellax"
              data-rellax-speed="0"
              cx="8"
              cy="361.953"
              r="8"
              fill="#39a6ff"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            ></circle>
            <circle
              className="rellax"
              data-rellax-speed="-1"
              cx="334"
              cy="193.953"
              r="8"
              fill="#39a6ff"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            ></circle>
            <circle
              className="rellax"
              data-rellax-speed="2"
              cx="488"
              cy="356.953"
              r="8"
              fill="#D6F7EE"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            ></circle>
            <polygon
              className="rellax"
              data-rellax-speed="-1"
              fill="#1c1c1c"
              points="69.398 357.953 61.001 366.35 52.605 357.953 48.001 362.555 56.399 370.951 48 379.349 52.601 383.953 61.001 375.555 69.398 383.951 74 379.348 65.603 370.951 74 362.555"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            ></polygon>
            <polygon
              className="rellax"
              data-rellax-speed="2"
              fill="#D6F7EE"
              points="390.398 213.953 382.001 222.35 373.605 213.953 369.001 218.555 377.399 226.951 369 235.349 373.601 239.953 382.001 231.555 390.398 239.951 395 235.348 386.603 226.951 395 218.555"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            ></polygon>
            <polygon
              className="rellax"
              data-rellax-speed="-1"
              fill="#101010"
              points="114.001 54.466 102.534 43 98.001 47.531 109.469 58.998 98 70.467 102.532 75 114.001 63.531 125.469 74.998 130 70.465 118.532 58.998 130 47.531 125.469 43"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            ></polygon>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default SvgContainer;
