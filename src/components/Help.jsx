import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Help() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const faqs = [
    {
      q: "I didn’t receive my order",
      a: "Track your order in real-time. If delayed, contact support via app."
    },
    {
      q: "How do I cancel an order?",
      a: "Go to Orders → Select order → Tap Cancel if eligible."
    },
    {
      q: "Payment deducted but order failed",
      a: "Refund will be processed automatically in 3–5 business days."
    },
    {
      q: "How to track my order?",
      a: "Open Orders section → Click Track Order to view live status."
    },
    {
      q: "How do I change delivery address?",
      a: "You can change address before order is confirmed."
    }
  ];

  const filteredFaqs = faqs.filter((item) =>
    item.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 flex justify-center">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-semibold text-gray-900">
            Help & Support 🍔
          </h1>
          <p className="text-gray-500 text-sm">
            QuickBite Support Center
          </p>
        </motion.div>

        {/* Search */}
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          placeholder="Search for help (orders, payment, delivery...)"
          className="w-full p-3 rounded-xl border bg-white shadow-sm outline-none mb-6 text-sm focus:ring-2 focus:ring-orange-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.map((item, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white rounded-xl border shadow-sm overflow-hidden transition hover:shadow-md"
            >
              {/* Question */}
              <div
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="p-4 cursor-pointer flex justify-between items-center select-none"
              >
                <span className="font-medium text-gray-800 text-sm">
                  {item.q}
                </span>

                <span className="text-xl text-orange-500 leading-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-4 pb-4 text-gray-600 text-sm overflow-hidden"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom Support Card */}
        {/* Bottom Support Card */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="mt-8 bg-orange-500 text-white p-5 rounded-xl shadow-md"
>
  <h2 className="font-semibold text-lg">
    Still need help?
  </h2>

  <p className="text-sm opacity-90">
    Contact QuickBite support 24/7
  </p>

  <div className="flex gap-3 mt-3">
    
    {/* Email Support */}
    <a
      href="mailto:support@quickbite.com"
      className="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium text-sm hover:scale-105 transition"
    >
      Email Us
    </a>

    {/* Call Support */}
    <a
      href="tel:+919876543210"
      className="border border-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-white hover:text-orange-500 transition"
    >
      Call
    </a>

  </div>
</motion.div>

      </div>
    </div>
  );
}

export default Help;