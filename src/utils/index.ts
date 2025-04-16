import axios from "axios";

const baseURL = "https://dummyjson.com";

export const axiosReq = axios.create({
  baseURL,
});
