import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../plugins/interceptor";
import { useAuth } from "./auth";
import { useToast } from "vue-toastification";

const toast = useToast();
const auth = useAuth();

export const useUrlStore = defineStore("url", {
  state: () => ({
    sources: ref([]),
    news: ref([]),
    categories: ref([]),
    countries: ref([]),
    loading: ref(false),
  }),

  getters: {
    getSources() {
      return this.sources;
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
      }
    },

    async getSourcesAction(page = 1) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        this.loading = true;
        const response = await httpClient.get("urls?page=" + page, {
          headers,
        });
        this.sources = response.data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    async getNewsAction(page = 1) {
      try {
        const headers = {
          Authorization: `Bearer ${auth.authData.token}`,
        };
        this.loading = true;
        const response = await httpClient.get("urls?page=" + page, {
          headers,
        });
        this.news = response.data;
      } catch (error) {
        console.log(error);
        return error;
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
