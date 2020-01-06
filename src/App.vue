<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import "@/assets/js/fontsizeset";

    export default {
        name: 'app',
        components: {},
        mounted() {

        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
        line-height: 0;
    }

    html {
        /*height: 100%;*/
    }

    html, body, #app {
        min-height: 100%;
        height: 100%;
    }

    ul {
        list-style: none;
    }
</style>
