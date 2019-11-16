/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TeamList from './TeamList';
import Spinner from '../../Spinner';
import { fetchTeams } from '../../../actions';
import './Teams.css';

class Teams extends Component {
  componentDidMount() {
    const { fetchTeams: fetchTeamsProp } = this.props;
    fetchTeamsProp();
  }

  // getTeams = async () => {
  //   const { teams } = this.props;
  //   const result = await teams('teams');
  //   this.setState({ data: result.data });
  // }

  render() {
    const { teams } = this.props;

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
  }
}

const mapStateToProps = (state) => {
  return { teams: state.teams };
};

export default connect(mapStateToProps, { fetchTeams })(Teams);
