import * as types from '../types';
import axios from 'axios';

const state = {
  source: [],
  articles: [],
  marks: 34,
};

const getters = {
  [types.GET_SOURCES]: state => {
    return state.source;
  },
  [types.GET_MARKS]: state => {
    return state.marks;
  },
  [types.GET_ARTICLES]: state => {
    return state.articles;
  }
};

const mutations = {
  [types.SET_NEWS_SOURCE]: (state, payload) => {
    state.source = payload;
  },

  [types.SET_MARKS]: (state, payload) => {
    state.marks += parseInt(payload);
  },

  [types.SET_ARTICLES]: (state, payload) => {
    console.log('Inside the set articles mutation..', payload);
    state.articles = payload;
  }
};

const actions = {
  [types.SET_NEWS_SOURCE_FULFILLED]: ({commit}, payload) => {
    axios.get('https://newsapi.org/v2/sources?apiKey=5c2b04e6cd9642afac31fc65203425c1')
      .then((response) => {
        commit(types.SET_NEWS_SOURCE, response.data.sources);
      });
  },

  [types.SET_ARTICLES_FULFILLED]: ({commit}, payload) => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5c2b04e6cd9642afac31fc65203425c1')
      .then((response) => {
        commit(types.SET_ARTICLES, response.data.articles);
      });
  },

  [types.SET_NEWS_KEYWORD_FULFILLED]: ({commit}, payload) => {
    let url = `https://newsapi.org/v2/everything?q=${payload}&apiKey=5c2b04e6cd9642afac31fc65203425c1`;
    axios.get(url)
      .then((response) => {
        commit(types.SET_ARTICLES, response.data.articles);
      });
  },

  [types.SET_MARKS_FULFILLED]: ({ commit }, payload) => {
    setTimeout(() => {
      commit(types.SET_MARKS, payload);
    }, 2000)
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}