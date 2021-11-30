import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser: 0,
  },
  getters: {
    events: (state) => {
      // return state.events.filter((e) => new Date(e.endTime) > new Date());
      !state;
      return [];
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
