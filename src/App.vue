<template>
  <div id="app">
    <navbar-component></navbar-component>
    <transition
            name="fade"
            mode="out-in"
    >
      <router-view></router-view>
    </transition>

    <footer-component class="my-5"></footer-component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavbarComponent from './components/common/navbar.vue'
import FooterComponent from './components/common/footer.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    NavbarComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
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
