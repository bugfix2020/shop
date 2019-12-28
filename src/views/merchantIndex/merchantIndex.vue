<template>
    <div id="contain">
        <nav-bar>
            <p slot="left"></p>
            <p slot="center">{{merchantName + $route.meta.title}}</p>
            <p slot="right"></p>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "@/components/content/NavBar/NavBar";

    export default {
        name: "merchantIndex",
        data() {
            return {
                merchantName: ''
            }
        },
        components: {
            NavBar
        },
        created() {
            this.merchantName = '拼多多';
        }
    }
</script>

<style scoped>
    #header {
        width: 100%;
        height: 3.59rem;
        margin-bottom: 0.8rem;
        background-size: cover;
        background: url("~@/assets/img/login/header_bg_merchant.png") no-repeat;
    }
</style>