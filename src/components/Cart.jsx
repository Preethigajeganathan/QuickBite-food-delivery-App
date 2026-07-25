import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity, clearCart} from "../Constants/AppSlice";
import { Link } from "react-router";
import { useNavigate } from "react-router";

let Cart = () => {
  const cartItems = useSelector((store) => store.Cart.data);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const img = "https://media-assets.swiggy.com/swiggy/image/upload/";

  const getPrice = (item) => {
    const info = item.card.info;
    return (info.finalPrice || info.defaultPrice || info.price) / 100;
  };

  const total = cartItems.reduce(
    (acc, item) => acc + getPrice(item) * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-3 md:px-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        {/* LEFT: CART ITEMS */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Your Cart</h1>

            <button
              onClick={() => dispatch(clearCart())}
              className=" text-sm bg-red-100 text-red-600 px-3 py-2 rounded-lg hover:bg-red-200"
            >
              Clear Cart
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-white p-8 rounded-xl shadow text-center flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt="Empty Cart"
                className="w-40 h-40 mb-4 opacity-80"
              />

              <h2 className="text-xl font-semibold text-gray-800">
                Your cart is empty
              </h2>

              <p className="text-gray-500 mt-2">
                Looks like you haven't added anything yet
              </p>

              <Link
                to="/"
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Browse Restaurants
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => {
                const info = item.card.info;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm p-4 flex justify-between items-center gap-4 hover:shadow-md transition"
                  >
                    {/* ITEM NAME */}
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {info.name}
                      </h2>
                    </div>

                    {/* PRICE */}
                    <div className="text-lg font-bold text-gray-900">
                      ₹{getPrice(item)}
                    </div>

                    {/* REMOVE BUTTON */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity(index))}
                        className="w-8 h-8 rounded bg-gray-200 text-xl"
                      >
                        -
                      </button>

                      <span className="font-bold text-lg">{item.quantity}</span>

                      <button
                        onClick={() => dispatch(increaseQuantity(index))}
                        className="w-8 h-8 rounded bg-green-500 text-white text-xl"
                      >
                        +
                      </button>

                      <button
                        onClick={() => dispatch(removeItem(index))}
                        className="hidden md:block ml-3 bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* RIGHT: SUMMARY (Sticky on desktop) */}
        {cartItems.length > 0 && (
          <div className="w-full md:w-80">
            <div className="bg-white rounded-xl shadow p-5 md:sticky md:top-6">
              <h2 className="text-xl font-bold mb-4">Bill Details</h2>

              <div className="flex justify-between text-gray-600 mb-2">
                <span>Item Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600 mb-2">
                <span>Delivery Fee</span>
                <span className="text-green-600">FREE</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>

              <button onClick={() => navigate("/address")}
                className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
