<template>
    <div class="pay_info">
        <div class="pay_info_item">
            <p>支付方式</p>
        </div>
        <div class="pay_info_item">
            <label class="wx_pay_icon">微信支付</label>
            <input type="radio" name="pay_type" checked="checked">
        </div>
        <div class="pay_info_item" style="border: none;">
            <label class="ali_pay_icon">支付宝支付</label>
            <input type="radio" name="pay_type">
        </div>
        <div class="button_contain">
            <button class="button" @click="pay">提交汇款信息</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainPay",
        methods: {
            pay() {
                //todo 支付
                this.$toast('支付');
            }
        }
    }
</script>

<style>
    .pay_info {
        background-color: #fff;
    }

    .pay_info .pay_info_item {
        width: 7.2rem;
        margin: 0 auto;
        height: 0.35rem;
        padding: 0.35rem 0;
        border-bottom: 0.01rem solid #ccc;
    }

    .pay_info .pay_info_item p {
        font: 0.31rem "Microsoft YaHei";
        color: #333331;
        float: left;
        margin-left: 0.24rem;
    }

    .pay_info .pay_info_item label {
        font: 0.31rem "Microsoft YaHei";
        color: #333331;
        float: left;
        margin-left: 0.24rem;
        padding-left: 0.6rem;
        background-repeat: no-repeat;
        background-size: 0.44rem 0.44rem;
        background-position: left center;
    }

    .pay_info .pay_info_item label.wx_pay_icon {
        background-image: url('~@/assets/img/taskPay/wx_pay.png');
    }

    .pay_info .pay_info_item label.ali_pay_icon {
        background-image: url('~@/assets/img/taskPay/ali_pay.png');
    }

    .pay_info .pay_info_item input {
        width: auto;
        float: right;
        font: 0.28rem "Microsoft YaHei";
        outline: none;
        border: none;
        margin-right: 0.3rem;
        display: block;
        height: 100%;
    }

    input::placeholder {
        color: #ccc;
    }

    .button_contain {
        float: left;
        width: 100%;
    }

    .button {
        display: block;
        width: 5.7rem;
        height: 0.8rem;
        margin: 0.88rem auto 0 auto;
        line-height: 0.8rem !important;
        border: none;
        border-radius: 0.15rem;
        font: 0.33rem "Microsoft YaHei";
        outline: none;
        background-color: #3696ed;
        color: #ffffff;
    }
</style>