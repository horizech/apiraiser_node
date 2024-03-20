import axios from 'axios';

const setupAxiosInterceptors = (onUnauthenticated: any) => {
  const onResponseSuccess = (response: any) => {
    const status = response.status;
    if (status === 403 || status === 401) {
      onUnauthenticated();
    }
    return response;
  };
  const onResponseFail = (error: any) => {
    const status = error.status || error.response.status;
    if (status === 403 || status === 401) {
      onUnauthenticated();
    }
    return Promise.reject(error);
  };
  axios.interceptors.response.use(onResponseSuccess, onResponseFail);
};
export default setupAxiosInterceptors;
