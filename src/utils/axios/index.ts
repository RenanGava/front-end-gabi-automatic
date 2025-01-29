import { signOut } from "@/context/AuthContext";
import axios, { AxiosError } from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from "./errors/AuthTokenError";
import { redirect } from "next/navigation";


const token = parseCookies()

export const api = axios.create({
  // http://localhost:8080
  baseURL: "https://send-message-api.fly.dev/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});



api.interceptors.request.use((config) => {
  
  const token = parseCookies();
  config.headers["Authorization"] = `Bearer ${token.jwt}`;
  return config;
});

api.interceptors.response.use((config) => {
  
  return config;
}, (error: AxiosError) =>{
  if(error.response?.status === 401){
    
    
    if(typeof window !== undefined){
      signOut()
      redirect('/')
    }
    else{
      return Promise.reject(new AuthTokenError())
    }
  }
  return Promise.reject(error)
});
