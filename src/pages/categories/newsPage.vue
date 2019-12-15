<template>
    <div class="container">
        <h3>News From the Following Categories are available</h3>
        <div class="container">
            <v-btn text :dark="true" data-role="business" @click="selectCategory">Business</v-btn>
            <v-btn text :dark="true" data-role="entertainment" @click="selectCategory">Entertainment</v-btn>
            <v-btn text :dark="true" data-role="sports" @click="selectCategory">Sports</v-btn>
            <v-btn text :dark="true" data-role="science" @click="selectCategory">Science</v-btn>
            <v-btn text :dark="true" data-role="health" @click="selectCategory">Health</v-btn>
            <v-btn text :dark="true" data-role="technology" @click="selectCategory">Technology</v-btn>
        </div>
    </div>

</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import * as types from '../../store/types';
  export default {
    name: 'categories_page',
    data() {
      return {

      }
    },
    methods: {
        selectCategory(event) {
          console.log('Event happened : ', event.target);
        }
    },
    computed: {

    },
    components: {

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        color: mediumseagreen;
        background-color: #FFF;
        padding: 1rem;
        font-family: "Lucida Sans Unicode", sans-serif;
    }
</style>
