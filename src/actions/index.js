import fetch from '../api/fetch';
import { FETCH_STANDINGS, FETCH_TEAMS, GET_SEASON_TYPE } from './types';


export const fetchStandings = () => async (dispatch) => {
  const { data: { Season } } = await fetch('CurrentSeason');
  const response = await fetch(`Standings/${Season}`);
  dispatch({ type: FETCH_STANDINGS, payload: response.data });
};

export const fetchTeams = () => async (dispatch) => {
  const response = await fetch('teams');
  dispatch({ type: FETCH_TEAMS, payload: response.data });
};

export const getSeasonType = () => async (dispatch) => {
  const { data: { SeasonType } } = await fetch('CurrentSeason');
  dispatch({ type: GET_SEASON_TYPE, payload: SeasonType });
};
