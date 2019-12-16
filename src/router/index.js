import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import CountryPage from '../pages/countries/countryPage.vue'
import Sources from '../pages/Sources.vue'
import KeywordComponent from '../pages/Keyword.vue'
import NewsPageComponent from '../pages/categories/newsPage.vue'
import CategoryList from '../components/category/categoryList.vue'


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
      path: '/about',
      name: 'about',
      component: CategoryList
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
