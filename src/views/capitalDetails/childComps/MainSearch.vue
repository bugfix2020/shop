<template>
    <div>
        <div class="search_contain">
            <div class="search_inner">
                <div class="search_item">
                    <p>{{currentYear}}</p>
                    <p @click="showSheet">
                        <strong>{{currentMonth | getFullText}}</strong>
                        <svg style="width:0.16rem;height: 0.16rem;margin-left: 0.12rem;" t="1577707611487" class="icon"
                             viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1872"
                             width="16" height="16">
                            <path d="M896 352a32 32 0 0 0-32-32c-8.288 0-15.776 3.232-21.456 8.4l-0.08-0.08L512 628.752 181.52 328.32l-0.08 0.08A31.744 31.744 0 0 0 160 320a32 32 0 0 0-32 32c0 9.392 4.112 17.744 10.544 23.6l-0.064 0.08 352 320 0.064-0.08c5.68 5.168 13.168 8.4 21.456 8.4s15.776-3.232 21.456-8.416l0.08 0.08 352-320-0.08-0.08c6.432-5.84 10.544-14.208 10.544-23.584z"
                                  p-id="1873"></path>
                        </svg>
                    </p>
                </div>
                <div class="search_item">
                    <p>收入(元)</p>
                    <p><strong>{{revenue.toFixed(2)}}</strong></p>
                </div>
                <div class="search_item">
                    <p>支出(元)</p>
                    <p><strong>{{expend.toFixed(2)}}</strong></p>
                </div>
            </div>
            <mt-actionsheet
                    :actions="months"
                    v-model="sheetVisible">
            </mt-actionsheet>
        </div>
        <div class="monthText">
            <p>{{month == currentMonth ? '本月' : currentMonth + '月'}}</p>
        </div>
        <div class="list">
            <div class="list_item">
                <div>
                    <p>保证金充值</p>
                    <p>2019-12-30 20:19:45</p>
                </div>
                <div>
                    <span>+2000
                        <svg style="width: 0.32rem;height:0.32rem;display: inline-block;
    margin-bottom: -0.02rem;" t="1577709197949" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="2674" width="32" height="32">
                            <path
                                    d="M683.52 491.52l-307.2-279.04c-10.24-10.24-25.6-10.24-35.84 0-10.24 10.24-10.24 25.6 0 35.84L629.76 512 340.48 775.68c-10.24 10.24-10.24 25.6 0 35.84 10.24 10.24 25.6 10.24 35.84 0l307.2-279.04c5.12-5.12 7.68-12.8 7.68-20.48 0-7.68-2.56-15.36-7.68-20.48z"
                                    p-id="2675"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainSearch",
        data() {
            return {
                currentYear: '2020',
                months: [
                    {name: '1月', method: this.chooseMonth, value: 1},
                    {name: '2月', method: this.chooseMonth, value: 2},
                    {name: '3月', method: this.chooseMonth, value: 3},
                    {name: '4月', method: this.chooseMonth, value: 4},
                    {name: '5月', method: this.chooseMonth, value: 5},
                    {name: '6月', method: this.chooseMonth, value: 6},
                    {name: '7月', method: this.chooseMonth, value: 7},
                    {name: '8月', method: this.chooseMonth, value: 8},
                    {name: '9月', method: this.chooseMonth, value: 9},
                    {name: '10月', method: this.chooseMonth, value: 10},
                    {name: '11月', method: this.chooseMonth, value: 11},
                    {name: '12月', method: this.chooseMonth, value: 12},
                ],
                currentMonth: 1,
                month: 1,
                sheetVisible: false
            }
        },
        methods: {
            showSheet() {
                this.sheetVisible = !this.sheetVisible;
            },
            chooseMonth(e) {
                //todo 发请求
                this.currentMonth = e.value;
            }
        },
        props: {
            revenue: {
                type: Number,
                default: 0
            },
            expend: {
                type: Number,
                default: 0
            }
        },
        filters: {
            getFullText(text) {
                return text + '月';
            }
        },
        created() {
            let date = new Date();
            this.currentYear = date.getFullYear() + '年';
            this.currentMonth = date.getMonth() + 1;
            this.month = date.getMonth() + 1;
        }
    }
</script>

<style scoped>
    .search_contain {
        width: 7.5rem;
        height: 1.42rem;
        background-color: #fecf29;
    }

    .search_inner {
        width: 6.8rem;
        margin: 0 auto;
        padding: 0.15rem 0;
        display: flex;
    }

    .search_item {
        flex: 1;
        position: relative;
    }

    .search_item ul {
        position: absolute;
        top: 0.5rem;
        width: 100%;
    }

    .search_item p, .search_item li {
        text-align: center;
        font: 0.3rem "Microsoft YaHei";
        text-align: center;
    }

    .search_item p:first-of-type {
        margin-bottom: 0.1rem;
    }

    .search_item:nth-of-type(2) {
        border-left: 0.01rem solid #000;
        border-right: 0.01rem solid #000;
    }

    .monthText {
        height: 0.73rem;
        width: 6.82rem;
        margin: 0 auto;
        background-color: transparent;
    }

    .monthText p {
        font: 0.25rem "Microsoft YaHei";
        color: #3f3f3f;
        line-height: 0.73rem;
    }

    .list {
        width: 7.5rem;
        background-color: #fff;
    }

    .list .list_item {
        width: 6.82rem;
        padding: 0 0.35rem;
        height: 1.25rem;
        display: flex;
        border-bottom: 0.01rem solid #ebebeb;
    }

    .list .list_item div {
        flex: 1;
    }

    .list .list_item p {
        font: 0.25rem "Microsoft YaHei";
        color: #3f3f3f;
        margin: 0.25rem 0 0.1rem 0;
    }

    .list .list_item p:last-of-type {
        color: #757575;
        margin: 0;
    }

    .list .list_item span {
        font: 0.3rem "Microsoft YaHei";
        display: block;
        line-height: 1.25rem !important;
        text-align: right;
    }
</style>