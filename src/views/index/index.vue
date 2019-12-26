<template>
    <div id="contain">
        <main-share></main-share>
        <main-equity></main-equity>
        <main-notice :noticeData="NoticeData"></main-notice>
        <main-banner :bannerData="bannerData"></main-banner>
        <div class="activity_1">

        </div>
        <el-switch v-model="isOpenActivity_1">
        </el-switch>
    </div>
</template>

<script>
    import MainShare from "@/views/index/childComps/MainShare";
    import MainEquity from "@/views/index/childComps/MainEquity";
    import MainNotice from "@/views/index/childComps/MainNotice";
    import MainBanner from "@/views/index/childComps/MainBanner";

    export default {
        name: 'index',
        data() {
            return {
                isOpenActivity_1: true,
                NoticeData: [],
                bannerData: [],
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
        },
        components: {
            MainShare,
            MainEquity,
            MainNotice,
            MainBanner
        }
    }
</script>

<style scoped>
    #contain {
        overflow: hidden;
    }

    .activity_1 {
        background: url('~@/assets/img/index/activity/activity_1.png');
    }
</style>
