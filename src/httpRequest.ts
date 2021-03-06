/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 4
 */
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAxiosInstance, Security } from './config';

import qs from 'qs';

export const Http = {
  async getRequest(
    url: string,
    // @ts-ignore
    queryParams: any | undefined,
    //@ts-ignore
    _requestBody: undefined,
    //@ts-ignore
    security: Security,
    // @ts-ignore
    configOverride?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    let query = queryParams;
    const form = queryParams?.form || {};
    if (typeof form === 'object') {
      query = form;
    }

    return getAxiosInstance().get(`${url}?${qs.stringify(query)}`);
  },
  async postRequest(
    url: string,
    //@ts-ignore
    queryParams: any | undefined,
    requestBody: any | undefined,
    //@ts-ignore
    security: Security,
    //@ts-ignore
    configOverride?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return getAxiosInstance().post(url, requestBody);
  },
  async putRequest(
    url: string,
    //@ts-ignore
    queryParams: any | undefined,
    requestBody: any | undefined,
    //@ts-ignore
    security: Security,
    //@ts-ignore
    configOverride?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return getAxiosInstance().put(url, requestBody);
  },
  async deleteRequest(
    url: string,
    //@ts-ignore
    queryParams: any | undefined,
    //@ts-ignore
    _requestBody: undefined,
    //@ts-ignore
    security: Security,
    //@ts-ignore
    configOverride?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return getAxiosInstance().delete(url);
  },
};
