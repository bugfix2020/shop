<template>
    <div id="error">
        <p class="error_message">
            页面不存在『{{seconds}}』秒后返回首页
        </p>
    </div>
</template>

<script>
    export default {
        name: "page404",
        data() {
            return {
                seconds: 3
            }
        },
        mounted() {
            let handle = setInterval(() => {
                --this.seconds;
                if (this.seconds == 0) {
                    clearTimeout(handle);
                    this.$router.replace('/');
                }
            },1000);
        }
    }
</script>

<style scoped>
    #error {
        display: flex;
        height: 100%;
    }

    .error_message {
        margin: auto;
        font: 0.3rem "Microsoft YaHei UI";
    }
</style>