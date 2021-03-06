/**
 * Please add your custom config
 *
 * @version 4
 */
import Axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  AxiosInstance,
} from 'axios';
//@ts-ignore
import qs from 'qs';
import { axiosEvent } from './event';
import { axiosLoading } from './loading';

const baseConfig: AxiosRequestConfig = {
  baseURL: '/api/usercenter',
};

let axiosInstance: AxiosInstance;

function getAxiosInstance(): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = Axios.create(baseConfig);

    axiosInstance.interceptors.request.use(config => {
      axiosLoading({ type: 'add' });
      return config;
    });

    // Response interceptor
    axiosInstance.interceptors.response.use(
      response => {
        const res = response.data;
        if (res.code !== '0') {
          axiosEvent({
            type: 'fail',
            response: {
              status: response.status,
              data: response.data,
            },
          });

          axiosLoading({ type: 'reset' });

          throw res;
        }

        axiosLoading({ type: 'sub' });
        return res;
      },
      (error: AxiosError) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        axiosEvent({
          type: 'fail',
          response: {
            status: error.response?.status,
            data: error.response?.data,
          },
        });

        axiosLoading({ type: 'reset' });

        if (error.response) {
          return Promise.reject(
            new RequestError({
              message: error.response.data,
              status: error.response.status,
              response: error.response,
            })
          );
        }

        if (error.isAxiosError) {
          return Promise.reject(
            new RequestError({
              message: 'noInternetConnection',
            })
          );
        }
        return Promise.reject(error);
      }
    );
  }

  return axiosInstance;
}

interface ErrorParam {
  message: string;
  status?: number;
  response?: AxiosResponse;
}

class RequestError extends Error {
  message: string;
  status?: number;
  response?: AxiosResponse;

  constructor({ message, status, response }: ErrorParam) {
    super();
    this.message = message;
    this.status = status;
    this.response = response;
  }

  isApiException = true;
}

export type Security = any[] | undefined;

export type SwaggerResponse<R> = R;

export {
  getAxiosInstance,
  RequestError,
  // as backward compatible v3
  RequestError as Exception,
};
