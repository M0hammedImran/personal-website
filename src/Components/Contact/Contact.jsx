import React from 'react';
import Links from '../Links/Links';
import './Contact.scss';

import { ReactComponent as HomeSvg } from '../../assets/svg_icons/GitHub_icon.svg';

import { ReactComponent as SkillsSvg } from '../../assets/svg_icons/Twitter_icon.svg';
import { ReactComponent as ContactSvg } from '../../assets/svg_icons/Instagram_icon.svg';

function Contact() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Hello');
  };
  return (
    <div id="Contact">
      <form className="container-fluid" onSubmit={onSubmitHandler}>
        <h1>Contact</h1>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            className="form-control border border-dark"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputEmail">Email address</label>
          <input
            type="email"
            className="form-control border border-dark"
            id="InputEmail"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="input-group">
          <textarea
            class="form-control border border-dark"
            aria-label="With textarea"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="links">
        <Links
          Link="https://github.com/m0hammedimran"
          BrandSvg={HomeSvg}
          Name="GitHub"
        />
        <Links
          Link="https://instagram.com/m0hammedimran"
          BrandSvg={ContactSvg}
          Name="Instagram"
        />
        <Links
          BrandSvg={SkillsSvg}
          Link="https://twitter.com/Md_Imran_1999"
          Name="Twitter"
        />
      </div>
    </div>
  );
}

export default Contact;
