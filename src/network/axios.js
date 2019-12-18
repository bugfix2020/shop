//引入axios核心库
import originAxios from 'axios';
// import qs from 'qs';
// qs.parse(data);      将URL解析成对象的形式
// qs.stringify(data);  将对象 序列化成URL的形式

//导出方法
export default function axios(option) {
    return new Promise((resolve, reject) => {
        // 1.创建axios的实例
        const instance = originAxios.create({
            baseURL: 'host',
            timeout: 5000
        });

        //请求前拦截
        instance.interceptors.request.use(config => {
            // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

            // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

            // 3.对请求的参数进行序列化(看服务器是否需要序列化)
            // config.data = qs.stringify(config.data)

            //拦截后 必须返回config 否则无法继续执行
            return config;
        }, err => {
            // console.log('来到了request拦截failure中');
            return err;
        });

        //响应后拦截
        instance.interceptors.response.use(response => {
            //请求成功拦截
            return response.data
        }, err => {
            //请求失败拦截
            if (err && err.response) {
                switch (err.response.status) {
                    case 403:
                        err.message = '未授权的访问';
                        break;
                    case 404:
                        err.message = '请求地址不存在';
                        break;
                    case 500:
                        err.message = '服务器内部错误';
                    // eslint-disable-next-line no-fallthrough
                    case 502:
                        err.message = '服务器内部错误';
                        break;
                    case 504:
                        err.message = '请求超时';
                        break;
                    default:
                        //todo 这里需要写日志
                        err.message = '未知错误';
                }
            }
            return err;
        });

        // 2.传入对象进行网络请求
        instance(option).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        });
    })
}