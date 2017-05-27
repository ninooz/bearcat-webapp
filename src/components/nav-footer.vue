<template>
    <div class="nav-footer">
        <div class="nav-footer-options" @click="active = 0">
            <span class="news-icon" :class="{'news-icons': active == 0}"></span>
            <div :class="{'txt-active': active == 0}">新闻</div>
        </div>
        <div class="nav-footer-options" @click="active = 1">
            <span class="discover-icon" :class="{'discover-icons': active == 1}"></span>
            <div :class="{'txt-active': active == 1}">发现</div>
        </div>
        <div class="nav-footer-options" @click="active = 2">
            <span class="mine-icon" :class="{'mine-icons': active == 2}"></span>
            <div :class="{'txt-active': active == 2}">我的</div>
        </div>
    </div>
</template>

<script>
    var self;
    module.exports = {
        data () {
            return {
                active: 0
            }
        },

        created: function () {
            self = this;
        },

        mounted: function () {
        },

        methods: {
            setActive: function (num) {
                self.active = num;
            }
        }
    }
</script>

<style scoped>
    .nav-footer {
        width: 100%;
        height: 2.35rem;
        background-color: #FFFFFF;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index:1000;
        padding: 0 .7rem;
    }

    .nav-footer-options {
        width: 33.3%;
        height: 2.35rem;
        overflow: hidden;
        float: left;
        text-align: center;
    }

    .nav-footer-options div {
        font-family: PingHei-Text;
        font-size: .55rem;
        color: #BDBDBD;
        letter-spacing: -0.04px;
    }

    .nav-footer-options span {
        width: 1rem;
        height: 1.3rem;
        display: inline-block;
        background-size: 100%;
    }

    .news-icon {
        background: url('../assets/images/news.png') no-repeat 100% 100%;
    }

    .news-icons {
        background: url('../assets/images/news1.png') no-repeat 100% 100%;
    }

    .discover-icon {
         background: url('../assets/images/discover.png') no-repeat 100% 100%;
     }

    .discover-icons {
        background: url('../assets/images/discover1.png') no-repeat 100% 100%;
    }

    .mine-icon {
        background: url('../assets/images/mine.png') no-repeat 100% 100%;
    }

    .mine-icons {
        background: url('../assets/images/mine1.png') no-repeat 100% 100%;
    }

    .nav-footer-options .txt-active {
        color: #54A3FF;
    }
</style>
