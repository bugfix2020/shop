<template>
    <div id="contain">
        <nav-bar>
            <p slot="left" @click="redirectMerchantIndex">
                <img src="@/assets/img/back.png" style="margin: 0.29rem 0 0 0.17rem;width: 0.2rem;height: 0.34rem;">
            </p>
            <p slot="right"></p>
        </nav-bar>
        <main-base-info/>
        <main-form/>
    </div>
</template>

<script>
    import NavBar from "@/components/content/NavBar/NavBar";
    import MainBaseInfo from "@/views/recharge/childComps/MainBaseInfo";
    import MainForm from "@/views/recharge/childComps/MainForm";

    export default {
        name: "recharge",
        components: {
            NavBar,
            MainBaseInfo,
            MainForm
        },
        methods: {
            /**
             * 路由 - 商户首页
             */
            redirectMerchantIndex() {
                history.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>