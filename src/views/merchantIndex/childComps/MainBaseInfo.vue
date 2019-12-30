<template>
    <div class="base_info">
        <div class="base_info_item">
            <label for="tel">手机号码</label>
            <input type="tel" readonly placeholder="手机号码" id="tel" :value="filterTel">
        </div>
        <div class="base_info_item">
            <label for="Bond">店铺保证金</label>
            <button id="send_sms" class="send_sms_user" @click="redirectRecharge">充值保证金</button>
            <input type="text" placeholder="店铺保证金" id="Bond" :value="merchantData.Bond" readonly>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainBaseInfo",
        data() {
            return {}
        },
        props: {
            merchantData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        computed: {
            filterTel() {
                return this.merchantData.tel.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3");
            }
        },
        methods: {
            /**
             * 路由 - 充值保证金
             */
            redirectRecharge() {
                this.$router.push('recharge');
            }
        }
    }
</script>

<style scoped>
    .base_info {
        border-bottom: 0.2rem solid #e0e0e0;
        padding-bottom: 0.4rem;
    }

    .base_info_item {
        width: 7.2rem;
        margin: 0 auto;
        height: 0.35rem;
        padding: 0.35rem 0;
        border-bottom: 0.01rem solid #ccc;
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

    .base_info .base_info_item:nth-of-type(2) input {
        width: 40%;
    }

    input::-webkit-input-placeholder,
    input:-moz-placeholder,
    input::-moz-placeholder,
    input:-ms-input-placeholder {
        font: 0.28rem "Microsoft YaHei";
        text-align: right;
    }

    #send_sms {
        width: 1.58rem;
        height: 0.6rem;
        line-height: 0.6rem !important;
        background-color: #fecf29;
        color: #333331;
        border: none;
        outline: none;
        border-radius: 0.1rem;
        float: right;
        margin-top: -0.1rem;
        margin-right: 0.2rem;
        margin-left: 0.15rem;
        cursor: pointer;
    }

    #sub {
        display: block;
        width: 5.7rem;
        height: 1rem;
        margin: 0.6rem auto 0 auto;
        line-height: 1rem !important;
        border: none;
        border-radius: 0.15rem;
        font: 0.33rem "Microsoft YaHei";
        outline: none;
    }

    /*主题色*/
    .sub_user {
        color: #fff;
        background-color: #3696ed;
    }

    /*主题色*/
    .sub_merchant {
        color: #000;
        background-color: #fecf29;
    }
</style>