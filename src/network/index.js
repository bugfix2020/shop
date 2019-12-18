import axios, {allAxios} from "@/network/axios";

//首页请求方法
export function Fn1() {
    return axios({
        url: 'url'
    });
}


export function Fn2() {
    return axios({
        url: 'url'
    });
}

export function Fn3() {
    return allAxios(Fn4(), Fn5())
}

function Fn4() {
    return axios({url: '/home/multidata'});
}

// eslint-disable-next-line no-unused-vars
function Fn5() {
    return axios({url: '/home/data'});
}