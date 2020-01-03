<template>
    <div id="contain">
        <nav-bar>
            <p slot="left" @click="redirectMyTask">
                <img src="@/assets/img/back_2.png"
                     style="width: 0.2rem;height: 0.38rem;margin: 0.27rem 0px 0px 0.17rem;">
            </p>
            <p slot="right"></p>
        </nav-bar>
        <main-title :isStartTask="isStartTask"/>
        <main-item @startTask="startTask"/>
    </div>
</template>

<script>
    import NavBar from "@/components/content/NavBar/NavBar";
    import MainTitle from "@/views/taskDetails/childComps/MainTitle";
    import MainItem from "@/views/taskDetails/childComps/MainItem";

    export default {
        name: "taskDetails",
        data() {
            return {
                isStartTask: false
            }
        },
        components: {
            NavBar,
            MainTitle,
            MainItem
        },
        methods: {
            /**
             * 路由 - 返回到任务列表
             */
            redirectMyTask() {
                history.go(-1);
            },
            startTask(flag) {
                this.isStartTask = flag;
            },
        }
    }
</script>

<style scoped>
    #contain {
        background-color: #eef3f6;
        min-height: 100%;
    }
</style>