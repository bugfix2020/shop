<template>
    <div class="nav_bar_contain">
        <div class="nav_bar_contain_inner">
            <slot name="left"></slot>
            <slot name="center"></slot>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBarItem"
    }
</script>

<style scoped>
    .nav_bar_contain {
        width: 7.5rem;
        background: #3696ed;
    }

    .nav_bar_contain_inner {
        width: 7.2rem;
        margin: 0 auto;
        height: 0.91rem;
        display: flex;
        font: 0.34rem "Microsoft YaHei";
        color: #fff;
    }

    .nav_bar_contain_inner > p {
        flex: 1;
        line-height: 0.91rem !important;
    }

    .nav_bar_contain_inner > p:first-of-type {
        text-align: left;
    }

    .nav_bar_contain_inner > p:nth-of-type(2) {
        text-align: center;
    }

    .nav_bar_contain_inner > p:nth-of-type(3) {
        text-align: right;
        font: 0.31rem "Microsoft YaHei";
    }
</style>