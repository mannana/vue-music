import api from './apiList';
import axios from 'axios';
import querystring from 'querystring';

//处理req data
const opera_req = (data) => querystring.stringify(data)

//处理 res data
const opera_res = (data) => data

//通过axios发送请求
export default async(pathName,queryData) => {
    // https://bird.ioliu.cn/v1?url=
    let str = "http://127.0.0.1:3000";
    let url = str.concat(api[pathName]);
    let result;
    if(queryData) {
        result = await axios.get(url,{
            params: queryData
        });
    }else{
        result = await axios(url);
    }
    let resdata = opera_res(result);
    return new Promise((resolve,reject) => {
        resolve(resdata)
    })
}
