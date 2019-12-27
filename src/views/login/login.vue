<template>
    <div id="contain">
        <div id="header" class="user">
            <p>欢迎登录</p>
            <p>嘻唰唰{{identity}}平台</p>
        </div>
        <div id="login" class="login_user" @click="redirectLogin">
            <p>{{redirectIdentity}}登录 &gt;</p>
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
            <button id="sub" @click="login" class="sub_user">登录</button>
            <div class="other">
                <p @click="clearCache">清理缓存</p>
                <p @click="redirectResetPassword">忘记登录密码?</p>
            </div>
        </div>
        <p id="register" class="register_user" @click="redirectRegister">{{identity}}入驻</p>
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
                identity: '创客',
                redirectIdentity: '商户',
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
                this.$router.push('/resetPassword');
            },
            /**
             *  理由 - 进入「创客/商户」 登录页
             */
            redirectLogin(){

            },
            /**
             *  理由 - 进入「创客/商户」 注册页
             */
            redirectRegister() {
                //创客入驻
                this.$router.push('/register');
            },
            merchantLogin() {
                //商家登录
                // this.$router.push()
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
            },
            __init() {
                let identity = this.$route.query.identity;
                switch (identity) {
                    case 'user':
                        this.identity = '创客';
                        this.redirectIdentity = '商户';
                        break;
                    case 'merchant':
                        this.identity = '商户';
                        this.redirectIdentity = '创客';
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.error('未能识别的身份.');
                        break;
                }

                //设置主题色
                identity = identity.toString();
                document.getElementById('header').className = identity;
                document.getElementById('sub').className = 'sub_' + identity;
                document.getElementById('register').className = 'register_' + identity;
                document.getElementById('login').className = 'login_' + identity;
            }
        },
        mounted() {
            //初始化界面数据
            this.__init();
            // eslint-disable-next-line no-console
            console.log();

            let userInfo = localStorage.getItem('userInfo');
            if (userInfo) {
                let {tel, password} = JSON.parse(userInfo);
                this.tel = tel;
                this.password = password;
                this.remember = true;
            }
        },
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
        background-size: cover;
    }

    .merchant {
        background: url("~@/assets/img/login/header_bg_merchant.png") no-repeat;
    }

    .user {
        background: url("~@/assets/img/login/header_bg_user.png") no-repeat;
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

    #login {
        width: 1.67rem;
        border-top-left-radius: 0.45rem;
        border-bottom-left-radius: 0.45rem;
        position: absolute;
        right: 0;
        top: 0.35rem;
    }

    /*主题色*/
    .login_user {
        background-color: #fff;
        color: #fff;
    }

    /*主题色*/
    .login_merchant {
        background-color: #373737;
        color: #fecf29;
    }

    #login p {
        height: 0.64rem;
        line-height: 0.64rem !important;
        font: 0.25rem "Microsoft YaHei";
        text-align: right;
        padding-right: 0.13rem;
    }

    /*主题色*/
    .login_user p {
        color: #2487f7;
    }

    /*主题色*/
    .login_merchant p {
        color: #fecf29;
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

    #register {
        width: 1.9rem;
        height: 0.75rem;
        line-height: 0.75rem !important;
        text-align: center;
        margin: 0 auto;
        font: 0.28rem "Microsoft YaHei";
        border-radius: 0.25rem;
        position: fixed;
        left: 2.65rem;
        cursor: pointer;
        bottom: 0.9rem;
    }

    /*主题色*/
    .register_user {
        border: 0.01rem solid #3696ed;
        color: #3696ed;
    }

    /*主题色*/
    .register_merchant {
        border: 0.01rem solid #fecf29;
        color: #fecf29;
    }
</style>