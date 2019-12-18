//引入vue核心库
import Vue from 'vue';
//引入vue-router核心库
import VueRouter from 'vue-router';
//安装vue-route
Vue.use(VueRouter);

//todo 懒加载方式引入所需组件
// const Foo = () => import('./Foo.vue');

//设置routes对象 映射路由关系
const routes = [
    {
        name: '首页',
        path: '/index',
        components: ''
    }
];

//设置mode对象
const mode = 'history';

//构建router对象
const router = new VueRouter({
    routes,
    mode,
});

//导出router
export default router;