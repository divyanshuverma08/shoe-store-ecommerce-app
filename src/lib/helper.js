import axios from "axios";
import { environment } from "./environment";

const headers = {
  "Content-Type": "application/json",
  "api-key": `${environment.API_KEY}`,
};

const getToken = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user")).jwtToken
      : "";
  }
};

const headerWithAuth = {
  ...headers,
  authorization: `Bearer ${getToken()}`,
};

export const Api = {
  post: async function ({url, data, auth}) {
    try {
      const response = await axios.post(environment.SERVER_URL + url, data, {
        headers: auth ? headerWithAuth : headers,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  get: async function ({url, auth}) {
    try {
      const response = await axios.get(environment.SERVER_URL + url, {
        headers: auth ? headerWithAuth : headers,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  put: async function ({url, data, auth}) {
    try {
      const response = await axios.put(environment.SERVER_URL + url, data, {
        headers: auth ? headerWithAuth : headers,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  delete: async function ({url, auth}) {
    try {
      const response = await axios.delete(environment.SERVER_URL + url, {
        headers: auth ? headerWithAuth : headers,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
};
