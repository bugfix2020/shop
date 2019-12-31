<template>
    <div class="item_contain">
        <div class="item">
            <p>交易金额</p>
            <p>88</p>
        </div>
        <div class="item">
            <p>交易用途</p>
            <p>任务结算</p>
        </div>
        <div class="item">
            <p>关联任务</p>
            <p>任务结算</p>
        </div>
        <div class="item">
            <p>资金来源</p>
            <p>任务结算</p>
        </div>
        <div class="item">
            <p>交易渠道</p>
            <p>任务结算</p>
        </div>
        <div class="item" style="border-bottom:none;">
            <p>交易状态</p>
            <p>任务结算</p>
        </div>
        <div class="item" style="margin-top: 0.3rem;">
            <p>发起时间</p>
            <p>任务结算</p>
        </div>
        <div class="item">
            <p>交易编号</p>
            <p>任务结算</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainItem"
    }
</script>

<style scoped>
    .item_contain {
        width: 7.5rem;
    }

    .item {
        width: 7rem;
        padding: 0 0.25rem;
        border-bottom: 0.01rem solid #e8e8e8;
        font: 0.29rem "Microsoft YaHei";
        display: flex;
        height: 0.92rem;
        background-color: #fff;
    }

    .item p {
        flex: 1;
        line-height: 0.92rem !important;
    }

    .item p:first-of-type {
        color: #333;
        text-align: left;
    }

    .item p:last-of-type {
        color: #989898;
        text-align: right;
    }
</style>