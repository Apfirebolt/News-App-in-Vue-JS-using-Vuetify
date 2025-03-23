<template>
  <div class="container">
    <h1>About Us</h1>
  
    <div>
      <p>
        This is a simple news app built with Vue 3 and Vuestic UI. It fetches
        news from the News API and displays them in a card format. You can
        select the country and category of news you want to see.
      </p>
      <div>
        <p>
        You have selected <strong>{{ selectedCountry }}</strong> country and
        <strong>{{ selectedCategory }}</strong> category.
        </p>
        <va-chip type="success" size="large" class="mr-6 mb-2">
          {{ selectedCountry }}
        </va-chip>
        <va-chip type="success" size="large" class="mr-6 mb-2">
          {{ selectedCategory }}
        </va-chip>
        <va-chip type="secondary" size="large" class="mr-6 mb-2" @click="fetchHeadlines">
          Get News
        </va-chip>
      </div>
    </div>
    <CountryList @update-country="updateCountry" />
    <CategoryList @update-category="updateCategory" />
    <Loader v-if="isLoading" />
  
    <div>
      <va-card
        v-for="article in headlines"
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
import { ref, computed } from "vue";
import { useNewsStore } from "../stores/news";
import Loader from "../components/Loader.vue";
import CategoryList from "../components/CategoryList.vue";
import CountryList from "../components/CountryList.vue";
import { VaChip } from "vuestic-ui";

const selectedCountry = ref("us");
const selectedCategory = ref("business");
const newsStore = useNewsStore();

const headlines = computed(() => newsStore.getHeadlines);
const isLoading = computed(() => newsStore.isLoading);

const fetchHeadlines = async () => {
  const payload = {
    country: selectedCountry.value,
    category: selectedCategory.value,
  };
  await newsStore.getHeadlinesAction(payload);
};

const updateCountry = (country) => {
  selectedCountry.value = country;
};

const updateCategory = (category) => {
  selectedCategory.value = category;
};

</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.container {
  margin: 1rem auto;
  width: 80%;
}

.container p {
  margin-bottom: 1rem;
}

.container div {
  margin-bottom: 1rem;
}

.source-card img {
  margin-bottom: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  width: 80%;
  height: 500px;
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