<template>
    <nav class="navbar navbar-expand-sm">

        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/country">Countries</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/sources">Sources</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/keyword">Keyword</router-link>
            </li>
        </ul>
    </nav>
</template>



<script>
  export default {
    name: 'navbar',
    data() {
      return {

      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .navbar-expand-sm {
        display: flex;
        justify-content: center !important;
        background: transparent;

        .nav-link {
            color: #FFF;
            font-family: Verdana, sans-serif;
            font-size: 1.3rem;
            margin-left: 1rem;
            margin-right: 1rem;
            transition: all 1s ease-in-out;

            &:hover {
                border-bottom: 1px solid crimson;
                padding-bottom: 0.5rem;
                transition: all 1s ease-out;
            }
        }
    }
</style>
