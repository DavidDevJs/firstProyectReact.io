import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo Conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="avatar"
          />
          <h1>
            David <br /> González
          </h1>
        </div>

        <div className="Badge__section-info">
          <p>Full-Stack Developer</p>
          <p>@DavDev</p>
        </div>

        <div className="Badge__footer"></div>
      </div>
    );
  }
}

export default Badge;
