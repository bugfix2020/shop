<template>
    <div class="equity">
        <slot></slot>
    </div>
</template>


<script>
    export default {
        name: "Equity",
        components: {}
    }
</script>

<style scoped>
    .equity {
        width: 7.5rem;
        display: flex;
        border-bottom: #eef3f6 solid 0.25rem;
    }

</style>