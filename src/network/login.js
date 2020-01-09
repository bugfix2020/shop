import request from "@/network/axios";

/**
 * 接口 - 创客登录
 */
export function userLogin(data) {
    return request({
        url: 'api/user/login',
        method: 'post',
        data
    });
}
