<template>
    <equity>
        <equity-item v-for="EquityDataItem in EquityData" :key="EquityDataItem.text" :path="EquityDataItem.path">
            <img :src="EquityDataItem.img" slot="img">
            <p slot="text">{{EquityDataItem.text}}</p>
        </equity-item>
    </equity>
</template>

<script>
    import EquityItem from "@/views/index/childComps/EquityItem";
    import Equity from "@/views/index/childComps/Equity";

    export default {
        name: 'index',
        data() {
            return {
                EquityData: [
                    {
                        img: '~assets/1首页_r2_c2.jpg',
                        text: '我的任务',
                        path: ''
                    },
                    {
                        img: '~assets/1首页_r2_c2.jpg',
                        text: '安全保障',
                        path: ''
                    },
                    {
                        img: '~assets/1首页_r2_c2.jpg',
                        text: '我的钱包',
                        path: ''
                    },
                    {
                        img: '~assets/1首页_r2_c2.jpg',
                        text: 'VIP创客',
                        path: ''
                    },
                ],

            }
        },
        components: {
            Equity,
            EquityItem
        }
    }
</script>

<style scoped>

</style>
