<template>
    <div class="title_contain">
        <div class="title_inner" v-if="!isStartTask">
            <div>
                <p class="task_name">拼多多任务</p>
                <p class="line">|</p>
                <p class="task_type">购物</p>
            </div>
            <div>
                <p class="store_name">王先生</p>
                <p class="store_icon">商</p>
            </div>
        </div>
        <div class="title_inner review" v-else>
            <div>
                <p>正在浏览商品关键字搜索页....</p>
                <p>倒计时
                    <span style="color:#d22f1c;">6</span> 秒</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainTitle",
        props: {
            isStartTask: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .title_contain {
        width: 7.18rem;
        margin: 0.22rem auto;
        height: 1.04rem;
        background-color: #fff;
        display: flex;
    }

    .title_inner {
        width: 6.7rem;
        margin: auto;
        display: flex;
    }

    .title_contain .title_inner > div {
        flex: 1;
        overflow: hidden;
    }

    .title_contain p {
        float: left;
        font: 0.29rem "Microsoft YaHei";
        height: 0.4rem;
        line-height: 0.4rem;
    }

    .title_contain .title_inner p.line {
        color: #2f91ef;
        margin: 0 0.15rem;
    }

    .title_contain .task_name {
        display: inline-block;
        font-weight: 900;
        color: #2f91ef;
        text-align: left;
    }

    .title_contain .task_type {
        display: inline-block;
        font-weight: 900;
        color: #ed7612;
        text-align: right;
    }

    .title_contain .title_inner > div:last-of-type p {
        float: right;
    }

    .title_contain .store_icon {
        width: 0.4rem;
        height: 0.4rem;
        line-height: 0.38rem !important;
        background-color: #ed7612;
        text-align: center;
        color: #fff;
        border-radius: 0.04rem;
    }

    .title_contain .store_name {
        color: #555555;
        padding-left: 0.15rem;
    }

    .review div {
        display: flex;
    }

    .review div p {
        flex: 1;
        text-align: left;
        font-size: 0.25rem;
        color: #4a4a4a;
    }

    .review div p:last-of-type {
        text-align: right;
    }

</style>