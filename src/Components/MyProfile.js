import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const filter = missions.filter((mission) => mission.join);

  return (
    <div className="wrapper">
      <div className="my-profile-wrapper">
        <h2 className="title">My Missions</h2>
        <ul className="list">
          {filter.map((mission) => (
            <li key={mission.name} className="filter-names">
              {mission.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-profile-wrapper">
        <h2 className="title">My Rockets</h2>
        <ul className="list">
          {filter.map((mission) => (
            <li key={mission.name} className="filter-names">
              {mission.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
