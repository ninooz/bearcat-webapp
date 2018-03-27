var VueRouter = require('vue-router');
Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: require('views/prepare')
        }
    ]
});
module.exports = router;