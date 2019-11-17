/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TeamList from './TeamList';
import Spinner from '../../Spinner';
import { fetchTeams } from '../../../actions';
import './Teams.css';

const Teams = ({ fetchTeams: fetchTeamsProp, teams }) => {
  useEffect(() => {
    fetchTeamsProp();
  }, []);

  if (!teams.length) {
    return <Spinner />;
  }

  const teamList = teams.map((team) => {
    return <TeamList team={team} key={team.TeamID} />;
  });

  return (
    <div className="container team-grid">
      {teamList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { teams: state.teams };
};

export default connect(mapStateToProps, { fetchTeams })(Teams);
