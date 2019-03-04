import Vue from 'vue'
import Router from 'vue-router'
import Drag from '@/views/Drag'
import ChartJS from '@/views/ChartJS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Drag',
      component: Drag
    },
    {
      path: '/ChartJS',
      name: 'ChartJS',
      component: ChartJS
    }
  ]
})
