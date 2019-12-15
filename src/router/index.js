import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Test from '../components/test/test.vue'
import Test2 from '../components/test/test2.vue'
import CountryPage from '../pages/countries/countryPage.vue'
import Sources from '../pages/Sources.vue'
import KeywordComponent from '../pages/Keyword.vue'
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
      component: CountryPage
    },

    {
      path: '/sources',
      name: 'sources',
      component: Sources
    },

    {
      path: '/keyword',
      name: 'keyword',
      component: KeywordComponent
    },

    {
      path: '/headlines/:country',
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
