<template>
    <div class="hello">
        <div class="container">
            <div class="row">
                <div class="col-sm-4" v-for="each_country in country_codes">
                    <router-link :to="{ name: 'headlines',
                    params: { country: each_country.country_name }, query: { country_data: each_country }
                }" class="btn nav-link" :value="each_country">
                        {{ each_country.country_name }}
                    </router-link>
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
          'Colombia', 'Cuba', 'Czech Republic', 'Egypt', 'France', 'Germany', 'Greece', 'Hong', 'Kong', 'Hungary',
          'India', 'Indonesia', 'Ireland', 'Israel', 'Italy', 'Japan', 'Latvia', 'Lithuania', 'Malaysia', 'Mexico',
          'Morocco', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Philippines', 'Poland', 'Portugal',
          'Romania', 'Russia', 'Saudi', 'Arabia', 'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'South', 'Africa', 'South', 'Korea', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Turkey', 'UAE',
          'Ukraine', 'United Kingdom', 'United States', 'Venuzuela'],
        country_codes: [
          {country_name: 'Argentina', country_code: 'ar'},
          {country_name: 'Australia', country_code: 'au'},
          {country_name: 'Austria', country_code: 'at'},
          {country_name: 'Belgium', country_code: 'be'},
          {country_name: 'Brazil', country_code: 'br'},
          {country_name: 'Bulgaria', country_code: 'bg'},
          {country_name: 'Canada', country_code: 'ca'},
          {country_name: 'China', country_code: 'cn'},
          {country_name: 'Colombia', country_code: 'co'},
          {country_name: 'Cuba', country_code: 'cu'},
          {country_name: 'Czech Republic', country_code: 'cz'},
          {country_name: 'Egypt', country_code: 'eg'},
          {country_name: 'France', country_code: 'fr'},
          {country_name: 'Germany', country_code: 'de'},
          {country_name: 'Greece', country_code: 'de'},
          {country_name: 'Hong Kong', country_code: 'de'},
          {country_name: 'Hungary', country_code: 'de'},
          {country_name: 'India', country_code: 'in'},
          {country_name: 'Indonesia', country_code: 'id'},
          {country_name: 'Ireland', country_code: 'ie'},
          {country_name: 'Israel', country_code: 'il'},
          {country_name: 'Italy', country_code: 'it'},
          {country_name: 'Japan', country_code: 'jp'},
          {country_name: 'Latvia', country_code: 'de'},
          {country_name: 'Lithuania', country_code: 'de'},
          {country_name: 'Malaysia', country_code: 'de'},
          {country_name: 'Mexico', country_code: 'de'},
          {country_name: 'Morocco', country_code: 'de'},
          {country_name: 'Netherlands', country_code: 'de'},
          {country_name: 'New Zealand', country_code: 'nz'},
          {country_name: 'Nigeria', country_code: 'de'},
          {country_name: 'Norway', country_code: 'de'},
          {country_name: 'Philippines', country_code: 'de'},
          {country_name: 'Poland', country_code: 'de'},
          {country_name: 'Portugal', country_code: 'de'},
          {country_name: 'Romania', country_code: 'de'},
          {country_name: 'Russia', country_code: 'de'},
          {country_name: 'Saudi Arabia', country_code: 'de'},
          {country_name: 'Serbia', country_code: 'rs'},
          {country_name: 'Singapore', country_code: 'sg'},
          {country_name: 'Slovakia', country_code: 'sk'},
          {country_name: 'Slovenia', country_code: 'si'},
          {country_name: 'South Africa', country_code: 'za'},
          {country_name: 'South Korea', country_code: 'kr'},
          {country_name: 'Sweden', country_code: 'se'},
          {country_name: 'Switzerland', country_code: 'ch'},
          {country_name: 'Taiwan', country_code: 'tw'},
          {country_name: 'Thailand', country_code: 'th'},
          {country_name: 'Turkey', country_code: 'tr'},
          {country_name: 'UAE', country_code: 'ae'},
          {country_name: 'Ukraine', country_code: 'ua'},
          {country_name: 'United Kingdom', country_code: 'uk'},
          {country_name: 'United States', country_code: 'us'},
          {country_name: 'Venuzuela', country_code: 've'},
        ]
      }

    },
    methods: {
      countryClicked() {
        console.log('Event target value : ', event.target.value);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .nav-link {
        min-width: 150px;
        font-family: "Lucida Sans Unicode", sans-serif;
        border: none;
        background-color: azure !important;
        width: 60%;
        margin: auto;

        &:hover {
            background-color: mediumseagreen !important;
            color: mintcream !important;
            transition: all 0.4s ease-out;
        }
    }
</style>
