<template>
    <div class="container text-center">
        <h3 class="text-white m-3">
            Following Categories are available to segregate news based on a specific category..
        </h3>

        <button class="custom_btn">Business</button>
        <button class="custom_btn">Entertainment</button>
        <button class="custom_btn">Sports</button>
        <button class="custom_btn">Science</button>
        <button class="custom_btn">Health</button>
        <button class="custom_btn">Technology</button>
    </div>
</template>

<script>
  export default {
    name: 'category_component',
    data() {
      return {

      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .custom_btn {
        background: transparent;
        font-family: Inconsolata, sans-serif;
        font-size: 1.3rem;
        color: crimson;
        margin: 1rem;
        transition: all 0.3s ease-out;

        &:hover {
            color: seagreen;
            transition: all 0.3s ease-out;
        }
    }

</style>
