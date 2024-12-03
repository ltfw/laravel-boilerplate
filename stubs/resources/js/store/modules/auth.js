import axios from 'axios';

export default {
  namespaced: true,

  state: {
    user: null,
    token: localStorage.getItem('token'),
  },

  getters: {
    isAuthenticated: state => !!state.token,
    user: state => state.user,
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      if (token) {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
      }
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },

  actions: {
    async login({ commit }, credentials) {
      try {
        const { data } = await axios.post('/api/v1/login', credentials);
        commit('SET_TOKEN', data.token);
        commit('SET_USER', data.user);
        return data;
      } catch (error) {
        throw error;
      }
    },

    async register({ commit }, userData) {
      try {
        const { data } = await axios.post('/api/v1/register', userData);
        commit('SET_TOKEN', data.token);
        commit('SET_USER', data.user);
        return data;
      } catch (error) {
        throw error;
      }
    },

    async logout({ commit }) {
      try {
        await axios.post('/api/v1/logout');
      } finally {
        commit('SET_TOKEN', null);
        commit('SET_USER', null);
      }
    },

    async fetchUser({ commit }) {
      try {
        const { data } = await axios.get('/api/v1/user');
        commit('SET_USER', data);
        return data;
      } catch (error) {
        commit('SET_TOKEN', null);
        commit('SET_USER', null);
        throw error;
      }
    },
  },
};
