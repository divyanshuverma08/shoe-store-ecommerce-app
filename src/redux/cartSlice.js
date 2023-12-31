import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
  quantity: 0,
  totalAmount: 0,
  valid: true,
  deliveryType: "Standard"
};

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = JSON.parse(localStorage.getItem("cart"));
    return value || initialState;
  }
  return initialState;
};

const saveToLocalStorage = (state) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart",JSON.stringify(state));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getFromLocalStorage(),
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push(action.payload);
      }
      state.quantity += 1;
      saveToLocalStorage(state);
    },
    removeProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size
      );

      if (productIndex !== -1) {
        state.quantity -= state.products[productIndex].quantity;
        state.products.splice(productIndex, 1);
      }
      saveToLocalStorage(state);
    },
    changeProductQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size
      );

      if (productIndex !== -1) {
        let oldQuantity = state.products[productIndex].quantity;
        state.products[productIndex].quantity = action.payload.quantity;
        state.quantity -= oldQuantity;
        state.quantity += action.payload.quantity;
      }
      saveToLocalStorage(state);
    },
    loadProduct: (state, action) => {
      const existingProduct = state.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size
      );

      const { model, category, gender, color, price, availableStock, image } =
        action.payload;

      if (existingProduct) {
        existingProduct.model = model;
        existingProduct.category = category;
        existingProduct.gender = gender;
        existingProduct.color = color;
        existingProduct.price = price;
        existingProduct.availableStock = availableStock;
        existingProduct.image = image;
      }
      saveToLocalStorage(state);
    },
    getTotalAmount: (state) => {
      const { products } = state;

      const totalAmount = products.reduce((total,product)=>{
        const productPrice = product.price;
        return total + (product.quantity * productPrice);
      },0)

      state.totalAmount = totalAmount;
      saveToLocalStorage(state);
    },
    checkCartValidity: (state) => {
      const { products } = state;

      var validity = true;

      products.map((product)=>{
        if(product.availableStock < product.quantity){
          validity = false
        }
      });

      state.valid = validity;
      saveToLocalStorage(state);
    },
    selectDeliveryType: (state,action) => {
      state.deliveryType = action.payload;
      saveToLocalStorage(state);
    },
    emptyCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.totalAmount = 0;
      state.deliveryType = "Standard";
      saveToLocalStorage(state);
    },
  },
});

export const {
  addProduct,
  removeProduct,
  changeProductQuantity,
  emptyCart,
  loadProduct,
  getTotalAmount,
  checkCartValidity,
  selectDeliveryType
} = cartSlice.actions;
export default cartSlice.reducer;
