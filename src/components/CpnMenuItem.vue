<template>
        <el-submenu :index="item.id.toString()" v-if="item.children">
            <template slot="title">{{item.name}}</template>
            <el-menu-item v-for="cItem in item.children" :index="cItem.id.toString()" :key="cItem.id">
                {{cItem.name}}
                <!--            <a :href="cItem.path">-->
                <!--                {{cItem.name}}-->
                <!--            </a>-->
            </el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.id.toString()" v-else>
            {{item.name}}
            <!--        <a :href="item.path">-->
            <!--            {{item.name}}-->
            <!--        </a>-->
        </el-menu-item>
</template>

<script>
    export default {
        name: "CpnMenuItem",
        data(){
            return {
            }
        },
        props: {
            item: {
                type: Object,
                require: true
            }
        }
    }
</script>

<style scoped>

</style>