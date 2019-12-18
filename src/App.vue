<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <a href="/b.html"></a>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import {Fn3} from '@/network/index';

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        mounted() {
            Fn3().then(res => {
                // eslint-disable-next-line no-console
                console.log(res);
            }).catch(res => {
                // eslint-disable-next-line no-console
                console.warn(res);
            })
            // Fn3().then(res=>{console.log(res);});
            // Fn3()[0].then(res => {
            //     // eslint-disable-next-line no-console
            //     console.log(res);
            // });

        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
