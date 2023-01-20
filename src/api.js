import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ucs-goma-backend.herokuapp.com/"
});
export const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);
