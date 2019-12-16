<template>
    <v-footer
            dark
            padless
    >
        <v-card
                flat
                tile
                class="indigo lighten-1 white--text text-center"
        >

            <v-card-text class="white--text pt-0">
                 <h4 class="text-white p-3">Feed yourself daily with your dose of news spanning through muiltiple
                 countries and categories using this app powered by Vuetify and build using Vue js.
                 </h4>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>News Flash @2019</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
  export default {
    name: 'footer',
    data() {
      return {

      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
