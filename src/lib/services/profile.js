import { Api } from "../helper";

export const profile = {
  getUser: async function ({id,auth}) {
    try {
      const response = await Api.get({url:`/api/v1/users/${id}`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  updateUser: async function ({id,data,auth}) {
    try {
      const response = await Api.put({url:`/api/v1/users/${id}`,data,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  updatePassword: async function ({data,auth}) {
    try {
      const response = await Api.put({url:`/api/v1/users/password/update`,data,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  createPassword: async function ({data,auth}) {
    try {
      const response = await Api.put({url:`/api/v1/users/password/create`,data,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
};
