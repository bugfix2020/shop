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

    html, body, #app {
        height: 100%;
    }

    ul {
        list-style: none;
    }
</style>
