<template>
    <div>
        <nav class="content nav-header">
            <ul class="nav-header-list" :style="{width:UlWidth}">
                <li class="list-options" v-for="(option, index) in options" @click="location = index"><span :class="{'list-options-active': location == index}">{{option}}</span></li>
            </ul>
            <div class="icon-nav"><div class="list-options-icon"></div></div>
        </nav>
    </div>
</template>

<script>
    var self;
    module.exports = {
        data () {
            return {
                UlWidth: '',
                location: 0,
                options: []
            }
        },

        created: function () {
            self = this;
            self.options = ['推荐','热门','本地','观点','时局','财经','推荐','热门','本地','观点','时局','财经'];
        },

        mounted: function () {
            conputedTabBarWidth();
        },

        methods: {
            setActive: function (num) {
                self.location = num;
            }
        }
    };
    function conputedTabBarWidth () {
        var num = self.options.length;
        self.UlWidth = (num * 2.75 + 1.8) + 'rem';
    }
</script>

<style scoped>
    .nav-header {
        width: 100%;
        height: 2.25rem;
        background: #323232;
        position: fixed;
        top: 0;
    }

    .nav-header-list {
        width: 100%;
        height: 2.25rem;
        float: left;
        opacity: 0.69;
        font-family: PingHei-Text;
        font-size: .9rem;
        color: #BABABA;
        letter-spacing: -0.06px;
        padding: 0 0 0 .35rem;
        overflow-x: scroll;
    }

    .list-options {
        width: 2.75rem;
        height: 2.15rem;
        float: left;
        line-height: 2.15rem;
        text-align: center;
    }

    .list-options span {
        display: inline-block;
    }

    .icon-nav {
        width: 1.7rem;
        height: 2.25rem;
        position: fixed;
        background-color: #323232;
        top: 0;
        right: 0;
        line-height: 2.25rem;
        text-align: center;
        border-left: 1px solid #464456;
    }

    .list-options-active {
        border-bottom: 2px solid #54A3FF;
        color: #FFFFFF;
    }

    .list-options-icon {
        width: .9rem;
        height: .7rem;
        padding-top: 1.35rem;
        display: inline-block;
        background: url('../assets/images/unfold.png') no-repeat 100% 100%;
        background-size: 100%;
    }
</style>
