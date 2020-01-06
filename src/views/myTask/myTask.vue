<template>
    <div id="contain">
        <nav-bar>
            <p slot="left" @click="redirectIndex">
                <img src="@/assets/img/back_2.png"
                     style="width: 0.2rem;height: 0.38rem;margin: 0.27rem 0px 0px 0.17rem;">
            </p>
            <p slot="right"></p>
        </nav-bar>
        <main-header/>
        <main-tab :taskData="taskData"/>
    </div>
</template>

<script>
    import NavBar from "@/components/content/NavBar/NavBar";
    import MainHeader from "@/views/myTask/childComps/MainHeader";
    import MainTab from "@/views/myTask/childComps/MainTab";

    export default {
        name: "taskDetails",
        data() {
            return {
                taskData: []
            }
        },
        components: {
            NavBar,
            MainHeader,
            MainTab
        },
        methods: {
            /**
             * 路由 - 跳转首页
             */
            redirectIndex() {
                history.go(-1);
            }
        },
        created() {
            this.taskData = [
                {
                    id: 30291,
                    source: '拼多多任务',
                    type: '购物',
                    publishDate: '2019-11-15 19:21',
                    orderNum: 20191115004056,
                    price: 156,
                    reward: 9
                }
                , {
                    id: 30292,
                    source: '拼多多任务',
                    type: '购物',
                    publishDate: '2019-11-15 19:22',
                    orderNum: 20191115004057,
                    price: 158,
                    reward: 21
                },
                {
                    id: 30293,
                    source: '拼多多任务',
                    type: '购物',
                    publishDate: '2019-11-15 19:23',
                    orderNum: 20191115004058,
                    price: 988,
                    reward: 72
                }
            ];
        }
    }
</script>

<style scoped>
    #contain {
        background-color: #eef3f6;
        min-height: 100%;
    }
</style>