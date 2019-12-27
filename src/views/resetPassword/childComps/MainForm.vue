<template>
    <div class="form">
        <div class="form_item">
            <label for="tel">手机号码</label>
            <button id="send_sms" @click="sendSms">获取验证码{{waitTime | addText}}</button>
            <input type="tel" placeholder="请输入手机号码" id="tel" v-model.number.trim="tel">
        </div>
        <div class="form_item">
            <label for="verifyCode">验证码</label>
            <input type="text" placeholder="请输入验证码" id="verifyCode" v-model.trim="verifyCode">
        </div>
        <div class="form_item">
            <label for="password">新密码</label>
            <input type="password" placeholder="请输入新登录密码" id="password" v-model.trim="password">
        </div>
        <div class="form_item">
            <label for="repeatPassword">重复新密码</label>
            <input type="password" placeholder="重复输入新登录密码" id="repeatPassword" v-model.trim="repeatPassword">
        </div>
        <button class="sub" @click="reset">重置密码</button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "MainForm",
        data() {
            return {
                tel: '',
                verifyCode: '',
                password: '',
                repeatPassword: '',
                inviteCode: '',
                confirm: false,
                waitTime: 0
            }
        },
        methods: {
            /**
             * 重置密码
             * @returns {boolean}
             */
            reset() {
                if (!this.checkDataComplete()) {
                    return false;
                }
                alert('okk');
                //todo 发送请求
            },
            /**
             * 发送短信验证码
             * @returns {boolean}
             */
            sendSms() {
                if (!/^1[3-9][2-9]\d{8}/.test(this.tel)) {
                    Toast('手机号码不合法');
                    return false;
                }

                //由于setInterval会带入window对象所以在外声明this
                let that = this;
                //倒计时未结束不在执行发送验证码操作
                if (that.waitTime !== 0) {
                    return false;
                }

                //获取dom对象 更改样式
                let el = document.getElementById('send_sms');
                el.style.color = '#999';
                el.style.backgroundColor = '#d8d8d8';
                el.style.cursor = 'not-allowed';

                //指定倒计时时间
                that.waitTime = 60;
                let handle = setInterval(function () {
                    that.waitTime--;
                    if (that.waitTime == 0) {
                        //倒计时结束 清除定时器
                        clearInterval(handle);
                        //恢复样式
                        el.style.color = '#fff';
                        el.style.backgroundColor = '#3696ed';
                        el.style.cursor = 'pointer';
                        return false;
                    }
                }, 1000);
            },
            /**
             * 校验数据完整性
             * @returns {boolean}
             */
            checkDataComplete() {
                if (!/^1[3-9][2-9]\d{8}/.test(this.tel)) {
                    Toast('手机号码不合法');
                    return false;
                }

                if (!this.verifyCode) {
                    Toast('验证码不能为空');
                    return false;
                }

                if (!this.password) {
                    Toast('密码不能为空,且不能包含空格');
                    return false;
                }

                if (!this.repeatPassword) {
                    Toast('请重复输入登录密码');
                    return false;
                }

                if (this.password !== this.repeatPassword) {
                    Toast('两次输入的密码不一致');
                    return false;
                }

                return true;
            }
        },
        filters: {
            addText(time) {
                if (!time) {
                    return '';
                }
                return '  (' + time + ')秒';
            }
        }
    }
</script>

<style scoped>
    .form {
    }

    .form_item {
        width: 7.2rem;
        margin: 0 auto;
        height: 0.35rem;
        padding: 0.35rem 0;
        border-bottom: 0.01rem solid #ccc;
    }

    .form .form_item label {
        font: 0.31rem "Microsoft YaHei";
        color: #333331;
        float: left;
    }

    .form .form_item input {
        width: 75%;
        float: right;
        font: 0.28rem "Microsoft YaHei";
        outline: none;
        border: none;
        text-align: right;
    }

    .form .form_item:first-of-type input {
        width: 44%;
    }

    input::-webkit-input-placeholder,
    input:-moz-placeholder,
    input::-moz-placeholder,
    input:-ms-input-placeholder {
        font: 0.28rem "Microsoft YaHei";
        text-align: right;
    }

    #send_sms {
        width: 2.2rem;
        height: 0.6rem;
        line-height: 0.6rem !important;
        color: #fff; /*#999*/
        background-color: #3696ed; /*#d8d8d8*/
        border: none;
        outline: none;
        border-radius: 0.1rem;
        float: right;
        margin-top: -0.06rem;
        margin-left: 0.15rem;
        cursor: pointer;
    }

    .sub {
        display: block;
        width: 5.7rem;
        height: 1rem;
        margin: 0.6rem auto 0 auto;
        line-height: 1rem !important;
        color: #fff;
        background-color: #3696ed;
        border: none;
        border-radius: 0.15rem;
        font: 0.33rem "Microsoft YaHei";
        outline: none;
    }
</style>