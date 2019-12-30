<template>
    <div class="form_info">
        <div class="form_info_item">
            <p>请输入汇款信息</p>
        </div>
        <div class="form_info_item">
            <label>汇款金额</label>
            <input type="number" placeholder="请输入汇款金额" v-model.trim.number="remitNumber" id="money">
        </div>
        <div class="form_info_item">
            <label>汇款人</label>
            <input type="text" placeholder="请输入汇款人姓名" v-model.trim="remitName">
        </div>
        <button class="button" id="sub" @click="recharge">提交汇款信息</button>
        <button class="button" id="details" @click="redirectDetails">资金明细</button>
    </div>
</template>

<script>
    export default {
        name: "MainForm",
        data() {
            return {
                remitNumber: '',
                remitName: ''
            }
        },
        methods: {
            /**
             * 汇款
             */
            recharge() {

            },
            /**
             * 路由 - 资金明细
             */
            redirectDetails() {
                this.$router.push('/capitalDetails');
            }
        }
    }
</script>

<style scoped>
    .form_info {
    }

    .form_info_item {
        width: 7.2rem;
        margin: 0 auto;
        height: 0.35rem;
        padding: 0.35rem 0;
        border-bottom: 0.01rem solid #ccc;
    }

    .form_info .form_info_item p {
        font: 0.31rem "Microsoft YaHei";
        color: #333331;
        float: left;
        margin-left: 0.24rem;
    }

    .form_info .form_info_item label {
        font: 0.31rem "Microsoft YaHei";
        color: #333331;
        float: left;
        margin-left: 0.24rem;
    }

    .form_info .form_info_item input {
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

    .button {
        display: block;
        width: 5.7rem;
        height: 0.8rem;
        margin: 0.6rem auto 0 auto;
        line-height: 0.8rem !important;
        border: none;
        border-radius: 0.15rem;
        font: 0.33rem "Microsoft YaHei";
        outline: none;
    }

    #sub {
        background-color: #fecf29;
        color: #000;
    }

    #details {
        margin-top: 0.3rem;
        background-color: #7e7e7e;
        color: #ffffff;
    }
</style>