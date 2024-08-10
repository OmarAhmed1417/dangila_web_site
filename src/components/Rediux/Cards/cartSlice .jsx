import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find(item => item.id === action.payload.id);
      if (!itemExists) {
        state.push({ ...action.payload, count: 1 });
      } else {
        itemExists.count += 1;
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    incrementCount: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.count += 1;
      }
    },
    decrementCount: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.count > 1) {
        item.count -= 1;
      }else{
      return state.filter(item => item.id !== action.payload);

      }
    }
  },
});

export const { addToCart, removeFromCart, incrementCount, decrementCount } = cartSlice.actions;
export default cartSlice.reducer;
