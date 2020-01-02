<template>
    <equity>
        <equity-item v-for="EquityDataItem in EquityData" :key="EquityDataItem.text" :path="EquityDataItem.path">
            <img :src="EquityDataItem.img" slot="img" :style="EquityDataItem.style">
            <p slot="text">{{EquityDataItem.text}}</p>
        </equity-item>
    </equity>
</template>

<script>
    import Equity from "@/views/index/childComps/Equity";
    import EquityItem from "@/views/index/childComps/EquityItem";

    export default {
        name: "MainEquity",
        data() {
            return {
                EquityData: [
                    {
                        img: require('@/assets/img/index/equity/equity_icon_1.png'),
                        style: 'width:0.57rem;height:0.57rem',
                        text: '我的任务',
                        path: '/myTask?identity=user'
                    },
                    {
                        img: require('@/assets/img/index/equity/equity_icon_2.png'),
                        style: 'width:0.51rem;height:0.54rem',
                        text: '安全保障',
                        path: '2'
                    },
                    {
                        img: require('@/assets/img/index/equity/equity_icon_3.png'),
                        style: 'width:0.56rem;height:0.56rem;',
                        text: '我的钱包',
                        path: '3'
                    },
                    {
                        img: require('@/assets/img/index/equity/equity_icon_4.png'),
                        style: 'width:0.43rem;height:0.53rem',
                        text: 'VIP创客',
                        path: '4'
                    },
                ],
            };
        },
        components: {
            Equity,
            EquityItem
        }
    }
</script>

<style scoped>

</style>