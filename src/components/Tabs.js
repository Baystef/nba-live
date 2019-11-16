/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getSeasonType } from '../actions';
import './Tabs.css';


class Tabs extends Component {
  componentDidMount() {
    const { getSeasonType: getSeasonTypeProp } = this.props;
    getSeasonTypeProp();
  }

  seasonType() {
    const { seasonType } = this.props;
    if (!seasonType) return null;
    return seasonType === 'REG' ? 'Regular Season' : 'Pre-Season';
  }

  render() {
    return (
      <div id="tabs-container">
        <ul className="nav nav-tabs d-flex" id="myTab" role="tablist">
          {/* <li className="nav-item">
            <NavLink to="/results" className="nav-link" id="results-tab" data-toggle="tab" role="tab" aria-controls="results" aria-selected="true">Results</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to="/standings" className="nav-link" id="standings-tab" data-toggle="tab" role="tab" aria-controls="standings" aria-selected="true">Standings</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/teams" className="nav-link" id="teams-tab" data-toggle="tab" role="tab" aria-controls="teams" aria-selected="false">Teams</NavLink>
          </li>
        </ul>
        <section className="event__header container-fluid d-flex bd-highlight bg-info">
          <div className="p-2 bd-highlight">{`USA:NBA ${this.seasonType()}`}</div>
          <NavLink to="/standings" className="ml-auto p-2 bd-highlight text-white">Standings</NavLink>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { seasonType: state.seasonType.seasonType };
};

export default connect(mapStateToProps, { getSeasonType })(Tabs);
