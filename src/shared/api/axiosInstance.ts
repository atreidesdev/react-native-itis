import {API_TOKEN, BASE_URL} from '@env';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Platform} from 'react-native';

const createAxiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'App-Platform': Platform.OS,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
};

const axiosInstance = createAxiosInstance();

export const apiGet = <T = any>(
  url: string,
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> => axiosInstance.get<T>(url, config);

export const apiPost = <T = any>(
  url: string,
  data: any,
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> => axiosInstance.post<T>(url, data, config);

export const apiPut = <T = any>(
  url: string,
  data: any,
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> => axiosInstance.put<T>(url, data, config);

export const apiDelete = <T = any>(
  url: string,
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> => axiosInstance.delete<T>(url, config);
