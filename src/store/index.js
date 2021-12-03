import { createStore } from "vuex";

/* eslint-disable */
export default createStore({
  state: {
    currentUser: {},
  },
  getters: {
    isAuthenticated: (state) => {
      return !!state.currentUser.id;
    },
    user: (state) => state.currentUser,
  },
  mutations: {
    AUTHENTICATE: (state, payload) => {
      state.currentUser = payload;
    },
    _LOGOUT: (state, payload) => {
      state.currentUser = {};
    },
  },
  actions: {
    login: async ({ commit }, payload) => {
      let response = await fetch("http://localhost:4000/users");
      if (!response.ok) return false;
      let users = await response.json();
      let user = users.find(
        (user) =>
          user.email == payload.email && user.password == payload.password
      );
      if (user) {
        commit("AUTHENTICATE", user);
        console.log(`authenticated with ${payload.email}`);
        return true;
      }
      return false;
    },
    logout: async ({ commit }, payload) => {
      commit("_LOGOUT", payload);
    },
    register: async ({ commit }, payload) => {
      let response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) return false;
      let content = await response.json();
      return content;
    },
    events: async ({ commit }, payload) => {
      let query = "";
      if (payload) {
        query = "?";
        for (const [k, v] of Object.entries(payload)) {
          query += `${k}=${v}`;
        }
      }
      let response = await fetch(`http://localhost:4000/events${query}`);
      if (!response.ok) return [];
      let events = await response.json();
      let validEvents = events.filter((event) => {
        return new Date(event.endTime) > new Date();
      });
      return validEvents;
    },
    subscribe: async ({ commit }, payload) => {
      let event = payload.event;
      event.participants = [...event.participants, payload.user.id];
      let response = await fetch(`http://localhost:4000/events/${event.id}`, {
        method: 'PATCH',
        headers: { 
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      });
      return response.json();
    },
    unsubscribe: async ({ commit }, payload) => {
      let event = payload.event;
      event.participants = event.participants.filter(
        (p) => p != payload.user.id
      );
      let response = await fetch(`http://localhost:4000/events/${event.id}`, {
        method: 'PATCH',
        headers: { 
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      });
      return response.json();
    },
    createEvent: async ({commit}, payload) => {
      let response = await fetch('http://localhost:4000/events', {
        method: 'POST',
        headers: { 
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      return response.json();
    },
    deleteEvent: async ({commit}, payload) => {
      let response = await fetch(`http://localhost:4000/events/${payload}`, {
        method: 'DELETE',
        headers: { 
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
      });
      return response.json();
    },
  },
  modules: {},
});
