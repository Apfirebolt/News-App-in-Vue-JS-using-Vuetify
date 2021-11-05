<template>
  <div class="container">
    <h3>
      News From the Following Categories are available for
      <span class="text-danger">{{ $route.params.country }}</span>
    </h3>
    <div class="container">
      <button class="custom_btn" data-role="business" @click="selectCategory">
        Business
      </button>
      <button
        class="custom_btn"
        data-role="entertainment"
        @click="selectCategory"
      >
        Entertainment
      </button>
      <button class="custom_btn" data-role="sports" @click="selectCategory">
        Sports
      </button>
      <button class="custom_btn" data-role="science" @click="selectCategory">
        Science
      </button>
      <button class="custom_btn" data-role="health" @click="selectCategory">
        Health
      </button>
      <button class="custom_btn" data-role="technology" @click="selectCategory">
        Technology
      </button>
    </div>

    <div class="text-center">
      <button class="getNews" @click="getNews">Get Headlines</button>
      <button class="getNews" @click="clearData">Refresh</button>
    </div>

    <div v-if="country_news.length == 0 && dataLoaded" class="text-center my-4">
      <v-progress-circular
        :size="100"
        color="danger"
        indeterminate
        :light="true"
      ></v-progress-circular>
    </div>
    <v-container v-if="country_news.length > 0">
      <v-card
        v-for="each_news in country_news"
        class="mx-auto my-4"
        :key="each_news.title"
        max-width="1000"
      >
        <v-img
          v-if="each_news.urlToImage"
          class="white--text align-end"
          height="400px"
          :src="each_news.urlToImage"
          alt="Image not available"
        >
          <v-card-title class="custom_text">{{ each_news.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0 sub-title-text">{{
          each_news.description
        }}</v-card-subtitle>

        <v-card-text>
          <p class="para_text">{{ each_news.content }}</p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>
            Share
          </v-btn>

          <v-btn color="orange" text> BY - {{ each_news.source.name }} </v-btn>

          <v-btn color="orange" :href="each_news.url" text>
            Read More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters, mapMutations } from "vuex";
import * as types from "../../store/types";
export default {
  name: "categories_page",
  data() {
    return {
      current_country_code: this.$route.query.country_data.country_code,
      current_category: "",
      country_news: [],
      dataLoaded: false,
    };
  },
  methods: {
    selectCategory(event) {
      this.current_category = event.target.getAttribute("data-role");
    },
    getNews() {
      let code = this.current_country_code;
      let cat = this.current_category;
      let api_key = process.env.VUE_APP_URL;

      this.dataLoaded = true;
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=${code}&category=${cat}&apiKey=${api_key}`
        )
        .then((response) => {
          this.country_news = response.data.articles;
        })
        .catch((err) => {
          console.log("Some error occurred..");
        });
    },
    clearData() {
      this.country_news = [];
      if (this.dataLoaded) this.dataLoaded = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  color: mediumseagreen;
  background-color: #fff;
  padding: 1rem;
  font-family: "Lucida Sans Unicode", sans-serif;
}

.custom_btn {
  background-color: inherit;
  border: 1px solid seagreen;
  padding: 1rem;
  margin: 1.5rem;
  font-family: "Roboto", sans-serif;
  min-width: 120px;
  color: mintcream;
  font-weight: 500;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #242424;
    background-color: azure;
    transition: all 0.5s ease-out;
    border-radius: 1rem;
  }
}

.getNews {
  background-color: coral;
  color: aliceblue;
  padding: 0.5rem;
  font-family: Verdana;
  font-size: 1.3rem;
  border: none;
  border-radius: 2px;
  margin: 1rem;
}

.custom_text {
  color: coral !important;
  background-color: #242424;
  opacity: 0.7;
  font-family: Verdana;
  font-size: 1.4rem;
  font-weight: 600;
}

.para_text {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 1rem;
  margin: 1rem auto;
  color: #242672;
  background-color: azure;
  padding: 1rem;
}

.sub-title-text {
  font-size: 1.3rem;
  color: crimson;
  background-color: #fff;
  box-shadow: 2px 2px mintcream;
  padding: 1rem;
  width: 80%;
  margin: 1rem auto;
}
</style>
