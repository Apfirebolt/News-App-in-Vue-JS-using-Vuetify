<template>
    <div class="hello">
        <h1 class="text-primary">News Source Component</h1>
        <v-card v-for="each_result in getArticles"
                class="mx-auto my-4"
                max-width="800"
        >
            <v-img
                    class="white--text align-end"
                    height="400px"
                    :src="each_result.urlToImage"
            >
                <v-card-title class="custom_text">{{ each_result.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
                <div>{{ each_result.description }}</div>

                <div></div>
            </v-card-text>

            <v-card-actions>
                <v-btn
                        color="orange"
                        text
                >
                    Share
                </v-btn>

                <v-btn
                        color="orange"
                        text
                >
                    Explore
                </v-btn>
                <v-btn
                        color="orange"
                        text
                        :href="each_result.url"
                >
                    Read More
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
  import axios from 'axios';
  import { mapGetters, mapActions } from 'vuex';
  import * as types from '../../store/types';

  export default {
    name: 'sources',
    data() {
      return {
        results: {}
      }
    },
    methods: {
      ...mapActions({
        fetchArticles: types.SET_ARTICLES_FULFILLED
      })
    },
    computed: {
      ...mapGetters({
        getArticles: types.GET_ARTICLES
      })
    },
    created() {
        this.fetchArticles();
    }
  }
</script>

<style scoped>
    .custom_text {
        font-weight: 600;
        color: mintcream !important;
        background-color: #242424;
        opacity: 0.5;
        font-size: 1.3rem;
        margin: auto -1rem;
    }
</style>
