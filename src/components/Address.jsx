import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveAddress } from "../Constants/AddressSlice";
import { useNavigate } from "react-router-dom";

function Address() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    house: "",
    street: "",
    area: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !address.name ||
      !address.phone ||
      !address.house ||
      !address.street ||
      !address.area ||
      !address.city ||
      !address.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    dispatch(saveAddress(address));

    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6">

        <h1 className="text-3xl font-bold mb-6">
          Delivery Address
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={address.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={address.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="house"
            placeholder="House / Flat No"
            value={address.house}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="street"
            placeholder="Street"
            value={address.street}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="area"
            placeholder="Area"
            value={address.area}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              className="border rounded-lg p-3"
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={address.pincode}
              onChange={handleChange}
              className="border rounded-lg p-3"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
          >
            Continue to Payment
          </button>

        </form>

      </div>
    </div>
  );
}

export default Address;