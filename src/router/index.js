import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import two from '@/views/two'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/Hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/two',
            component: require('views/two')
            // component: two
        },
        {
            path: '/',
            component: require('views/prepare')
        },
    ]
})
