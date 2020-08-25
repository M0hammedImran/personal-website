import React from 'react';
import Links from '../Links/Links';
import './Contact.css';

function Contact() {
  return (
    <div id="Contact">
      <h1>Contact</h1>
      <h3>Email: mohammedimran86992@gmail.com</h3>
      <div className="links">
        <Links Link="https://github.com/m0hammedimran" Name="GitHub" />
        <Links Link="https://instagram.com/m0hd_imran" Name="Instagram" />
        <Links Link="https://twitter.com/Md_Imran_1999" Name="Twitter" />
      </div>
    </div>
  );
}

export default Contact;
