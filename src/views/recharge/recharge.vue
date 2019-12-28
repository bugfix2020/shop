<template>
    <div id="contain">
        <nav-bar>
            <p slot="left">&lt;</p>
            <p slot="center"></p>
            <p slot="right"></p>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "@/components/content/NavBar/NavBar";

    export default {
        name: "recharge",
        components: {
            NavBar
        }
    }
</script>

<style scoped>

</style>