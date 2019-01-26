import types from './mutation-types';

const mutations = {
  [types.ADD_JOKE](state, payload) {
    state.jokes.push(payload);
  },

  [types.ADD_TEN_JOKES](state, payload) {
    state.jokes.push(...payload);
  },

  [types.REMOVE_JOKE](state, index) {
    state.jokes.splice(index, 1);
  },
};

export default mutations;
