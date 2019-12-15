<template>
    <div class="container">
        <h3>News From the Following Categories are available for
            <span class="text-danger">{{ $route.params.country }}</span></h3>
        <div class="container">
            <button class="custom_btn" data-role="business" @click="selectCategory">Business</button>
            <button class="custom_btn" data-role="entertainment" @click="selectCategory">Entertainment</button>
            <button class="custom_btn" data-role="sports" @click="selectCategory">Sports</button>
            <button class="custom_btn" data-role="science" @click="selectCategory">Science</button>
            <button class="custom_btn" data-role="health" @click="selectCategory">Health</button>
            <button class="custom_btn" data-role="technology" @click="selectCategory">Technology</button>
        </div>

        <div class="text-center">
            <button class="getNews" @click="getNews">Get Headlines</button>
        </div>

        <h2 class="text-success">{{ current_category }} - {{ $route.query.country_data }}</h2>
    </div>

</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import * as types from '../../store/types';
  export default {
    name: 'categories_page',
    data() {
      return {
        current_country_code: '',
        current_category: ''
      }
    },
    methods: {
        selectCategory(event) {
          this.current_category = event.target.getAttribute('data-role');
        },
        getNews() {
          console.log('Get News Method called..', this.current_category);
        }
    },
    computed: {

    },
    components: {

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    h3 {
        color: mediumseagreen;
        background-color: #FFF;
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
    }
</style>
