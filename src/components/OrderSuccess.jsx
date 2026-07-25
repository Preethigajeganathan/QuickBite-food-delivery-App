import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

function OrderSuccess() {
  const order = useSelector((store) => store.Order);
  const address = useSelector((store) => store.Address);
  const payment = useSelector((store) => store.Payment);

  if (!order.orderId) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">

        <img
          src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
          alt="No Orders"
          className="w-40 h-40 mx-auto mb-6"
        />

        <h1 className="text-2xl font-bold text-gray-800">
          No Orders Yet
        </h1>

        <p className="text-gray-500 mt-3">
          Looks like you haven't placed any orders yet.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Browse Menu
        </Link>

      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 animate-[fadeIn_.5s_ease-out]">
        {/* Success */}
        <div className="text-center">
          <div className="relative w-fit mx-auto overflow-hidden rounded-full">
            <FaCircleCheck className="text-green-500 text-7xl" />

            <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/90 to-transparent skew-x-[-25deg] animate-shine-delay"></span>
          </div>
          <h1 className="text-3xl font-bold mt-4">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-500 mt-2">Your food is being prepared 🍔</p>

          <div className="mt-6 inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            Estimated Delivery : {order.estimatedTime} mins
          </div>
        </div>

        {/* Order ID */}

        <div className="mt-8 border rounded-xl p-4  animate-[fadeIn_.7s_ease-out]">
          <h2 className="font-semibold text-lg">Order ID</h2>

          <p className="text-orange-500 font-bold mt-2">{order.orderId}</p>
        </div>

        {/* Address */}

        <div className="mt-6 border rounded-xl p-4 animate-[fadeIn_.9s_ease-out]">
          <h2 className="font-semibold text-lg mb-3">Delivery Address</h2>

          <p>{address.name}</p>

          <p>{address.house}</p>

          <p>{address.street}</p>

          <p>{address.area}</p>

          <p>
            {address.city} - {address.pincode}
          </p>

          <p className="mt-2">{address.phone}</p>
        </div>

        {/* Payment */}

        <div className="mt-6 border rounded-xl p-4 animate-[fadeIn_1.1s_ease-out]">
          <h2 className="font-semibold text-lg">Payment Method</h2>

          <p className="mt-2">{payment.method}</p>
        </div>

        {/* Order Summary */}

        <div className="mt-6 border rounded-xl p-4 animate-[fadeIn_1.3s_ease-out]">
          <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

          {order.items.map((item) => {
            const info = item.card.info;

            const price =
              (info.finalPrice || info.defaultPrice || info.price) / 100;

            return (
              <div key={info.id} className="flex justify-between py-2 border-b">
                <span>
                  {info.name} × {item.quantity}
                </span>

                <span>₹{price * item.quantity}</span>
              </div>
            );
          })}

          <div className="flex justify-between mt-5 text-xl font-bold">
            <span>Total</span>

            <span>₹{order.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Button */}

        <Link
          to="/"
          className="block text-center mt-8 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;