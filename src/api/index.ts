// 权限问题后期增加
import { POST } from '/@/utils/http/axios';
import { AxiosResponse } from 'axios';

export const getList = (params?: Object): Promise<AxiosResponse<any, any>> => {
  return POST({
    url: '/suzhou/noAuth/getFilterRows',
    params,
  });
};

export const getInfo = (params?: Object): Promise<AxiosResponse<any, any>> => {
  return POST({
    url: '/suzhou/noAuth/getRowByIdPost',
    params,
  });
};
