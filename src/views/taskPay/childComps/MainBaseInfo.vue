<template>
    <div class="base_info">
        <div class="base_info_item">
            <label>任务编号</label>
            <input type="number" readonly="readonly" value="20191112968745">
        </div>
        <div class="base_info_item">
            <label>支付金额</label>
            <input type="number" readonly="readonly" value="155">
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainBaseInfo"
    }
</script>

<style scoped>
    .base_info {
        background-color: #fff;
        margin: 0.25rem 0;
    }

    .base_info_item {
        width: 7.2rem;
        margin: 0 auto;
        height: 0.35rem;
        padding: 0.35rem 0;
        border-bottom: 0.01rem solid #ccc;
    }

    .base_info_item:last-of-type {
        border: none;
    }

    .base_info .base_info_item p {
        font: 0.31rem "Microsoft YaHei";
        color: #333331;
        float: left;
        margin-left: 0.24rem;
    }

    .base_info .base_info_item label {
        font: 0.31rem "Microsoft YaHei";
        color: #333331;
        float: left;
        margin-left: 0.24rem;
    }

    .base_info .base_info_item input {
        width: 70%;
        float: right;
        font: 0.28rem "Microsoft YaHei";
        outline: none;
        border: none;
        text-align: right;
        margin-right: 0.3rem;
    }

    input::placeholder {
        color: #ccc;
    }
</style>