<template>
  <v-container>
    <h2 class="text-success p-2 bg-white">Our News Sources</h2>
    <div v-if="!dataLoaded" class="text-center">
      <v-progress-circular
        :size="100"
        color="danger"
        indeterminate
        :light="true"
      ></v-progress-circular>
    </div>
    <v-card
      v-for="each_item in sourceGet"
      :key="each_item.name"
      class="mx-auto my-3 p-2"
      max-width="1000"
      color="red"
      raised
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline my-2 red_text">{{
            each_item.name
          }}</v-list-item-title>
          <v-list-item-subtitle class="red--text">{{
            each_item.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn text>{{ each_item.category }}</v-btn>
        <v-btn text>{{ each_item.language }}</v-btn>
        <v-btn text>{{ each_item.url }}</v-btn>
      </v-card-actions>
    </v-card>

    <v-col cols="12" sm="12">
      <v-text-field
        label="Regular"
        filled
        hint="What you want to search about ?"
        placeholder="Enter Query to Search!"
      ></v-text-field>
    </v-col>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import * as types from "../store/types";
export default {
  name: "news_page",
  data() {
    return {
      dataLoaded: false,
    };
  },
  methods: {
    ...mapActions({
      loadSource: types.SET_NEWS_SOURCE_FULFILLED,
    }),
  },
  computed: {
    ...mapGetters({
      sourceGet: types.GET_SOURCES,
    }),
  },
  watch: {
    sourceGet: function() {
      this.dataLoaded = true;
    },
  },
  created() {
    this.loadSource();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red_text {
  color: indianred !important;
  font-size: 1.3rem;
}
</style>
