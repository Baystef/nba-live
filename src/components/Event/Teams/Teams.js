/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import TeamList from './TeamList';
import Spinner from '../../Spinner';
import './Teams.css';

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getTeams();
  }

  getTeams = async () => {
    const { teams } = this.props;
    const result = await teams('teams');
    this.setState({ data: result.data });
  }

  render() {
    const { data } = this.state;

    if (!data.length) {
      return <Spinner />;
    }

    const teamList = data.map((team) => {
      return <TeamList team={team} key={team.TeamID} />;
    });

    return (
      <div className="container team-grid">
        {teamList}
      </div>
    );
  }
};

export default Teams;
