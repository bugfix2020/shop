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

//引入Mint
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(ElementUI);
Vue.use(Mint);

Vue.config.productionTip = false;

//引入lodash 并挂载到Vue
Vue.prototype.$_ = require('lodash');
Vue.prototype.$fp = require('lodash/fp');
Vue.prototype.$array = require('lodash/array');
Vue.prototype.$object = require('lodash/fp/object');
Vue.prototype.$at = require('lodash/at');
Vue.prototype.$curryN = require('lodash/fp/curryN');

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
