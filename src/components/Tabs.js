/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { seasonType: '' };
  }

  componentDidMount() {
    this.getSeasonType();
  }

  getSeasonType = async () => {
    const { season } = this.props;
    const result = await season('CurrentSeason');
    this.setState({ seasonType: result.data.SeasonType });
  };

  seasonType() {
    const { seasonType } = this.state;
    if (!seasonType) return null;
    return seasonType === 'REG' ? 'Regular Season' : 'Pre-Season';
  }

  render() {
    return (
      <div>
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
        <section className="event__header container-fluid d-flex bd-highlight mb-3 bg-info">
          <div className="p-2 bd-highlight">{`USA:NBA ${this.seasonType()}`}</div>
          <Link to="/standings" className="ml-auto p-2 bd-highlight text-white">Standings</Link>
        </section>
      </div>
    );
  }
}

export default Tabs;
