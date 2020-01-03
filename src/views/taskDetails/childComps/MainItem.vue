<template>
    <div class="item_contain">
        <div class="item_inner">
            <div class="task_title">
                <p>任务信息</p>
                <p>请在<span class="time">29分11秒</span>内完成支付</p>
            </div>
            <div class="task_base_info">
                <p>任务编号：2019111286547 </p>
                <p>发布时间：2019-11-12 12:25</p>
                <p style="color: #17d073;">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink"
                             style="width: 0.27rem;height: 0.3rem;vertical-align:middle;">
                        <image x="0px" y="0px" style="width: 0.27rem;height: 0.3rem;"
                               xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAMAAADqx5XUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABm1BMVEUX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HMX0HP///+arcbGAAAAh3RSTlMAksaISxIKOHK6d9jtwnk+CDBosN7F1P3Vk2EgE1CFwfjK67mDNRsma6/blUel3ffw5780gtbmnUl10gkykdP55U4BQ8v1M3HNRQct4tyBLixTPB1pyR60YBwESqn66Hbvo0yGsosrXNGb2QZbnA/jSKcQVuEqbrsL8rzkQlJfWl3u/CcDmRfTU3OVAAAAAWJLR0SIa2YWWgAAAAd0SU1FB+QBBAE2OFPfDg8AAAFUSURBVCjPY2BkYmZhZUAHbOwcnFwM3O08vHz8AqhSgkLCIu2iDGLtQCAuISklDRWXkZWTVwAJSjAotkOBkrKKqpq6hqYWTECbQUdXD8Zp11cygLMNjfhBphibmLajAjNzCzaghKWVhjUDg42tnT1MwkHX0YmBwdnFkkFHqd1VG6TdzV1ZvL3dQ8XTi4HB29KnvV2HQd0DpNbXzx8oHRAYBCSDQ0LB+tUZwsIhJokzRUQCJaKiY2IhAnFhDAzxcBckJCYlw33QngJUGdKOHaQC5dJwyKUD5awzsEopsIO8nolVLisbJJeDVS4XHPB5+djkCiCxUohFKr8IIleMRU4FGptFJZhypbAkUIYhVe4Ek6swRJOqtEGknUActoFBFYpUtQyyXKQZklRsDWqKrEWSq0NPyfVwKUaMVM7Q0AiWaZJiwAKaw4FSEs4MWEELl11rGxIfANJh+/b+lxTgAAAAAElFTkSuQmCC"/></svg>
                    </span>
                    此任务商品本金与佣金已充值到本平台
                </p>
            </div>
            <div class="task_money_info">
                <p>商品价格<span class="money">150.00元</span></p>
                <p>任务佣金<span class="money">9.00元</span></p>
            </div>
            <div class="task_step_info">
                <div>
                    <p>第一步：商品浏览</p>
                    <p>
                        <button>未浏览</button>
                    </p>
                </div>
                <div>
                    <p>第二步：支付购买</p>
                    <p>
                        <button>未支付</button>
                    </p>
                </div>
                <div>
                    <p>第三步：商品发货</p>
                    <p>
                        <button>未发货</button>
                    </p>
                </div>
                <div>
                    <p>第四步：任务结算</p>
                    <p>
                        <button>未结算</button>
                    </p>
                </div>
            </div>
        </div>
        <div class="button_group">
            <button @click="cancelTask">放弃任务</button>
            <button @click="startTask">开始任务</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainItem",
        methods: {
            startTask() {
                //开始任务
                this.$toast('开始任务');
            },
            cancelTask() {
                //放弃任务
                this.$toast('放弃任务');
            }
        }
    }
</script>

<style scoped>
    .item_contain {
        width: 7.18rem;
        margin: 0 auto;
        background-color: #fff;
    }

    .item_contain .item_inner {
        width: 6.8rem;
        margin: 0 auto;
    }

    .item_contain .item_inner .task_title {
        padding: 0.4rem 0 0.3rem 0;
        display: flex;
        font: 0.29rem "Microsoft YaHei";
        font-weight: 900;
        color: #555;
        border-bottom: 0.01rem solid #b1b1b1;
    }

    .item_contain .item_inner .task_title p {
        flex: 1;
        line-height: normal !important;
    }

    .item_contain .item_inner .task_title p:first-of-type {
        text-align: left;
    }

    .item_contain .item_inner .task_title p:last-of-type {
        text-align: right;
    }

    .item_contain .item_inner .task_title p span.time {
        color: #d22f1c;
    }

    .item_contain .item_inner .task_base_info {
        padding-bottom: 0.2rem;
        border-bottom: 0.01rem solid #b1b1b1;
    }

    .item_contain .item_inner .task_base_info p {
        font: 0.25rem "Microsoft YaHei";
        color: #4a4a4a;
        margin-top: 0.2rem;
        /*line-height: 0.5rem;*/
    }

    .item_contain .item_inner .task_money_info {
        display: flex;
        border-bottom: 0.01rem solid #b1b1b1;
    }

    .item_contain .item_inner .task_money_info p {
        flex: 1;
        text-align: left;
        font: 0.25rem "Microsoft YaHei";
        color: #4a4a4a;
        line-height: 0.87rem;
    }

    .item_contain .item_inner .task_money_info p:last-of-type {
        text-align: right;
    }

    .item_contain .item_inner .task_money_info p span.money {
        color: #d54436;
    }

    .item_contain .item_inner .task_step_info {
        padding: 0.2rem 0 0.2rem 0;
    }

    .item_contain .item_inner .task_step_info > div {
        display: flex;
    }

    .item_contain .item_inner .task_step_info > div > p {
        flex: 1;
        font: 0.25rem "Microsoft YaHei";
        color: #4a4a4a;
        line-height: 0.7rem;
    }

    .item_contain .item_inner .task_step_info > div > p:last-of-type {
        text-align: right;
    }

    .item_contain .item_inner .task_step_info > div > p:last-of-type > button {
        color: #2e91f0;
        width: 1.08rem;
        height: 0.44rem;
        text-align: center;
        line-height: normal !important;
        background-color: #fff;
        border-radius: 0.1rem;
        border: 0.01rem solid #2e91f0;
        outline: none;
        cursor: pointer;
    }

    .button_group {
        position: fixed;
        bottom: 0.3rem;
    }

    .button_group button {
        text-align: center;
        width: 3.33rem;
        height: 0.76rem;
        line-height: 0.76rem;
        font: 0.31rem "Microsoft YaHei";
        color: #111111;
        border-width: 0.02rem;
        border-style: solid;
        border-radius: 0.1rem;
        background-color: #fff;
        outline: none;
    }

    .button_group button:first-of-type {
        border-color: #777;
    }

    .button_group button:last-of-type {
        color: #fff;
        background-color: #2f91ef;
        border-color: #2f91ef;
        margin-left: 0.25rem;
    }
</style>