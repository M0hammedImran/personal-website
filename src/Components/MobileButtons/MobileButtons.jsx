import React from 'react';

import { ReactComponent as HomeSvg } from '../../assets/svg_icons/Home_icon.svg';
import { ReactComponent as ProjectsSvg } from '../../assets/svg_icons/Projects_icon.svg';
import { ReactComponent as SkillsSvg } from '../../assets/svg_icons/Hammer_icon.svg';
import { ReactComponent as ContactSvg } from '../../assets/svg_icons/Phone_icon.svg';

import './MobileButtons.scss';

const MobileButtons = () => {
  return (
    <div className="circle_container">
      <a href="#Home">
        <div className="actionButton Home">
          <HomeSvg className="actionButton__svg" />
        </div>
      </a>
      <a href="#Projects">
        <div className="actionButton Projects">
          <ProjectsSvg className="actionButton__svg" />
        </div>
      </a>
      <a href="#Skills">
        <div className="actionButton Skills">
          <SkillsSvg className="actionButton__svg" />
        </div>
      </a>
      <a href="#Contact">
        <div className="actionButton Contact">
          <ContactSvg className="actionButton__svg" />
        </div>
      </a>
    </div>
  );
};

export default MobileButtons;
