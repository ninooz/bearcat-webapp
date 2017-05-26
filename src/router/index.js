var VueRouter = require('vue-router');

Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {
            path: '/navHeader',
            component: require('components/nav-header')
        },
        {
            path: '/newsHome',
            component: require('views/news-home')
        },
        {
            path: '/two',
            component: require('views/two')
        },
        {
            path: '/',
            component: require('views/prepare')
        },
        {
            path: '/login',
            component: require('views/login')
        }
    ]
});
module.exports = router;
