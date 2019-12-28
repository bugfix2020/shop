<template>
    <div id="contain">
        <nav-bar>
            <p slot="left"/>
            <p slot="center">{{merchantData.merchantName + $route.meta.title}}</p>
            <p slot="right"/>
        </nav-bar>
        <main-header :merchantData="merchantData"/>
        <main-base-info :merchantData="merchantData"/>
        <main-shops-info :shopsData="shopsData"/>
    </div>
</template>

<script>
    import NavBar from "@/components/content/NavBar/NavBar";
    import MainHeader from "@/views/merchantIndex/childComps/MainHeader";
    import MainBaseInfo from "@/views/merchantIndex/childComps/MainBaseInfo";
    import MainShopsInfo from "@/views/merchantIndex/childComps/MainShopsInfo";

    export default {
        name: "merchantIndex",
        data() {
            return {
                merchantData: {},
                shopsData: []
            }
        },
        components: {
            NavBar,
            MainHeader,
            MainBaseInfo,
            MainShopsInfo
        },
        created() {
            this.merchantData = {
                id: 1,
                name: '王峰 (wangfeng)',
                shopsNum: 1,
                goodsNum: 22,
                registerDate: '2019-11-11',
                merchantName: '拼多多',
                tel: '18833334444',
                Bond: 50000
            };

            this.shopsData = [
                {id: 1, name: '洋洋明媚箱包店', num: 10000},
                {id: 2, name: '天天文具店', num: 0}
            ];
        }
    }
</script>
<!--merchant_icon.png-->
<style scoped>
    #contain {
        width: 7.5rem;
        overflow: hidden;
        position: relative;
    }
</style>