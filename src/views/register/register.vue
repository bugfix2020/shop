<template>
    <div id="contain">
        <nav-bar>
            <p slot="left"></p>
            <p slot="center">{{currentIdentity + $route.meta.title}}</p>
            <p slot="right" @click="redirectLogin">登录</p>
        </nav-bar>
        <main-form :currentIdentity="currentIdentity" :redirectCurrentUrl="redirectCurrentUrl"></main-form>
    </div>
</template>

<script>
    import NavBar from "@/components/content/NavBar/NavBar";
    import MainForm from "@/views/register/childComps/MainForm";

    export default {
        name: "register",
        data() {
            return {
                currentIdentity: '创客',
                redirectCurrentUrl: 'user'
            }
        },
        components: {
            NavBar,
            MainForm
        },
        methods: {
            /**
             * 页面初始化方法
             * @private
             */
            __init() {
                let identity = this.$route.query.identity;
                this.redirectCurrentUrl = identity;

                if (identity === 'merchant') {
                    this.currentIdentity = '商户';
                } else {
                    this.currentIdentity = '创客';
                }
            },
            redirectLogin() {
                this.$router.replace('/login?identity=' + this.redirectCurrentUrl);
            }
        },
        mounted() {
            this.__init();
        }
    }
</script>

<style scoped>

</style>