<template>
    <div class="hello">
        <h3 class="text-white m-3">
            List of Countries
        </h3>

        <div class="container text-center">
            <router-link :to="{ name: 'country' }" class="bg-white text-success btn shadow">Country List</router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'country_component',
    data() {
      return {

      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
