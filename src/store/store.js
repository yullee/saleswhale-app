import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams: [],
    activities: [],
    user: [],
    filtered: [],
    show: false,
    tab: 'All',
  },
  mutations: {
    setTeams(state, teams) {
      state.teams = teams;
    },
    setActivities(state, activities) {
      state.activities = activities;
    },
    setUser(state, user) {
      state.user = user;
    },
    setShow(state, show) {
      state.show = show;
    },
    setTab(state, tab) {
      state.tab = tab;
    },
    setFiltered(state, filtered) {
      state.filtered = filtered;
    },
  },
  actions: {
    setTeams({ commit }, teams) {
      commit('setTeams', teams);
    },
    setActivities({ commit }, activities) {
      commit('setActivities', activities);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    setShow({ commit }, show) {
      commit('setShow', show);
    },
    setTab({ commit }, tab) {
      commit('setTab', tab);
    },
    setFiltered({ commit }, filtered) {
      commit('setFiltered', filtered);
    },
  },
});
