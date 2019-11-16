/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StandingsList from './StandingsList';
import Spinner from '../../Spinner';
import { fetchStandings } from '../../../actions';
import './Standings.css';

class Standings extends Component {
  componentDidMount() {
    const { fetchStandings: fetchStandingsProp } = this.props;
    fetchStandingsProp();
  }

  // getStandings = async () => {
  //   const { standings } = this.props;
  //   const { data: { Season } } = await standings('CurrentSeason');
  //   const result = await standings(`Standings/${Season}`);
  //   this.setState({ data: result.data });
  // }

  renderStandings = (component) => {
    return (
      <>
        <div className="grid standings-header">
          <span className="rank-header">#</span>
          <span className="team-name-header">Team</span>
          <span className="matches-header">MP</span>
          <span className="wins-header">W</span>
          <span className="losses-header">L</span>
          <span className="percentage-header">PCT(%)</span>
        </div>
        {component}
      </>
    );
  }

  render() {
    const { standings } = this.props;

    if (!standings.length) {
      return <Spinner />;
    }

    const standingsList = standings.sort((a, b) => b.Percentage - a.Percentage).map((standing, i) => {
      return <StandingsList standing={standing} index={i} key={standing.TeamID} />;
    });

    return (
      <div className="standings-wrapper container">
        {this.renderStandings(standingsList)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { standings: state.standings };
};

export default connect(mapStateToProps, { fetchStandings })(Standings);
