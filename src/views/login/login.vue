<template>
    <div id="contain">
        <main-header></main-header>
        <main-form></main-form>
    </div>
</template>

<script>
    import MainHeader from "@/views/login/childComps/MainHeader";
    import MainForm from "@/views/login/childComps/MainForm";

    export default {
        name: "login",
        data() {
            return {}
        },
        components: {
            MainHeader,
            MainForm
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