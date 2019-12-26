<template>
    <swiper :options="swiperOption" class="swiper_contain">
        <swiper-slide v-for="item in bannerData" :key="item">
            <img :src="item" style="width: 100%;"/>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
</template>

<script>
    //swiper官方
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper/src'

    export default {
        name: "MainBanner",
        data() {
            return {
                swiperOption: {
                    autoplay: true,
                    loop: true,
                    // effect: 'cube',
                    pagination: {
                        el: '.swiper-pagination',
                    },
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        props: {
            bannerData: {
                type: Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
    .swiper_contain {
        width: 7.12rem;
        margin: 0.3rem auto;
        border-radius:0.13rem ;
    }
</style>