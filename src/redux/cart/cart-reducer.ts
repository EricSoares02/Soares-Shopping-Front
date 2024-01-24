import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: {
    id: '',
    ownerId: '',
    products: []
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCart: (state, action) => {
    
    },

    removeItem: (state, action) => {
      
    },
    insertItem: (state, action) => {
      
    },
    lessItem: (state, action) => {
      
    },
    modifyOptionItem: (state, action) => {
      
    },
    
  },
});

export const { getCart, insertItem, lessItem, modifyOptionItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
