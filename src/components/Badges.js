import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';
import avatar from '../images/perfil.jpg';
import Gravatar from '../components/Gravatar';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo Conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="ml-2 Badge__avatar"
            email={this.props.email}
            alt="avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
