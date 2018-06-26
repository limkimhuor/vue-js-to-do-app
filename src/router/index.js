import Vue from 'vue'
import Router from 'vue-router'
import ToDoList from '@/components/ToDoList'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', alias: '/', component: HelloWorld },
    { path: '/to-do-list', name: 'ToDoList', component: ToDoList }
  ]
})
