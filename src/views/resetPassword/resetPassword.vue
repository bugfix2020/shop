<template>
    <div id="contain">
        <nav-bar>
            <p slot="left"></p>
            <p slot="right" @click="redirectLogin">登录</p>
        </nav-bar>
        <main-form></main-form>
    </div>
</template>

<script>
    import NavBar from "@/components/content/NavBar/NavBar";
    import MainForm from "@/views/resetPassword/childComps/MainForm";

    export default {
        name: "register",
        data() {
            return {
                redirectCurrentUrl: ''
            }
        },
        components: {
            NavBar,
            MainForm
        },
        methods: {
            /**
             * 路由 - 登录
             */
            redirectLogin() {
                this.$router.push('/login?identity=' + this.redirectCurrentUrl);
            }
        },
        mounted() {
            this.redirectCurrentUrl = this.$route.query.identity;
        }
    }
</script>

<style scoped>

</style>