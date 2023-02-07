import axios from "axios";



export const baseURL = "https://cryxxen.pythonanywhere.com";

export const instance = axios.create({ baseURL });


instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
})