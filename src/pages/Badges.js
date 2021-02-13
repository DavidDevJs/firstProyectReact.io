import React from 'react';
import NavBar from '../components/Navbar';
import './styles/Badges.css';
import confLofo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
  state = {
    data: [
      {
        id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
        firstName: 'Freda',
        lastName: 'Grady',
        email: 'Leann_Berge@gmail.com',
        jobTitle: 'Legacy Brand Director',
        twitter: 'FredaGrady22221-7573',
        avatarUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Flinguisticauprrp.wordpress.com%2Fperfil-generico%2F&psig=AOvVaw1U1qCY2_AIQhJrv3E3-oyk&ust=1613313656771000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjv8fmL5-4CFQAAAAAdAAAAABAE',
      },
      {
        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
        firstName: 'Major',
        lastName: 'Rodriguez',
        email: 'Ilene66@hotmail.com',
        jobTitle: 'Human Research Architect',
        twitter: 'MajorRodriguez61545',
        avatarUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Flinguisticauprrp.wordpress.com%2Fperfil-generico%2F&psig=AOvVaw1U1qCY2_AIQhJrv3E3-oyk&ust=1613313656771000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjv8fmL5-4CFQAAAAAdAAAAABAE',
      },
      {
        id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
        firstName: 'Daphney',
        lastName: 'Torphy',
        email: 'Ron61@hotmail.com',
        jobTitle: 'National Markets Officer',
        twitter: 'DaphneyTorphy96105',
        avatarUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Flinguisticauprrp.wordpress.com%2Fperfil-generico%2F&psig=AOvVaw1U1qCY2_AIQhJrv3E3-oyk&ust=1613313656771000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjv8fmL5-4CFQAAAAAdAAAAABAE',
      },
    ],
  };

  render() {
    return (
      <div>
        <NavBar />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges__conf-logo"
                src={confLofo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badges__buttons">
            <a href="/badges/new/pending" className="btn btn-primary">
              New Badge
            </a>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Badges;
