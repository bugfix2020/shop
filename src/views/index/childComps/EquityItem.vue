<template>
    <div class="equity_item" @click="redirectTo(path)">
        <div class="img_contain">
            <slot name="img"></slot>
        </div>
        <slot name="text"></slot>
    </div>
</template>

<script>
    export default {
        name: "EquityItem",
        methods: {
            redirectTo(path) {
                // eslint-disable-next-line no-console
                console.log(path);
            }
        },
        props: {
            path: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .equity_item {
        flex: 1;
    }

    .equity_item .img_contain img {
        display: block;
        margin: 0.35rem auto 0.2rem auto;
    }

    .equity_item p {
        font: 0.25rem "Microsoft YaHei";
        color: #555;
        text-align: center;
        padding-bottom: 0.3rem;
    }
</style>