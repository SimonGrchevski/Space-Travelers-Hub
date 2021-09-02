import React from 'react';

const MyProfile = () => {

  return (
    <div className="wrapper">
      <div className="my-profile-wrapper">
        <h2 className="title">My Missions</h2>
        <ul className="list">
          <li>First Mission</li>
        </ul>
      </div>
      <div className="my-profile-wrapper">
        <h2 className="title">My Rockets</h2>
        <ul className="list">
          <li>First Rocket</li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;