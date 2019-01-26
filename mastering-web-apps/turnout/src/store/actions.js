import types from './mutation-types';

const signIn = ({ commit }, user) => {
  commit(types.SIGN_IN, user);
};

const signOut = ({ commit }) => {
  commit(types.SIGN_OUT);
};

const setEvents = ({ commit }, events) => {
  commit(types.SET_EVENTS, events);
};

const actions = {
  signIn,
  signOut,
  setEvents,
};

export default actions;
