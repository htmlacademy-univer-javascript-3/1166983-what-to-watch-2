import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT } from '../constants/api.ts';
import { getToken } from './storage.ts';

export function initAPI (): AxiosInstance {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
}
