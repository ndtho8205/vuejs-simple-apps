import axios from 'axios';

import types from './mutation-types';

const getJoke = ({ commit }) => {
  axios.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke').then((res) => {
    commit(types.ADD_JOKE, res.data);
  });
};

const getTenJokes = ({ commit }) => {
  axios.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten').then((res) => {
    commit(types.ADD_TEN_JOKES, res.data);
  });
};

const actions = {
  getJoke,
  getTenJokes,
};

export default actions;
