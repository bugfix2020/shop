//引入vue核心库
import Vue from 'vue';
//引入vue-router核心库
import VueRouter from 'vue-router';
//安装vue-route
Vue.use(VueRouter);

//todo 懒加载方式引入所需组件
const index = () => import('@/views/index/index');

//设置routes对象 映射路由关系
const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        name: 'index',
        path: '/index',
        component: index,
        meta: {
            title: '首页'
        }
    }
];

//设置mode对象
const mode = 'history';

//构建router对象
const router = new VueRouter({
    routes,
    mode,
});

//设置路由守卫
router.beforeEach((to, from, next) => {
    //设置头
    document.title = to.meta.title;
    next();
});

//导出router
export default router;