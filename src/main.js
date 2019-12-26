//引入vue核心库
import Vue from 'vue'
//引入入口文件
import App from './App.vue'
//引入路由文件
import router from '@/router/index';
//引入vuex文件
import store from '@/store/index';
//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//引入Mint
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
