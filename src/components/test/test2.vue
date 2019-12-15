<template>
    <div class="hello">
        <h1 class="text-primary">The Test 2 Component</h1>

        <div>
            <p>Counter is: {{ doubleCounter }}</p>
            <p>Number of Clicks: {{ stringCounter }}</p>
        </div>

        <button class="btn btn-primary" @click="asyncInc({by: 50, duration: 500})">Increment</button>
        <v-btn text small color="primary" class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</v-btn>
    </div>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex';
  import * as types from '../../store/types';

  export default {
    methods: {
      ...mapActions({
        asyncInc: types.COUNTER_INCREMENT_ASYNC,
        asyncDecrement: types.COUNTER_DECREMENT_ASYNC
      })
    },
    computed: {
      ...mapGetters({
        doubleCounter: types.DOUBLE_COUNTER,
        stringCounter: types.CLICK_COUNTER
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


