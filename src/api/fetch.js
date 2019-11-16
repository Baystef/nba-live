import api from './nba';

const fetch = async (term) => {
  const { KEY } = process.env;
  const result = await api.get(`/${term}`, {
    params: {
      key: KEY
    }
  });

  return result;
};

export default fetch;
