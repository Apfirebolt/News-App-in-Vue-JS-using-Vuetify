<template>
    <div class="hello">

        <v-container class="blue lighten-5">
            <v-row no-gutters>
                <v-col
                        cols="12"
                        sm="12"
                >
                    <v-card
                            class="p-2"
                            outlined
                            tile
                    >
                        <v-card-title>
                            <h3 class="text-primary text-center">Search News By Keywords</h3>
                        </v-card-title>
                        <v-text-field
                                v-model="search_text"
                                label="Enter keywords to Search for related news"
                                hint="Enter Keywords separated by spaces to search for news matching keywords!"
                                placeholder="Enter Keywords here"
                                shaped="shaped"
                                solo="solo"
                                filled="filled"
                                :clearable=true
                        ></v-text-field>

                        <div class="my-2">
                            <v-btn large color="error" :dark="true" @click="searchNews">Search News</v-btn>
                        </div>
                    </v-card>

                    <v-card v-if="getNewsKeyword.length > 0" v-for="each_news in getNewsKeyword"
                            class="mx-auto my-4"
                            max-width="800"
                    >
                        <v-img
                                class="white--text align-end"
                                height="400px"
                                :src="each_news.urlToImage"
                                alt="Image not available"
                        >
                            <v-card-title class="custom_text">{{ each_news.title }}</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0">{{ each_news.description }}</v-card-subtitle>

                        <v-card-text>
                            <p class="para_text">{{ each_news.content }}</p>
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
                                BY - {{ each_news.source.name }}
                            </v-btn>

                            <v-btn
                                    color="orange"
                                    :href="each_news.url"
                                    text
                            >
                                Read More
                            </v-btn>


                        </v-card-actions>
                    </v-card>

                    <h3 class="text-warning" v-else>No News Articles To Load</h3>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import * as types from '../store/types';
  export default {
    name: 'keyword_search',
    data() {
      return {
        search_text: ''
      }
    },
    methods: {
      ...mapActions({
        newsKeyword: types.SET_NEWS_KEYWORD_FULFILLED
      }),
      searchNews() {
        this.newsKeyword(this.convertEncoded);
      }
    },
    computed: {
      ...mapGetters({
        getNewsKeyword: types.GET_ARTICLES
      }),
      convertEncoded() {
        let encoded_result = encodeURI(this.search_text);
        return encoded_result;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .custom_text {
        color: mintcream !important;
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
        color: mediumseagreen;
    }
</style>
