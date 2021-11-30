import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser: 0,
  },
  getters: {
    isAuthenticated: (state) => {
      return state.currentUser != 0;
    },
    events: (state) => {
      // return state.events.filter((e) => new Date(e.endTime) > new Date());
      !state;
      return [];
    },
  },
  mutations: {
    AUTHENTICATE: (state, payload) => {
      state.currentUser = payload;
    },
  },
  actions: {
    login: async ({ commit }, payload) => {
      let users = await (await fetch('http://localhost:4000/users')).json();
      let user = users.find(user => user.email == payload.email && user.password == payload.password);
      if (user) {
        commit('AUTHENTICATE', user.id);
        console.log(`authenticated with ${payload.email}`)
        return true;
      }
      return false;
    },
  },
  modules: {},
});
