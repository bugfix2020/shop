<template>
    <div id="contain">
        <nav-bar>
            <p slot="left" @click="redirectCapitalDetails">
                <img src="@/assets/img/back.png" style="margin: 0.29rem 0 0 0.17rem;width: 0.2rem;height: 0.34rem;">
            </p>
            <p slot="right"></p>
        </nav-bar>
        <main-item/>
    </div>
</template>

<script>
    import NavBar from "@/components/content/NavBar/NavBar";
    import MainItem from "@/views/detailsInfo/childComps/MainItem";

    export default {
        name: "detailsInfo",
        data() {
            return {
                info: {}
            }
        },
        methods: {
            /**
             * 路由 - 返回交易明细列表
             */
            redirectCapitalDetails() {
                history.go(-1);
            }
        },
        components: {
            NavBar,
            MainItem
        },
        created() {
            if (!this.$route.query.id) {
                let index = this.$toast('参数丢失');
                setTimeout(() => {
                    index.close();
                }, 2000);
            }

            //网络请求
            this.info = {};
        }
    }
</script>

<style scoped>
    body {
        height: 100%;
    }

    #contain {
        height: 100%;
        background-color: #eef3f6;
    }
</style>