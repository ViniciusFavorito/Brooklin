import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
  name: string;
  shortDescription: string;
  id: string;
  images: [
    {
      alt: string;
      asset: {
        url: string;
      };
    }
  ];
  category: [
    {
      id: string;
      name: string;
    }
  ];
}

export interface IProductsState {
  data: IProduct[];
}

const initialState: IProductsState = {
  data: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
