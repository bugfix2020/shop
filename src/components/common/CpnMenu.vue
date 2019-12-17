<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <CpnMenuItem v-for="menu in menus" :key="menu.id" :item="menu"></CpnMenuItem>
    </el-menu>
</template>

<script>
    import {getMenuData} from "@/network/index";
    import CpnMenuItem from "@/components/CpnMenuItem";

    export default {
        name: "CpnMenu",
        data() {
            return {
                menus: [],
                activeIndex: '1',
            };
        },
        created() {
            // eslint-disable-next-line no-console
            console.log(1);
            getMenuData().then(res => {
                this.menus = res;
            });
        },
        methods: {
            handleSelect(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath);
            }
        },
        components: {
            CpnMenuItem
        }
    }
</script>

<style scoped>

</style>