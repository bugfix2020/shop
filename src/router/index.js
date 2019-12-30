//引入vue核心库
import Vue from 'vue';
//引入vue-router核心库
import VueRouter from 'vue-router';
//安装vue-route
Vue.use(VueRouter);

//懒加载组件
const index = () => import('@/views/index/index');
const login = () => import('@/views/login/login');
const register = () => import('@/views/register/register');
const resetPassword = () => import('@/views/resetPassword/resetPassword');
const merchantIndex = () => import('@/views/merchantIndex/merchantIndex');
const recharge = () => import('@/views/recharge/recharge');

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
    },
    {
        name: 'login',
        path: '/login',
        component: login,
        meta: {
            title: '登录'
        }
    },
    {
        name: 'register',
        path: '/register',
        component: register,
        meta: {
            title: '入驻'
        }
    },
    {
        name: 'resetPassword',
        path: '/resetPassword',
        component: resetPassword,
        meta: {
            title: '重置密码'
        }
    },
    {
        name: 'merchantIndex',
        path: '/merchantIndex',
        component: merchantIndex,
        meta: {
            title: '商户管理'
        }
    },
    {
        name: 'recharge',
        path: '/recharge',
        component: recharge,
        meta: {
            title: '商户保证金充值'
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