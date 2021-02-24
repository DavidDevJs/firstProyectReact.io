import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './styles/BadgesList.css';
import '../pages/styles/Badges.css';
import confLofo from '../images/badge-header.svg';

function PageLoading() {
  return (
    <React.Fragment>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges__conf-logo" src={confLofo} alt="Conf Logo" />
          </div>
        </div>
      </div>
      <div className="Badges__list">
        <div className="Badges__container">
          <div className="Badges__buttons">
            <a href="/badges/new" className="btn btn-primary mx-auto">
              New Badge
            </a>
          </div>

          <div className="BadgesListItem">
            <Skeleton circle={true} height={80} width={80} />
            <Skeleton count={3} className="m" width={400} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PageLoading;
