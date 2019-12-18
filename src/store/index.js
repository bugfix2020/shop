//引入vue核心库
import Vue from 'vue';
//引入vuex核心库
import Vuex from 'vuex';
//安装vuex
Vue.use(Vuex);

const store = new Vuex.Store({
    //全局共享状态
    state: {
        count: 0,
        data: [
            {id: 1, text: '...', done: true},
            {id: 2, text: '...', done: false}
        ]
    },
    //同步修改全局共享状态
    mutations: {
        increment(state) {
            state.count++
        }
    },
    //异步修改全局状态
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    //全局共享方法
    getters: {
        doneData: state => {
            return state.data.filter(todo => todo.done)
        }
    },
    //modules模块化 暂时用不到
    modules: {}
});

//导出store
export default store;

