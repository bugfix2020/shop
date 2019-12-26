<template>
    <div class="activity_contain_outer">
        <div class="activity_contain">
            <div class="switch_contain" @click="transitionButton">
                <div class="button"></div>
                <p class="text">已关闭</p>
            </div>
            <div class="show_main_open" v-show="isOpen">
                <p class="taskNum">{{taskNum}}</p>
                <p>自动抢单中</p>
            </div>
            <div class="show_main_close" v-show="!isOpen"></div>
            <p class="usable">
                今日剩余<span>{{usableTaskNum}}</span>单
            </p>
        </div>
        <div class="task_list" v-if="haveTaskList">
            <div class="task_list_item" v-for="item in taskData" :key="item.id">
                <div class="title">
                    <p>
                        <span>{{item.source}}</span>
                        <em>|</em>
                        <span>{{item.type}}</span>
                    </p>
                    <p>发布时间:{{item.publishDate}}</p>
                </div>
                <div class="main">
                    <p>
                        <img src="@/assets/img/index/activity/cart_icon.png" alt="" class="cart_icon">
                    </p>
                    <p>
                        <span class="order_number">任务编号:{{item.orderNum}}</span>
                        <span class="order_info">
                            商品价格<span class="price">{{item.price}}</span>元，任务佣金
                            <span class="price">{{item.reward}}</span>元
                        </span>
                    </p>
                    <p @click="chooseTask(item.id)">抢单</p>
                </div>
            </div>
        </div>
        <img src="@/assets/img/index/activity/no_task_background.png" alt="" v-else class="no_task_bg">
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "MainActivity",
        data() {
            return {
                isOpen: false,
                taskNum: 0,
                usableTaskNum: 5,
                taskList: [],
            }
        },
        methods: {
            /**
             * 自动抢单
             * @param event 浏览器event对象
             * @param init  是否通过初始化触发
             */
            transitionButton(event, init = false) {
                if (!init) {
                    //todo 发送请求到后端
                    this.isOpen = !this.isOpen;
                    Toast({
                        message: '操作成功',
                        iconClass: 'icon icon-success',
                        duration: 1500
                    });
                }

                let button = document.getElementsByClassName('button')[0];
                let text = document.getElementsByClassName('text')[0];

                if (this.isOpen) {
                    button.style.left = '1.3rem';
                    button.style.background = '#3696ed';
                    text.style.color = '#3696ed';
                    text.style.left = '0.35rem';
                    text.innerText = '已开启';
                } else {
                    button.style.left = '0.1rem';
                    button.style.background = '#ccc';
                    text.style.color = '#ccc';
                    text.style.left = '0.76rem';
                    text.innerText = '已关闭';
                }
            },
            chooseTask(id) {
                //todo 还不知道这里的逻辑 如果点击就锁定订单 应防止并发状态下的问题
                Toast({
                    message: id + '抢单成功',
                    iconClass: 'icon icon-success',
                    duration: 1500
                });
            }
        },
        mounted() {
            this.transitionButton(event, true);
        },
        computed: {
            haveTaskList() {
                return this.taskList.length > 0 ? true : false;
            }
        },
        props: {
            taskData: {
                type: Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
    .activity_contain {
        width: 7.12rem;
        min-height: 1.17rem;
        margin: 0 auto;
        overflow: hidden;
        background: url('~@/assets/img/index/activity/activity.png') no-repeat;
        background-size: 7.12rem 1.17rem;
        position: relative;
    }

    .switch_contain {
        float: left;
        width: 2rem;
        height: 0.56rem;
        border-radius: 1rem;
        background: #fff;
        margin-left: 4.9rem;
        margin-top: 0.28rem;
        position: relative;
    }

    .switch_contain .button {
        position: absolute;
        top: 0;
        left: 0.1rem;
        width: 0.42rem;
        height: 0.42rem;
        border-radius: 50%;
        background-color: #ccc;
        margin-top: 0.07rem;
        margin-left: 0.1rem;
        transition: left 100ms linear;
    }

    .switch_contain p {
        position: absolute;
        top: 0;
        left: 0.76rem;
        height: 0.56rem;
        line-height: 0.57rem !important;
        font: 0.28rem "Microsoft YaHei";
        color: #ccc;
    }

    .show_main_open, .show_main_close {
        margin: 1.31rem auto 0.3rem auto;
        width: 2.28rem;
        height: 2.27rem;
        background-size: 2.28rem 2.27rem;
    }

    .show_main_open {
        background-image: url("~@/assets/img/index/activity/background_open.png");
    }

    .show_main_close {
        background-image: url("~@/assets/img/index/activity/background_close.png");
    }

    .show_main_open p:first-of-type {
        padding-top: 0.63rem;
        font-weight: bold;
    }

    .show_main_open p {
        font: 0.28rem "Microsoft YaHei";
        color: #fff;
        text-align: center;
    }

    .usable {
        color: #7a7a7a;
        font: 0.25rem "Microsoft YaHei";
        position: absolute;
        bottom: 0.3rem;
        right: 0.26rem;
    }

    .usable span {
        color: #3696ed;
    }


    .no_task_bg {
        width: 7.5rem;
        height: 5.7rem;
    }

    .task_list {
        width: 7.5rem;
        border-top: 0.2rem solid #eef3f6;
    }

    .task_list_item {
        width: 7rem;
        margin: 0 auto;
    }

    .task_list_item .title {
        display: flex;
        border-bottom: 0.01rem solid #dfdfdf;
        padding: 0.24rem 0;
    }

    .task_list_item .title p {
        font: 0.29rem "Microsoft YaHei";
        color: #2f91ef;
        font-weight: bold;
        flex: 1;
    }

    .task_list_item .title p em {
        font-style: normal;
        margin: 0 0.15rem 0 0.18rem;
    }

    .task_list_item .title p span:last-of-type {
        color: #ed7612;
    }

    .task_list_item p:last-of-type {
        font-size: 0.22rem;
        font-weight: normal;
        color: #555;
        text-align: right;
    }

    .task_list_item .main {
        padding: 0.27rem 0;
        display: flex;
    }

    .cart_icon {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        margin-left: 0.03rem;
    }

    .task_list_item .main p {
        flex: 1;
    }

    .task_list_item .main p:nth-of-type(2) {
        flex: 4;
    }

    .task_list_item .main p:nth-of-type(3) {
        width: 1.06rem;
        height: 0.44rem;
        color: #2e91f0;
        border: 0.01rem solid #2e91f0;
        border-radius: 0.1rem;
        text-align: center;
        line-height: 0.44rem;
        margin-top: 0.1rem;
        cursor: pointer;
    }

    .task_list_item .main .order_number, .task_list_item .main .order_info {
        font: 0.22rem "Microsoft YaHei";
        color: #3f3f3f;
        display: block;
    }

    .task_list_item .main .price {
        color: #db5949;
    }

    /*.switch_contain{*/
    /*    content: '已开启';*/
    /*    font-size: 0.1rem;*/
    /*    line-height: 0.6rem;*/
    /*}*/
</style>