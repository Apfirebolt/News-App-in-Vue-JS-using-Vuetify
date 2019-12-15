import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Test from '../components/test/test.vue'
import Test2 from '../components/test/test2.vue'
import Test3 from '../components/test/test3.vue'
import Sources from '../components/source'
import NewsPageComponent from '../pages/categories/newsPage.vue'
// import TestRouteChildren from '../components/test/routes'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/about',
      name: 'about',
      component: Test2
    },

    {
      path: '/country',
      name: 'country',
      component: Test3
    },

    {
      path: '/sources',
      name: 'sources',
      component: Sources
    },

    {
      path: '/headlines',
      name: 'headlines',
      component: NewsPageComponent
    },

    // {
    //   path: '/test',
    //   name: 'test',
    //   component: Test,
    //   children: TestRouteChildren
    // },
  ]
})
