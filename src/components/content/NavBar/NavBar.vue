<template>
    <div id="nav_bar_contain" class="nav_bar_contain_user">
        <div id="nav_bar_contain_inner">
            <slot name="left"></slot>
            <slot name="center"></slot>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBarItem",
        mounted() {
            let identity = this.$route.query.identity.toString();
            document.getElementById('nav_bar_contain').className = 'nav_bar_contain_' + identity;
            document.getElementById('nav_bar_contain_inner').className = 'nav_bar_contain_inner_' + identity;
        }
    }
</script>

<style scoped>
    #nav_bar_contain {
        width: 7.5rem;
    }

    /*主题色*/
    .nav_bar_contain_user {
        background: #3696ed;
    }

    .nav_bar_contain_merchant {
        background: #fecf29;
    }

    #nav_bar_contain_inner {
        width: 7.2rem;
        margin: 0 auto;
        height: 0.91rem;
        display: flex;
        font: 0.34rem "Microsoft YaHei";
    }

    /*主题色*/
    .nav_bar_contain_inner_user {
        color: #fff;
    }

    /*主题色*/
    .nav_bar_contain_inner_merchant {
        color: #000;
    }

    #nav_bar_contain_inner > p {
        flex: 1;
        line-height: 0.91rem !important;
    }

    #nav_bar_contain_inner > p:first-of-type {
        text-align: left;
    }

    #nav_bar_contain_inner > p:nth-of-type(2) {
        text-align: center;
    }

    #nav_bar_contain_inner > p:nth-of-type(3) {
        text-align: right;
        font: 0.31rem "Microsoft YaHei";
    }
</style>