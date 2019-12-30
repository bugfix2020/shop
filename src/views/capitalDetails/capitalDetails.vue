<template>
    <div id="contain">
        <nav-bar>
            <p slot="left" @click="redirectMerchantIndex">
                <img src="@/assets/img/back.png" style="margin: 0.29rem 0 0 0.17rem;width: 0.2rem;height: 0.34rem;">
            </p>
            <p slot="right"></p>
        </nav-bar>
        <main-search :revenue="revenue" :expend="expend"/>
    </div>
</template>

<script>
    import NavBar from "@/components/content/NavBar/NavBar";
    import MainSearch from "@/views/capitalDetails/childComps/MainSearch";

    export default {
        name: "capitalDetails",
        data() {
            return {
                revenue: 0,
                expend: 0
            }
        },
        methods: {
            /**
             * 路由 - 商户首页
             */
            redirectMerchantIndex() {
                history.go(-1);
            }
        },
        components: {
            NavBar,
            MainSearch
        },
        created() {
            this.revenue = 2000;
            this.expend = 1288;
        }
    }
</script>

<style scoped>
    #contain {
        background-color: #eef3f6;
    }
</style>