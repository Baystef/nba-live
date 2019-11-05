import React from 'react';
import './EventList.css';

const EventList = (props) => {
  // console.log('EVENTLIST PROPS', props);
  // props.results.map(team => console.log(team.team.displayName));
  return (
    <div className="events container">
      <div className="event">
        <div className="time">.</div>
        <div className="homeTeam">L.A. Lakers</div>
        <div className="awayTeam">Golden State Warriors</div>
        <div className="homePointFinal">100</div>
        <div className="awayPointFinal">90</div>
        <div className="homePoint1">10</div>
        <div className="awayPoint1">15</div>
        <div className="homePoint2">21</div>
        <div className="awayPoint2">23</div>
        <div className="homePoint3">21</div>
        <div className="awayPoint3">18</div>
        <div className="homePoint4">32</div>
        <div className="awayPoint4">28</div>
      </div>
    </div>
  );
};

export default EventList;
