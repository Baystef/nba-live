/* eslint-disable react/prop-types */
import React from 'react';

const TeamList = ({ team }) => {
  const { PrimaryColor, SecondaryColor, WikipediaLogoUrl, Name, City } = team;
  return (
    <div
      className="card shadow-lg mb-5 bg-white rounded"
      style={{ borderLeft: `1px solid #${PrimaryColor}`, borderRight: `1px solid #${SecondaryColor}` }}
    >
      <img src={WikipediaLogoUrl} className="card-img-top" alt={Name} />
      <div className="card-body">
        <p className="card-text">{`${City} ${Name}`}</p>
      </div>
    </div>
  );
};

export default TeamList;
