/**
 * @author  sparkHou
 * @date 2021-04-14 16:46
 * @Description:
 */

import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {path: '/', component: () => import("../view/Home/Home.vue"), name: 'Home'},
]

const route = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
route.beforeEach((to, from, next) => {
  console.log(to, from, next)
  next()
})
export default route
