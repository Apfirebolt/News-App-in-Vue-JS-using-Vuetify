<template>
    <div class="hello">
        <h3 class="text-white m-3">
            List of Sources
        </h3>

        <div class="container text-center">
            <router-link :to="{ name: 'sources' }" class="bg-white text-success btn shadow">Sources</router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'sources_component',
    data() {
      return {

      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
