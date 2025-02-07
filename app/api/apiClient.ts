import axios from "axios";
import { getSession } from "next-auth/react";

interface ExtendedUser {
  token: string;
}

const apiClient = axios.create({
  baseURL: "https://api-zarcol-912b8342168f.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token a cada solicitud
apiClient.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    const token = (session?.user as ExtendedUser)?.token;
    if (token) {
      config.headers["x-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
