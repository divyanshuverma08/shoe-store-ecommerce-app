import { Api } from "../helper";

export const order = {
  createOrder: async function ({data,auth}) {
    try {
      const response = await Api.post({url:`/api/v1/orders`,data,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  createCheckout: async function ({id,auth}) {
    try {
      const response = await Api.post({url:`/api/v1/orders/checkout/${id}`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  getOrderByUser: async function ({id,auth}) {
    try {
      const response = await Api.get({url:`/api/v1/orders/user/${id}`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
};
