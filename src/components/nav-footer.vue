<template>
    <div class="">
        <div class="nav-footer">
            <div class="nav-footer-options"><span class="news-icon"></span></div>
            <div class="nav-footer-options"><span class="discover-icon"></span></div>
            <div class="nav-footer-options"><span class="mine-icon"></span></div>
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
        position: fixed;
        bottom: 0;
    }

    .nav-footer-options {
        width: 33.3%;
    }

    .news-icon {

    }
</style>
