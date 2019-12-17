<template>
    <el-container>
        <el-header>
            <CpnMenu></CpnMenu>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
    import CpnMenu from "@/components/common/CpnMenu";

    export default {
        name: "index",
        data() {
            return {
                menus: [],
            }
        },
        components:{
            CpnMenu
        },
        created() {
        }
    }
</script>

<style scoped>

</style>