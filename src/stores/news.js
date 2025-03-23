import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../plugins/interceptor";


export const useNewsStore = defineStore("news", {
  state: () => ({
    sources: ref([]),
    news: ref([]),
    headlines: ref([]),
    categories: ref([]),
    countries: ref([]),
    loading: ref(false),
  }),

  getters: {
    getSources() {
      return this.sources;
    },
    getHeadlines() {
      return this.headlines;
    },
    getNews() {
      return this.news;
    },
    getCategories() {
      return this.categories;
    },
    getCountries() {
      return this.countries;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async getCountriesAction(page = 1) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        this.loading = true;
        const response = await httpClient.get("urls?page=" + page, {
          headers,
        });
        this.countries = response.data;
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        this.loading = false;
      }
    },

    async getCategoriesAction(page = 1) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        this.loading = true;
        const response = await httpClient.get("urls?page=" + page, {
          headers,
        });
        this.categories = response.data;
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        this.loading = false;
      }
    },

    async getSourcesAction() {
      try {
        this.loading = true;
        const response = await httpClient.get(`sources?apiKey=${import.meta.env.VITE_APP_KEY}`);
        this.sources = response.data.sources;
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        this.loading = false;
      }
    },

    async getNewsAction(payload) {
      try {
        this.loading = true;
        const response = await httpClient.get(`everything?q=${payload.searchText}&pageSize=${payload.pageSize}&page=${payload.page}&apiKey=${import.meta.env.VITE_APP_KEY}`);
        this.news = response.data.articles;
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        this.loading = false;
      }
    },

    async getHeadlinesAction(payload) {
      try {
        this.loading = true;
        const response = await httpClient.get(`top-headlines?country=${payload.country}&category=${payload.category}&apiKey=${import.meta.env.VITE_APP_KEY}`);
        this.headlines = response.data.articles;
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        this.loading = false;
      }
    },

    resetUrlData() {
      this.sources = [];
      this.news = [];
      this.categories = [];
      this.countries = [];
    },
  },
});
