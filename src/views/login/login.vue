<template>
    <div id="contain">
        <div id="header">
            <p>欢迎登录</p>
            <p>嘻唰唰创客平台</p>
        </div>
        <div class="merchant_login" @click="merchantLogin">
            <p>商户登录 &gt;</p>
        </div>
        <div class="form">
            <div>
                <i class="tel_icon"></i>
                <div class="input_contain">
                    <input type="text" name="tel" autocapitalize="off" v-model.number.trim="tel" placeholder="输入手机号">
                </div>
            </div>
            <div>
                <i class="password_icon"></i>
                <div class="input_contain">
                    <input type="password" name="password" autocomplete="off" v-model.trim="password"
                           placeholder="输入6-16位字母或数字的组合">
                </div>
            </div>
            <label for="remember" class="remember">
                <input type="checkbox" id="remember" v-model="remember"/>
                <span>记住用户名和密码</span>
            </label>
            <button class="sub" @click="login">登录</button>
            <div class="other">
                <p @click="clearCache">清理缓存</p>
                <p @click="redirectResetPassword">忘记登录密码?</p>
            </div>
        </div>
        <p class="register" @click="register">创客入驻</p>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        name: "login",
        data() {
            return {
                tel: '',
                password: '',
                remember: false
            }
        },
        methods: {
            login() {
                //登录
                if (!this.checkDataComplete()) {
                    return false;
                }
                alert('登录');
            },
            clearCache() {
                //清理缓存
            },
            /**
             * 路由 - 进入找回密码页
             */
            redirectResetPassword() {
                this.$router.push('/resetPassword')
            },
            register() {
                //创客入驻
                this.$router.push('/register');
            },
            merchantLogin() {
                //商家登录
                setTimeout(() => {
                    alert('清除缓存成功')
                }, Math.random() * 10000)
            },
            /**
             * 检查数据完整性
             * @returns {boolean}
             */
            checkDataComplete() {
                if (!this.tel) {
                    Toast('手机号码不能为空');
                    return false;
                }

                if (!this.password) {
                    Toast('密码不能为空');
                    return false;
                }

                if (this.remember) {
                    let data = {tel: this.tel, password: this.password};
                    localStorage.setItem('userInfo', JSON.stringify(data));
                } else {
                    localStorage.removeItem('userInfo');
                }

                return true;
            }
        },
        created() {
            let userInfo = localStorage.getItem('userInfo');
            if (userInfo) {
                let {tel, password} = JSON.parse(userInfo);
                this.tel = tel;
                this.password = password;
                this.remember = true;
            }
        }
    }
</script>

<style scoped>
    #contain {
        width: 7.5rem;
        overflow: hidden;
        position: relative;
    }

    #contain #header {
        width: 100%;
        height: 3.59rem;
        margin-bottom: 0.8rem;
        background: url("~@/assets/img/login/header_background.png") no-repeat;
        background-size: cover;
    }

    #contain #header p {
        font-family: "Microsoft YaHei";
        color: #fff;
        text-align: center;
        line-height: normal;
    }

    #contain #header p:first-of-type {
        padding-top: 1.1rem;
        padding-bottom: 0.3rem;
        font-size: 0.55rem;
    }

    #contain #header p:last-of-type {
        font-size: 0.33rem;
    }

    .merchant_login {
        width: 1.67rem;
        border-top-left-radius: 0.45rem;
        border-bottom-left-radius: 0.45rem;
        background-color: #fff;
        position: absolute;
        right: 0;
        top: 0.35rem;
    }

    .merchant_login p {
        height: 0.64rem;
        line-height: 0.64rem !important;
        color: #2487f7;
        font: 0.25rem "Microsoft YaHei";
        text-align: right;
        padding-right: 0.13rem;
    }

    .form {
        width: 6rem;
        margin: 0 auto;
    }

    .tel_icon, .password_icon {
        display: block;
        width: 0.76rem;
        height: 0.54rem;
        background-size: cover;
        background-repeat: no-repeat;
        float: left;
    }

    .tel_icon {
        background-image: url("~@/assets/img/login/tel.png");
    }

    .password_icon {
        background-image: url("~@/assets/img/login/password.png");
    }

    .form > div {
        overflow: hidden;
        margin-top: 0.3rem;
    }

    .form .input_contain {
        float: left;
        border-bottom: 0.02rem solid #8f8f8f;
    }

    .form .input_contain > input {
        width: 5.09rem;
        height: 0.55rem;
        outline: none;
        border: none;
    }

    .remember {
        display: block;
        font: 0.24rem "Microsoft YaHei";
        color: #323232;
        margin-top: 0.24rem;
        overflow: hidden;
    }

    .remember input[type='checkbox'] {
        margin-left: 0.15rem;
        float: left;
        display: block;
        margin-top: 0.06rem;
    }

    .remember span {
        margin-left: 0.3rem;
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

    .other {
        display: flex;
        margin-top: 0.8rem !important;
    }

    .other p {
        flex: 1;
        color: #9e9e9e;
        font: 0.27rem "Microsoft YaHei";
        cursor: pointer;
    }

    .other p:first-of-type {
        text-align: left;
        margin-left: 0.1rem;
    }

    .other p:last-of-type {
        text-align: right;
        margin-right: 0.15rem;
    }

    .register {
        width: 1.9rem;
        height: 0.75rem;
        line-height: 0.75rem !important;
        text-align: center;
        margin: 0 auto;
        font: 0.28rem "Microsoft YaHei";
        border: 0.01rem solid #3696ed;
        border-radius: 0.25rem;
        color: #3696ed;
        position: fixed;
        left: 2.65rem;
        cursor: pointer;
        bottom: 0.9rem;
    }
</style>