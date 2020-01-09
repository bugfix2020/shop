<template>
    <div id="contain">
        <main-header></main-header>
        <main-form></main-form>
    </div>
</template>

<script>
    import {userLogin} from "@/network/login";

    import MainHeader from "@/views/login/childComps/MainHeader";
    import MainForm from "@/views/login/childComps/MainForm";

    export default {
        name: "login",
        data() {
            return {
                userLogin:null,
            }
        },
        components: {
            MainHeader,
            MainForm
        },
        mounted(){
            this.userLogin = userLogin;
        }
    }
</script>

<style scoped>
    #contain {
        width: 7.5rem;
        overflow: hidden;
        position: relative;
    }
</style>