<template>
  <div class="container">
    <h1>Home</h1>
    <p>Get news around the world from 80+ authenticate news sources and 100+ countries!</p>

    <div class="search-container">
      <va-input
      v-model="searchText"
      placeholder="Search news..."
      class="search-input"
      />
      <VaButton @click="searchNews" class="search-button">Search</VaButton>
    </div>
    <Loader v-if="isLoading" />
    <div>
      <va-card
        v-for="article in news"
        :key="article.source.id"
        :bordered=true
        class="cursor-pointer source-card"
      >
        <va-card-content>
          <h3>
            {{ article.title }}
          </h3>
          <img :src="article.urlToImage" alt="Image not available" />
          <p>{{ article.description }}</p>
          <p><strong>Author:</strong> {{ article.author }}</p>
          <p>
            <strong>Published At:</strong>
            {{ new Date(article.publishedAt).toLocaleString() }}
          </p>
          <p>
            <strong>URL:</strong>
            <a :href="article.url" class="link" target="_blank">{{
              article.url
            }}</a>
          </p>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useNewsStore } from "../stores/news";
import Loader from "../components/Loader.vue";
import {
  VaCard,
  VaCardContent,
  VaCardTitle,
  VaInput,
  VaButton,
} from "vuestic-ui/web-components";

const newsStore = useNewsStore();
const searchText = ref("");
const pageSize = ref(20);
const page = ref(1);
const news = computed(() => newsStore.getNews);
const isLoading = computed(() => newsStore.isLoading);

const searchNews = async () => {
  const payload = {
    pageSize: pageSize.value,
    page: page.value,
    searchText: searchText.value,
  };
  await newsStore.getNewsAction(payload);
};
</script>

<style scoped>
.source-card {
  transition: transform 0.2s;
  margin: 1rem auto;
}

.search-container {
  display: flex;
  margin: 1rem auto;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.search-container .va-input {
  width: 70%;
}

.search-container .va-button {
  width: 20%;
  background-color: #443627 !important;
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.source-card img {
  margin-bottom: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  width: 80%;
  height: 500px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.container {
  margin: 1rem auto;
  width: 80%;
}

.source-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.source-card p {
  margin-bottom: 0.5rem;
}

.source-card {
  background-color: #443627;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.source-card a {
  color: #AC1754;
  font-size: 1rem;
  text-decoration: none;
}

.source-card a:hover {
  text-decoration: underline;
  font-size: 1.1rem;
  transition: all 0.2s ease-in-out;
}
</style>
