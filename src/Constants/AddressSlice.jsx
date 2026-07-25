import { createSlice } from "@reduxjs/toolkit";

const AddressSlice = createSlice({
  name: "Address",
  initialState: {
    name: "",
    phone: "",
    house: "",
    street: "",
    area: "",
    city: "",
    pincode: "",
  },

  reducers: {
    saveAddress: (state, action) => {
      return { ...state, ...action.payload };
    },

    clearAddress: () => ({
      name: "",
      phone: "",
      house: "",
      street: "",
      area: "",
      city: "",
      pincode: "",
    }),
  },
});

export const { saveAddress, clearAddress } = AddressSlice.actions;
export default AddressSlice.reducer;