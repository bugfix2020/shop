<template>
    <div id="contain">
        <nav-bar>
            <p slot="left" @click="redirectTaskDetails">
                <img src="@/assets/img/back_2.png"
                     style="width: 0.2rem;height: 0.38rem;margin: 0.27rem 0px 0px 0.17rem;">
            </p>
            <p slot="right"></p>
        </nav-bar>
        <main-base-info/>
        <main-pay/>
    </div>
</template>

<script>
    import NavBar from "@/components/content/NavBar/NavBar";
    import MainBaseInfo from "@/views/taskPay/childComps/MainBaseInfo";
    import MainPay from "@/views/taskPay/childComps/MainPay";

    export default {
        name: "taskPay",
        components: {
            NavBar,
            MainBaseInfo,
            MainPay
        },
        methods: {
            /**
             * 路由 - 返回任务详情
             */
            redirectTaskDetails() {
                history.go(-1);
            }
        }
    }
</script>

<style scoped>
    #contain{
        min-height: 100%;
        background-color: #eef3f6;
    }
</style>