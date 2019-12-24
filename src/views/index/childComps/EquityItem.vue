<template>
    <div class="chuanke_a">
        <div class="chuanke_box">
            <div>
                <slot name="img"></slot>
            </div>
            <p>
                <slot name="text"></slot>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EquityItem"
    }
</script>

<style scoped>
    .chuanke_a {
        display: flex;
        justify-content: space-around;
    }

    .chuanke_box {
        display: flex;
        flex-direction: column;
        margin: 5px;
    }

    .chuanke_box img {
        margin: auto;
        width: 40px;
        height: 40px;
    }

    .chuanke_box p {
        margin: auto;
        padding: 5px 0 5px 0;
        color: #7D7D7D;
        font-size: 13px;
    }
</style>