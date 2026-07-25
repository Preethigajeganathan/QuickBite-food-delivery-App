import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPaymentMethod } from "../Constants/PaymentSlice";
import { placeOrder } from "../Constants/OrderSlice";
import { clearCart } from "../Constants/AppSlice";
import { useNavigate } from "react-router-dom";

function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.Cart.data);

  const [method, setMethod] = useState("COD");

  const total = cartItems.reduce((acc, item) => {
    const price =
      (item.card.info.finalPrice ||
        item.card.info.defaultPrice ||
        item.card.info.price) / 100;

    return acc + price * item.quantity;
  }, 0);

  const handlePayment = () => {
    dispatch(setPaymentMethod(method));

    dispatch(
      placeOrder({
        items: cartItems,
        total,
      })
    );

    dispatch(clearCart());

    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6">

        <h1 className="text-3xl font-bold mb-6">
          Choose Payment Method
        </h1>

        <div className="space-y-4">

          <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer">
            <input
              type="radio"
              checked={method === "COD"}
              onChange={() => setMethod("COD")}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer">
            <input
              type="radio"
              checked={method === "UPI"}
              onChange={() => setMethod("UPI")}
            />
            UPI
          </label>

          <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer">
            <input
              type="radio"
              checked={method === "Card"}
              onChange={() => setMethod("Card")}
            />
            Credit / Debit Card
          </label>

          <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer">
            <input
              type="radio"
              checked={method === "Wallet"}
              onChange={() => setMethod("Wallet")}
            />
            Wallet
          </label>

        </div>

        {/* Optional fields */}

        {method === "UPI" && (
          <input
            type="text"
            placeholder="Enter UPI ID"
            className="w-full mt-5 border rounded-lg p-3"
          />
        )}

        {method === "Card" && (
          <div className="space-y-3 mt-5">

            <input
              type="text"
              placeholder="Card Number"
              className="w-full border rounded-lg p-3"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="MM / YY"
                className="border rounded-lg p-3"
              />

              <input
                type="password"
                placeholder="CVV"
                className="border rounded-lg p-3"
              />

            </div>

          </div>
        )}

        <div className="border-t mt-6 pt-5">

          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
          >
            Pay ₹{total.toFixed(2)}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Payment;