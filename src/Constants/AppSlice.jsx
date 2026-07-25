import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'Cart',
  initialState: {
    data: [],
  },
  reducers: {
    addItems: (state, action) => {
      const existingItem = state.data.find(
        (item) =>
          item.card.info.id === action.payload.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } 
      else {
        state.data.push({
          ...action.payload,
          quantity: 1,
        });
      }
    } , 
    removeItem: (state, action) => {
      state.data.splice(action.payload, 1);
    },
     increaseQuantity: (state, action) => {
      state.data[action.payload].quantity += 1;
    },


    decreaseQuantity: (state, action) => {
      if(state.data[action.payload].quantity > 1){
        state.data[action.payload].quantity -= 1;
      }
      else{
        state.data.splice(action.payload,1);
      }
    },
   
    clearCart:(state)=>{
      state.data=[];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItems, removeItem, increaseQuantity, decreaseQuantity, clearCart} = CartSlice.actions

export default CartSlice.reducer;