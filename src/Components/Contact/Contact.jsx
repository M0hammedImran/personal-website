import React from 'react';
import Links from '../Links/Links';
import './Contact.scss';

import { ReactComponent as HomeSvg } from '../../assets/svg_icons/Home_icon.svg';
// import { ReactComponent as ProjectsSvg } from '../../assets/svg_icons/projects_icon.svg';
import { ReactComponent as SkillsSvg } from '../../assets/svg_icons/Globe_icon.svg';
import { ReactComponent as ContactSvg } from '../../assets/svg_icons/Email_icon.svg';

function Contact() {
  return (
    <div id="Contact">
      <h1>Contact</h1>
      <p>Email: mohammedimran86992@gmail.com</p>
      <form>
        <div className="name__container">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div className="email__container">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div className="message__container">
          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" cols="80" rows="10"></textarea>
        </div>
        <div className="btn__container">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="links">
        <Links
          Link="https://github.com/m0hammedimran"
          BrandSvg={HomeSvg}
          Name="GitHub"
        />
        <Links
          Link="https://instagram.com/m0hd_imran"
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
