import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './AppSlice'
import AddressReducer from './AddressSlice'
import PaymentReducer from "./PaymentSlice";
import OrderReducer from "./OrderSlice";


export default configureStore({
  reducer: {
    Cart: CartReducer,
    Address: AddressReducer,
    Payment: PaymentReducer,
    Order: OrderReducer,
  }, 
})

