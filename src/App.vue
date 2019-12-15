<template>
  <div id="app">

    <nav class="navbar navbar-expand-sm bg-light">

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/test">Test</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/country">Countries</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Categories</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/sources">Sources</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/headlines">Headlines</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/keyword">Keyword</router-link>
        </li>
      </ul>
    </nav>
    <transition
            name="fade"
            mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  height: auto;
  min-height: 100vh;
  background-image: url('./assets/Python.png');
  background-repeat: repeat;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
