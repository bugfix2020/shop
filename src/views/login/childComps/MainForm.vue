<template>
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
        <p id="register" class="register_user" @click="redirectRegister">{{currentIdentity}}入驻</p>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        name: "MainForm",
        data() {
            return {
                tel: '',
                password: '',
                remember: false,
                currentIdentity: '',
                redirectCurrentUrl: '',
                redirectOtherUrl: ''
            }
        },
        methods: {
            /**
             * 用户登录
             */
            login() {
                if (!this.checkDataComplete()) {
                    return false;
                }

                //todo 这里根据接口返回的身份信息跳转
                let url = '/index';
                if (this.redirectCurrentUrl === 'merchant') {
                    url = 'merchantIndex'
                }
                this.$router.replace(url);
            },
            clearCache() {
                //清理缓存
            },
            /**
             * 路由 - 进入找回密码页
             */
            redirectResetPassword() {
                this.$router.replace('/resetPassword?identity=' + this.redirectCurrentUrl);
            },
            /**
             * 路由 - 进入「创客/商户」 注册页
             */
            redirectRegister() {
                //创客入驻
                this.$router.replace('/register?identity=' + this.redirectCurrentUrl);
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

                let key = this.redirectCurrentUrl + 'Info';
                if (this.remember) {
                    let data = {tel: this.tel, password: this.password};
                    localStorage.setItem(key, JSON.stringify(data));
                } else {
                    localStorage.removeItem(key);
                }

                return true;
            },
            /**
             * 页面初始化方法
             * @private
             */
            __init() {
                this.redirectCurrentUrl = this.$route.query.identity || 'user';
                if (this.redirectCurrentUrl === 'merchant') {
                    this.currentIdentity = '商户';
                    this.redirectOtherUrl = 'user';
                } else {
                    this.currentIdentity = '创客';
                    this.redirectOtherUrl = 'merchant';
                }

                //设置主题色
                document.getElementById('sub').className = 'sub_' + this.redirectCurrentUrl;
                document.getElementById('register').className = 'register_' + this.redirectCurrentUrl;

                //登录界面获取用户账号密码
                let key = this.redirectCurrentUrl + 'Info';
                let info = localStorage.getItem(key);
                if (info) {
                    let {tel, password} = JSON.parse(info);
                    this.tel = tel;
                    this.password = password;
                    this.remember = true;
                } else {
                    this.tel = '';
                    this.password = '';
                    this.remember = false;
                }
            }
        },
        mounted() {
            //初始化界面数据
            this.__init();
        },
        watch: {
            '$route': '__init'
        },
    }
</script>

<style scoped>
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