<template>
    <div class="main">
        <div class="tab_contain">
            <p class="tab_item active" @click="tabClick(0)">
                待完成
                <span class="num">{{taskData.length}}</span>
                <abbr></abbr>
            </p>
            <p class="tab_item" @click="tabClick(1)">
                已完成
                <abbr style="margin-left: 1.46rem;"></abbr>
            </p>
        </div>
        <div class="list_contain">
            <div class="task_list" v-if="taskData.length > 0">
                <div class="task_list_box" v-for="item in taskData" :key="item.id">
                    <div class="task_list_item">
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
                            <p @click="viewTask(item.id)">未浏览</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="@/assets/img/index/activity/no_task_background.png" alt="" v-else class="no_task_bg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainTab",
        data() {
            return {}
        },
        methods: {
            /**
             * 动态选中列表
             * @param index 当前选中的元素索引
             */
            tabClick(index) {
                let elLIst = document.querySelectorAll('.tab_item');
                elLIst.forEach((item, key) => {
                    if (index === key) {
                        item.className = 'tab_item active';
                    } else {
                        item.className = 'tab_item';
                    }
                });

                //todo 发送网络请求 更新taskData 这里可能实际到下拉加载
            },
            /**
             * 路由 - 跳转至任务详情
             */
            viewTask() {

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
    .tab_contain {
        width: 7.5rem;
        margin-top: 0.25rem;
        display: flex;
        border-top: 0.01rem solid #e7ecef;
        border-bottom: 0.01rem solid #e7ecef;
        background-color: #fff;
    }

    .tab_item {
        flex: 1;
        text-align: center;
        font: 0.28rem "Microsoft YaHei";
        color: #555;
        height: 0.68rem;
        margin: 0.37rem 0;
        line-height: 0.68rem;
    }

    .tab_item:first-of-type {
        border-right: 0.01rem solid #e7ecef;
    }

    .tab_item abbr {
        display: block;
        width: 0.88rem;
        height: 0.1rem;
        background-color: #3696ed;
        border-radius: 0.2rem;
        margin-left: 1.2rem;
        display: none;
    }

    .num {
        width: 0.38rem;
        height: 0.38rem;
        line-height: 0.38rem;
        background-color: #3696ed;
        color: #fff;
        display: inline-block;
        border-radius: 50%;
        text-align: center;
    }

    .active {
        color: #3696ed;
    }

    .active abbr {
        display: block;
    }

    .no_task_bg {
        width: 7.5rem;
        height: 5.7rem;
    }

    .task_list {
        width: 7.5rem;
    }

    .task_list_box {
        width: 7.5rem;
        border-top: 0.2rem solid #eef3f6;
        background-color: #fff;
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
</style>