<template>
    <div class="box">
        <div class="pic">

        </div>
        <a href="" class="email"></a>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box{
        height:10rem;
        background:#323232;
        padding-top:1.9rem;
    }
    .email{
        position:absolute;
        background:url('../assets/images/email.png') no-repeat;
        background-size:cover;
        width:1.15rem;
        height:0.9rem;
        top:1.6rem;
        right:1rem;
    }
    .pic{
        border-radius: 50%;
        border:0.3rem solid #898989;
        width:3.15rem;
        height:3.15rem;
        background:#aaa url('../assets/images/pic.png') no-repeat center;
        background-size:1.65rem 1.75rem;
        margin:auto;

    }


</style>
