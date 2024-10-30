import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { showMessage } from './status';

interface requestType {
  url: string;
  params?: any;
}

//创建axsio 赋给常量service
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_DEV, //mdy-jingdata
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
// 添加请求拦截器
service.interceptors.request.use(
  (config: any) => {
    // console.log(config, 'config');
    return config;
  },
  (error: any) => {
    // 对请求错误做些什么
    // console.log(error, 'error');
    return Promise.reject(error);
  },
);
// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    //response参数是响应对象
    if (response.status === 200) {
      const { data } = response;
      return data;
    }
  },
  (error: any) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status);
      return Promise.reject(response.data);
    }
    showMessage('网络连接异常,请稍后再试!');
  },
);

/**
 * @description GET
 */
const GET = ({ url, params }: requestType) => {
  return service({
    url,
    method: 'GET',
    params,
  } as AxiosRequestConfig);
};

/**
 * @description POST
 */
const POST = ({ url, params }: requestType) => {
  return service({
    url,
    method: 'POST',
    data: params,
  } as AxiosRequestConfig);
};
/**
 * @description PUT
 */
const PUT = ({ url, params }: requestType) => {
  return service({
    url,
    method: 'PUT',
    data: params,
  } as AxiosRequestConfig);
};

/**
 * @description DELETE
 */
const DELETE = ({ url, params }: requestType) => {
  return service({
    url,
    method: 'delete',
    data: params,
  } as AxiosRequestConfig);
};

/**
 * @description PATCH
 */
const PATCH = ({ url, params }: requestType) => {
  return new Promise((resolve, reject) => {
    service
      .put(url, params)
      .then((res: any) => {
        if (res && res.status == 200) {
          resolve(res);
        }
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
export { GET, POST, PUT, DELETE, PATCH };
