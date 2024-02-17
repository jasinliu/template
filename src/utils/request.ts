import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { ElMessage } from 'element-plus';

//创建axios实例
const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

//请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // TODO: 实现token
    // config.headers['Authorization'] = getToken();
    return config;
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject();
  },
);

//响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    //处理网络错误
    let msg = '';
    const status = error.status;
    switch (status) {
      case 401:
        msg = 'token过期';
        break;
      case 403:
        msg = '无权访问';
        break;
      case 404:
        msg = '请求地址错误';
        break;
      case 500:
        msg = '服务器出现问题';
        break;
      default:
        msg = '无网络';
    }
    console.log(msg);
    ElMessage({
      type: 'error',
      message: msg,
    });
    return Promise.reject(error);
  },
);

export default request;
