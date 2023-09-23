import axios from "axios";
import { DEV_URL_API } from "../constants";

const apiMethod = axios.create({
  baseURL: DEV_URL_API,
});

apiMethod.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);
apiMethod.interceptors.request.use((request) => {
  return request;
});

export default apiMethod;
