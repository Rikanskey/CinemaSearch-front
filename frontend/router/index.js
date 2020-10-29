import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Content from "../views/Content";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/film/:url',
            name: 'Content',
            component: Content
        }
    ]
})

