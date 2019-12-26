<template>
    <div class="notice">
        <div class="notice_inner">
            <img src="@/assets/img/index/notice/notice.png">
            <span>公告:</span>
            <ul class="notice_text_contain">
                <li v-for="item in noticeData" :key="item">{{item}}</li>
            </ul>
        </div>
        <!--        <div class="lubotu">-->
        <!--            <img src="../assets/lunotu.jpg">-->
        <!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "Notice",
        data() {
            return {}
        },
        mounted() {
            this.noticeText();
        },
        methods: {
            //滚动公告文字
            noticeText() {
                let el = document.getElementsByClassName('notice_text_contain')[0];
                setInterval(function () {
                    el.firstChild.style.marginTop = '-22px';
                    setTimeout(function () {
                        let currentEl = el.firstChild;
                        currentEl.remove();
                        currentEl.style.marginTop = '0px';
                        el.appendChild(currentEl)
                    }, 200)
                }, 3000);
            }
        },
        props: {
            noticeData: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
    }
</script>

<style scoped>
    .notice {
        /*border-bottom: 15px #EEF3F6 solid;*/
    }

    .notice_inner {
        width: 7.12rem;
        padding-top: 0.2rem;
        margin: 0 auto;
        overflow: hidden;
    }

    notice_text_contain, .notice_inner span {
        display: inline-block;
        float: left;
    }

    .notice_text_contain li, .notice_inner span {
        font: 0.25rem "Microsoft YaHei";
        color: #555;
    }

    .notice_inner img {
        width: 0.45rem;
        height: 0.4rem;
        margin-left: 0.1rem;
        margin-right: 0.17rem;
        float: left;
    }

    .notice_text_contain {
        height: 0.3rem;
        overflow: hidden;
        padding-left: 0.1rem;
    }

    .notice_text_contain li {
        transition: all 200ms linear;
        letter-spacing: 0.01rem;
    }
</style>