<template>
    <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col class="text-center" cols="12">
                <h2 class="display-1 font-weight-thin my-4">Application made in Vuetify.js</h2>
                <h4 class="subheading">This has news feed options in categories like Science, Technology
                    ,Entertainment, Sports and Health!</h4>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
  export default {
    name: 'category_list_component',
    data() {
      return {

      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
