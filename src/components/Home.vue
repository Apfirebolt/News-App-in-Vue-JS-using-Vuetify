<template>
    <div class="hello">
        <v-stepper v-model="e1" v-if="e1 < 3" :dark="true" class="my-3">
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto consequatur eius ipsa ipsum laboriosam perspiciatis quam quas quibusdam sapiente.</p>
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
                    ></v-card>

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
                    ></v-card>

                    <v-btn
                            color="primary"
                            @click="e1 = 1"
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
  export default {
    name: 'home',
    data() {
      return {
        e1: 1
      }
    },
    components: {
      QueryStepper
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
