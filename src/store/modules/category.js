import * as types from '../types';
import axios from 'axios';

const state = {
  source: [],
  articles: [],
  page_numbers: 0,
};

const getters = {
  [types.GET_SOURCES]: state => {
    return state.source;
  },
  [types.GET_PAGE_NUMBER]: state => {
    return state.page_numbers;
  },
  [types.GET_ARTICLES]: state => {
    return state.articles;
  }
};

const mutations = {
  [types.SET_NEWS_SOURCE]: (state, payload) => {
    state.source = payload;
  },

  [types.SET_PAGE_NUMBER]: (state, payload) => {
    state.page_numbers = payload;
  },

  [types.SET_ARTICLES]: (state, payload) => {
    state.articles = payload;
  }
};

const actions = {
  [types.SET_NEWS_SOURCE_FULFILLED]: ({commit}, payload) => {
    let api_key = process.env.VUE_APP_URL;
    axios.get(`https://newsapi.org/v2/sources?apiKey=${api_key}`)
      .then((response) => {
        commit(types.SET_NEWS_SOURCE, response.data.sources);
      });
  },

  [types.SET_NEWS_KEYWORD_FULFILLED]: ({commit}, payload) => {
    let api_key = process.env.VUE_APP_URL;
    let url = `https://newsapi.org/v2/everything?q=${payload.query_text}&pageSize=${payload.page_size}&page=${payload.page_number}&apiKey=${api_key}`;
    axios.get(url)
      .then((response) => {
        commit(types.SET_ARTICLES, response.data.articles);
        let page_numbers = Math.ceil(response.data.totalResults/payload.page_size);
        commit(types.SET_PAGE_NUMBER, page_numbers);
      });
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}