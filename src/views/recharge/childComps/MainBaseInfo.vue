<template>
    <div class="main_info">
        <div class="main_info_item">
            <p>开户银行：{{bankName}} </p>
            <p>开户网点：{{bankAddress}} </p>
            <p>开户人：{{bankAccount}} <span @click="copyBankInfo(bankAccount)">复制</span></p>
            <p>银行卡号：{{bankNumber}} <span @click="copyBankInfo(bankNumber)">复制</span></p>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "MainBaseInfo",
        data() {
            return {
                bankName: '中国建设银行',
                bankAddress: '贵州省贵阳市建设路支行',
                bankAccount: '贵州省裕耀乾福文化传媒有限公司',
                bankNumber: 666210288997452
            }
        },
        methods: {
            /**
             * 复制信息
             * @param text
             */
            copyBankInfo(text) {
                //vue-clipboard2坑的一逼 复制之后不报错 剪切板也没东西 还不如原生
                let tmpInput = document.createElement('textarea');
                tmpInput.value = text;
                document.body.appendChild(tmpInput);
                tmpInput.select();
                document.execCommand('copy');
                document.body.removeChild(tmpInput);
                Toast('复制成功！');
            }
        }
    }
</script>

<style scoped>
    .main_info {
        border-bottom: 0.2rem solid #e0e0e0;
    }

    .main_info_item {
        width: 6.76rem;
        margin: 0.3rem auto 0.5rem auto;
    }

    .main_info_item p {
        font: 0.3rem "Microsoft YaHei";
        color: #333331;
        line-height: 0.55rem;
    }

    .main_info_item p span {
        color: #fecf29;
        display: inline-block;
        padding-bottom: 0.02rem;
        text-decoration: underline;
    }
</style>