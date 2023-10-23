import { Api } from "../helper";

export const products = {
  getFeatured: async function ({auth}) {
    try {
      const response = await Api.get({url:`/api/v1/products/featured`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  getProductsWithFiltersAndPagination: async function ({query,auth}) {
    try {
      const response = await Api.get({url:`/api/v1/products/?${query}`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  getProductById: async function ({id,auth}) {
    try {
      const response = await Api.get({url:`/api/v1/products/${id}`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
};
