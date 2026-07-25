import { useState } from "react";

function SignIn() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const sendOtp = () => {
    if (phone.length !== 10) {
      alert("Enter valid 10-digit number");
      return;
    }

    console.log("Sending OTP to:", phone);
    setStep(2);
  };

  const verifyOtp = () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    console.log("Verifying OTP:", otp);
    alert("Login successful (demo)");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">

        <h1 className="text-xl font-semibold text-center">
          {step === 1 ? "Enter Mobile Number" : "Enter OTP"}
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          QuickBite Login
        </p>

        {/* STEP 1: PHONE */}
        {step === 1 && (
          <>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              onClick={sendOtp}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium"
            >
              Send OTP
            </button>
          </>
        )}

        {/* STEP 2: OTP */}
        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              onClick={verifyOtp}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium"
            >
              Verify & Login
            </button>

            <button
              onClick={() => setStep(1)}
              className="w-full mt-3 text-sm text-gray-500"
            >
              Change number
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default SignIn;