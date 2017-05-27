<template>
    <div class="hello">
        <div class="main">
        <headers></headers>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h2>这是自定义的内容</h2>
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
        <input type="text" v-model="options" @keyup.enter="addNew">
        <input type="text">
        <p>{{ msg }}</p><p>{{ msg }}</p><p>{{ msg }}</p><p>{{ msg }}</p>
        <ul>
            <li v-for="item in items">{{item}}</li>
        </ul>
        </div>
        <footers></footers>
    </div>
</template>

<script>
    var self;
    var utils = require('utils/utils');
    var footers = require('components/nav-footer');
    var headers = require('components/nav-header');
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                options: '',
                items: [],
                item: ''
            }
        },
        created: function () {
            self = this;
        },
        watch: {
            'items': function (items) {
                utils.setItems(self.items);
            }
        },
        mounted: function () {
//            console.log(utils);
            var it = [];
            it = utils.getItems();
            if (it.length > 0) {
                self.item = it.split(',');
                for (var i = 0; i < self.item.length; i++) {
                    self.items.push(self.item[i]);
                }
            }
        },
        methods: {
            addNew: function () {
                self.items.push(self.options);
                self.options = '';
            }
        },
        components: {
            footers: footers,
            headers: headers
        }
    }
</script>

<style scoped>
    .hello{
        position: relative;
    }

    .main{
        overflow: scroll;
    }
</style>
