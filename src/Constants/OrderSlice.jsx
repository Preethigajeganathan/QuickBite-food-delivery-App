import { createSlice } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
  name: "Order",

  initialState: {
    orderId: "",
    status: "",
    estimatedTime: 25,
    items: [],
    total: 0,
  },

  reducers: {
    placeOrder: (state, action) => {
      state.orderId = "ORD" + Date.now();
      state.status = "Placed";
      state.items = action.payload.items;
      state.total = action.payload.total;
    },

    clearOrder: (state) => {
      state.orderId = "";
      state.status = "";
      state.items = [];
      state.total = 0;
    },
  },
});

export const { placeOrder, clearOrder } = OrderSlice.actions;

export default OrderSlice.reducer;