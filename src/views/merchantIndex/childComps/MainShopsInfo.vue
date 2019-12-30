<template>
    <div class="shops_info">
        <div class="shops_info_item">
            <p>店铺日刷单限额设置：（输入0为不限制）</p>
        </div>
        <div class="shops_info_item" v-for="(item,index) in shopsData" :key="item.id">
            <label>{{fullName(item.name,index)}}</label>
            <input type="number" :value="item.num" placeholder="请输入限制金额" class="num" :data-id="item.id">
        </div>
        <button class="button" id="sub" @click="update">更新资料</button>
        <button class="button" id="details" @click="redirectDetails">资金明细</button>
    </div>
</template>

<script>
    export default {
        name: "MainShopsInfo",
        props: {
            shopsData: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        methods: {
            update() {
                //更新信息
                let elementList = document.getElementsByClassName('num');
                if (elementList.length > 0) {
                    let data = [];
                    elementList.forEach(item => {
                        data[item.getAttribute('data-id')] = item.value;
                    });
                    //这里这样写是因为数组前面会多出一个empty 具体是什么原因还不清楚
                    data.shift();
                }
                alert('更新信息');
            },
            /**
             * 路由 - 资金详情
             */
            redirectDetails() {
                this.$router.push('/capitalDetails');
            }
        },
        computed: {
            fullName() {
                return function (name, index) {
                    ++index;
                    return index + '. ' + name;
                }
            }
        }
    }
</script>

<style scoped>
    .shops_info {
    }

    .shops_info_item {
        width: 7.2rem;
        margin: 0 auto;
        height: 0.35rem;
        padding: 0.35rem 0;
        border-bottom: 0.01rem solid #ccc;
    }

    .shops_info .shops_info_item p {
        font: 0.31rem "Microsoft YaHei";
        color: #333331;
        float: left;
        margin-left: 0.24rem;
    }

    .shops_info .shops_info_item label {
        font: 0.31rem "Microsoft YaHei";
        color: #333331;
        float: left;
        margin-left: 0.24rem;
    }

    .shops_info .shops_info_item input {
        width: 30%;
        float: right;
        font: 0.28rem "Microsoft YaHei";
        outline: none;
        border: none;
        text-align: right;
        margin-right: 0.3rem;
    }

    .button {
        display: block;
        width: 5.7rem;
        height: 1rem;
        margin: 0.6rem auto 0 auto;
        line-height: 1rem !important;
        border: none;
        border-radius: 0.15rem;
        font: 0.33rem "Microsoft YaHei";
        outline: none;
    }

    #sub {
        background-color: #fecf29;
        color: #000;
    }

    #details {
        margin-top: 0.3rem;
        background-color: #5d5d5d;
        color: #ffffff;
    }

</style>