import { GET_SEASON_TYPE } from '../actions/types';

export default (state = { seasonType: '' }, action) => {
  switch (action.type) {
    case GET_SEASON_TYPE:
      return { ...state, seasonType: action.payload };

    default:
      return state;
  }
};
