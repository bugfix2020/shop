<template>
    <div id="contain">
        <nav-bar>
            <p slot="left"></p>
            <p slot="center">{{$route.meta.title}}</p>
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
        components: {
            NavBar,
            MainForm
        },
        methods: {
            redirectLogin() {
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>

</style>