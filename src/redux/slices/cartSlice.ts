import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, ICartItem, IProduct } from "../../interfaces/interfaces";

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      let index = state.value.findIndex(
        (i: ICartItem) => i.product.id === action.payload.id
      );

      const isExisted = index > -1;

      if (!isExisted) {
        state.value.push({ product: action.payload, count: 1 });
      } else {
        state.value[index].count = state.value[index].count + 1;
      }
    },

    deleteItem: (state, action: PayloadAction<IProduct>) => {
      let index = state.value.findIndex(
        (i: ICartItem) => i.product.id === action.payload.id
      );

      const isBiggerThanOne = state.value[index]?.count > 1;

      if (isBiggerThanOne) {
        state.value[index].count = state.value[index].count - 1;
      } else {
        state.value.splice(index, 1);
      }
    },

    resetCart: (state) => {
      state.value.splice(0, state.value.length);
    },
  },
});

export const { addItem, deleteItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
