import { createSlice } from "@reduxjs/toolkit";

const PaymentSlice = createSlice({
  name: "Payment",

  initialState: {
    method: "COD",
  },

  reducers: {
    setPaymentMethod: (state, action) => {
      state.method = action.payload;
    },
  },
});

export const { setPaymentMethod } = PaymentSlice.actions;
export default PaymentSlice.reducer;