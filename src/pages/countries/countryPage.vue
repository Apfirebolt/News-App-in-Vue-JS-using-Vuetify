<template>
    <div class="hello">

        <h3 class="text-success bg-white shadow p-2">News From Following Countries are available</h3>
        <country-component></country-component>
    </div>
</template>

<script>
  import CountryComponent from '../../components/countries/countryList.vue';
  export default {
    name: 'country_page',
    data() {
      return {

      }
    },
    components: {
      CountryComponent
    }
  }
</script>

<style scoped>
    h3 {
        font-family: "Lucida Sans Unicode", sans-serif;
    }
</style>
