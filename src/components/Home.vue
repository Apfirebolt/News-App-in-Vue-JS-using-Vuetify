<template>
    <div class="hello">
        <v-stepper v-model="e1" v-if="e1 < 4" :dark="true" class="my-3">
            <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">Search By Keywords</v-stepper-step>

                <v-divider>

                </v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">Country/Category</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">By Sources</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card
                            class="mb-12"
                            color="grey lighten-1"
                            height="200px"
                    >
                        <p class="p-3">You can modify search options in the search form field such as how many results to show on each
                            page and go to a specific page number.
                        </p>
                    </v-card>
                    <query-stepper></query-stepper>
                    <v-btn
                            color="primary"
                            @click="e1 = 2"
                    >
                        Continue
                    </v-btn>

                    <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card
                            class="mb-12"
                            color="grey lighten-1"
                            height="200px"
                            >
                        <p class="p-3">There are 50+ countries supported in the News API with news in 6 categories</p>
                        <category-stepper></category-stepper>
                    </v-card>
                    <country-stepper></country-stepper>
                    <v-btn
                            color="primary"
                            @click="e1 = 3"
                    >
                        Continue
                    </v-btn>

                    <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card
                            class="mb-12"
                            color="grey lighten-1"
                            height="200px"
                    >
                    <p class="p-3">
                        There are 100+ reliable and trusted news sources available, you can view all these sources by clicking
                        down below. So, check the list out.
                    </p>
                    </v-card>
                    <sources-stepper></sources-stepper>
                    <v-btn
                            color="primary"
                            @click="e1 = 4"
                    >
                        Continue
                    </v-btn>

                    <v-btn text>Cancel</v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
  import QueryStepper from '../components/stepper/query.vue';
  import SourcesStepper from '../components/stepper/sources.vue';
  import CountryStepper from '../components/stepper/country.vue';
  import CategoryStepper from '../components/stepper/category.vue';

  export default {
    name: 'home',
    data() {
      return {
        e1: 1
      }
    },
    components: {
      QueryStepper,
      SourcesStepper,
      CountryStepper,
      CategoryStepper
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
