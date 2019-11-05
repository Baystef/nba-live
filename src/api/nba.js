import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.sportsdata.io/v3/nba/scores/json',
});
