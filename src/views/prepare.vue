<template>
    <div class="content">
        <div class="prepare"></div>
        <div class="whatname" @click="nextStep">点我</div>
    </div>
</template>

<script>
    var self;
    module.exports = {
        data: function () {
            return {
            }
        },

        created: function () {
            self = this;
        },

        mounted: function () {
        },

        methods: {
            nextStep: function () {
                self.$router.push('two');
            }
        }
    };
</script>

<style scoped>
    .prepare {
        width: 100%;
        height: 100%;
        background: url('../assets/images/timg.jpg') no-repeat;
        background-size: 100% 100%;
    }
    .whatname {
        background-color: #9da0a4;
        color: #fff;
        position: fixed;
        top: 2rem;
        left: 50%;

    }
</style>
