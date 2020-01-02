<template>
    <div class="header_contain">
        <div class="header_inner">
            <p class="title">做任务 赚现金</p>
            <div class="taskLevel">
                <img src="@/assets/img/myTask/task_icon.png" style="width: 0.4rem;height: 0.4rem;">
                <p>创客星级</p>
                <p>
                    <img src="@/assets/img/myTask/star.png" style="width: 0.26rem;height: 0.39rem;" v-for="i in 5" :key="i">
                </p>
                <p>[详情]</p>
            </div>
            <div class="taskLevel" style="margin-top: 0.1rem;">
                <img src="@/assets/img/myTask/task_icon.png" style="width: 0.4rem;height: 0.4rem;">
                <p>今日任务上限15个</p>
                <p>[剩余4个]</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainItem"
    }
</script>

<style scoped>
    .header_contain {
        width: 7.5rem;
        height: 2.57rem;
        background: url("~@/assets/img/myTask/header_background.png") no-repeat;
        background-size: cover;
    }

    .header_inner .title {
        font: 0.38rem "Microsoft YaHei";
        color: #fff;
        padding: 0.38rem 0 0.3rem 0.45rem;
    }

    .taskLevel {
        display: flex;
        font: 0.26rem "Microsoft YaHei";
        color: #ffffff;
        margin-left: 1.95rem;
    }

    .taskLevel p {
        margin-left: 0.13rem;
    }

    .taskLevel p, .taskLevel img {
        float: left;
        line-height: 0.4rem;
    }
</style>