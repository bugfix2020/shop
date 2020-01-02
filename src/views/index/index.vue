<template>
    <div id="contain">
        <main-share @click.native="share"></main-share>
        <main-equity></main-equity>
        <main-notice :noticeData="NoticeData"></main-notice>
        <main-banner :bannerData="bannerData"></main-banner>
        <main-activity :taskData="taskData"></main-activity>
    </div>
</template>

<script>
    import MainShare from "@/views/index/childComps/MainShare";
    import MainEquity from "@/views/index/childComps/MainEquity";
    import MainNotice from "@/views/index/childComps/MainNotice";
    import MainBanner from "@/views/index/childComps/MainBanner";
    import MainActivity from "@/views/index/childComps/MainActivity";

    export default {
        name: 'index',
        data() {
            return {
                isOpenActivity_1: true,
                NoticeData: [],
                bannerData: [],
                taskData: [],
            }
        },
        created() {
            //todo Notice公告
            this.NoticeData = [
                '嘻唰唰平台2019年11月12日凌晨维护公告1',
                '嘻唰唰平台2019年11月12日凌晨维护公告2',
                '嘻唰唰平台2019年11月12日凌晨维护公告3',
                '嘻唰唰平台2019年11月12日凌晨维护公告4'
            ];

            //todo banner图
            this.bannerData = [
                'https://img.alicdn.com/tfs/TB1m2FtrRr0gK0jSZFnXXbRRXXa-520-280.jpg_q90_.webp',
                'https://img.alicdn.com/simba/img/TB1tXD7rQL0gK0jSZFASuwA9pXa.jpg',
                'https://img.alicdn.com/simba/img/TB10KJBrKL2gK0jSZFmSuw7iXXa.jpg'
            ];

            //todo task任务列表
            this.taskData = [
                {
                    id: 30291,
                    source: '拼多多任务',
                    type: '购物',
                    publishDate: '2019-11-15 19:21',
                    orderNum: 20191115004056,
                    price: 156,
                    reward: 9
                }
                , {
                    id: 30292,
                    source: '拼多多任务',
                    type: '购物',
                    publishDate: '2019-11-15 19:22',
                    orderNum: 20191115004057,
                    price: 158,
                    reward: 21
                },
                {
                    id: 30293,
                    source: '拼多多任务',
                    type: '购物',
                    publishDate: '2019-11-15 19:23',
                    orderNum: 20191115004058,
                    price: 988,
                    reward: 72
                }
            ];
        },
        components: {
            MainShare,
            MainEquity,
            MainNotice,
            MainBanner,
            MainActivity
        },
        methods: {
            share() {
                this.$toast({
                    message: '分享了',
                    duration: 1000
                });
            }
        }
    }
</script>

<style scoped>
    #contain {
        overflow: hidden;
    }
</style>
