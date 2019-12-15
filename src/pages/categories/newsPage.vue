<template>
    <div class="hello">
        <h1 class="text--lighten-5">The News Page Component {{ marksMan }}</h1>
        <v-card v-for="each_item in sourceGet"
                class="mx-auto my-3 p-2"
                max-width="1000"
                color="red"
                raised
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4"></div>
                    <v-list-item-title class="headline my-2 text--blue lighten-5">{{ each_item.name }}</v-list-item-title>
                    <v-list-item-subtitle class="red--text">{{ each_item.description }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-card-actions>
                <v-btn text>{{ each_item.category }}</v-btn>
                <v-btn text>{{ each_item.language }}</v-btn>
                <v-btn text>{{ each_item.url }}</v-btn>
            </v-card-actions>
        </v-card>

        <button class="btn btn-danger" @click="increaseMarks(payload)">Marks</button>
        <div class="form-group">
            <label for="payload">Payload</label>
            <input class="form-control" type="number" name="payload" id="payload" v-model="payload" />
        </div>

        <v-btn @click="loadSource">API Call</v-btn>
        <news-component></news-component>
    </div>
</template>

<script>
  import NewsComponent from '../../components/categories/news.vue';
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import * as types from '../../store/types';
  export default {
    name: 'news_page',
    data() {
      return {
        payload: 2
      }
    },
    methods: {
      ...mapActions({
        loadSource: types.SET_NEWS_SOURCE_FULFILLED,
        increaseMarks: types.SET_MARKS_FULFILLED
      }),
    },
    computed: {
      ...mapGetters({
        marksMan: types.GET_MARKS,
        sourceGet: types.GET_SOURCES
      })
    },
    components: {
      NewsComponent,
    },
    mounted() {
      console.log('Loading source data now..');
      // loadSource();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
