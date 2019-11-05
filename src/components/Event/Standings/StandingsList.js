/* eslint-disable react/prop-types */
import React from 'react';

const StandingsList = ({ standing, index }) => {
  const { City, Name, Wins, Losses, Percentage } = standing;

  return (
    <div className="grid standings-body">
      <span className="rank">{index + 1}</span>
      <span className="team-name">{`${City} ${Name}`}</span>
      <span className="matches">{Wins + Losses}</span>
      <span className="wins">{Wins}</span>
      <span className="losses">{Losses}</span>
      <span className="percentage">{Percentage}</span>
    </div>
  );
};

export default StandingsList;
