import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index/index'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/index',
            name: 'index',
            component: Index
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})
