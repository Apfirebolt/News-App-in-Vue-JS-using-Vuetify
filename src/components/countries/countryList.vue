<template>
    <div class="hello">
        <div class="container">
            <div class="row">
                <div class="col-sm-4" v-for="each_country in countries">
                    <v-btn
                            color="orange"
                            :light="true"
                            min-width="150"
                    >
                        {{ each_country }}
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'country_list',
    data() {
      return {
        countries: ['Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Bulgaria', 'Canada', 'China',
          'Colombia', 'Cuba', 'Czech', 'Republic', 'Egypt', 'France', 'Germany', 'Greece', 'Hong', 'Kong', 'Hungary',
          'India', 'Indonesia', 'Ireland', 'Israel', 'Italy', 'Japan', 'Latvia', 'Lithuania', 'Malaysia', 'Mexico',
          'Morocco', 'Netherlands', 'New', 'Zealand', 'Nigeria', 'Norway', 'Philippines', 'Poland', 'Portugal',
          'Romania', 'Russia', 'Saudi', 'Arabia', 'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'South', 'Africa', 'South', 'Korea', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Turkey', 'UAE',
          'Ukraine', 'United Kingdom', 'United States', 'Venuzuela']
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
