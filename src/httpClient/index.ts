import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://econominhas.com.br/api',
  timeout: 5000,
});

httpClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default httpClient;
