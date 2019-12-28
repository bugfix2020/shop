<template>
    <div id="header">
        <div class="item icon_item">
            <img src="@/assets/img/merchantIndex/merchant_icon.png" alt="" class="merchant_icon">
        </div>
        <div class="item">
            <p>
                <span>商户名称:</span> {{merchantData.name}}
            </p>
            <p>
                <span>店铺数 <strong> {{merchantData.shopsNum}}</strong></span>
                <span>商品数 <strong> {{merchantData.goodsNum}}</strong></span>
            </p>
            <p>
                <span>注册日期:</span> {{merchantData.registerDate}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainHeader",
        props: {
            merchantData: {
                type: Object,
                default() {
                    return {};
                }
            }
        }
    }
</script>

<style scoped>
    #header {
        width: 100%;
        height: 2.67rem;
        margin-bottom: 0.3rem;
        background: url("~@/assets/img/login/header_bg_merchant.png") no-repeat;
        background-size: 100% 100%;
    }

    .merchant_icon {
        width: 1.31rem;
        height: 1.22rem;
        float: left;
    }

    .item {
        padding-top: 0.45rem;
        float: left;
    }

    .icon_item {
        overflow: hidden;
        flex: 1;
        text-align: center;
        padding: 0.45rem 0.5rem 0 0.4rem;
    }

    .item p {
        font: 0.32rem "Microsoft YaHei";
        color: #000;
        line-height: 0.5rem !important;
    }

    .item span {
        display: inline-block;
        min-width: 1.5rem;
    }

    .item strong {
        font-weight: 900;
    }
</style>