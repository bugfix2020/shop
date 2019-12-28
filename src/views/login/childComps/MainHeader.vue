<template>
    <div>
        <div id="header" class="user">
            <p>欢迎登录</p>
            <p>嘻唰唰{{currentIdentity}}平台</p>
        </div>
        <div id="login" class="login_user" @click="redirectLogin">
            <p>{{otherIdentity}}登录 &gt;</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainHeader",
        data() {
            return {
                currentIdentity: '',
                otherIdentity: '',
                redirectCurrentUrl: '',
                redirectOtherUrl: ''
            }
        },
        methods: {
            /**
             *  路由 - 进入「创客/商户」 登录页
             */
            redirectLogin() {
                this.$router.replace('/login?identity=' + this.redirectOtherUrl);
            },
            /**
             * 页面初始化方法
             * @private
             */
            __init() {
                this.redirectCurrentUrl = this.$route.query.identity || 'user';
                if (this.redirectCurrentUrl === 'merchant') {
                    this.currentIdentity = '商户';
                    this.otherIdentity = '创客';
                    this.redirectOtherUrl = 'user';
                } else {
                    this.currentIdentity = '创客';
                    this.otherIdentity = '商户';
                    this.redirectOtherUrl = 'merchant';
                }

                //设置主题色
                document.getElementById('header').className = this.redirectCurrentUrl;
                document.getElementById('login').className = 'login_' + this.redirectCurrentUrl;
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
    #header {
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
</style>