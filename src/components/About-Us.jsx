import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  FaUtensils,
  FaShippingFast,
  FaUsers,
  FaStar,
} from "react-icons/fa";

function AboutUs() {
  const stats = [
    {
      value: "10K+",
      title: "Customers",
    },
    {
      value: "500+",
      title: "Restaurants",
    },
    {
      value: "50K+",
      title: "Deliveries",
    },
    {
      value: "4.9★",
      title: "Rating",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#fffdf9]">
      {/* Background blobs */}
      <div className="absolute -top-24 left-0 h-[400px] w-[400px] rounded-full bg-orange-200 blur-[120px] opacity-30"></div>

      <div className="absolute top-60 right-0 h-[350px] w-[350px] rounded-full bg-red-200 blur-[120px] opacity-20"></div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
          >
            <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full font-medium">
              🍽️ About QuickBite
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-black leading-tight">
              A World Of Flavors,
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Delivered To Your Door
              </span>
            </h1>

            <p className="mt-8 text-gray-500 leading-8 max-w-xl">
              Enjoy South Indian, North Indian, Asian specialties and
              international favorites delivered fresh and fast.
            </p>

            <div className="flex gap-4 mt-10">
              <Link to="/home" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl shadow-xl">
                Explore Menu
              </Link>

              <button className="border border-orange-200 px-8 py-4 rounded-2xl hover:bg-orange-50">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1742281258189-3b933879867a?w=1200&auto=format&fit=crop"
              className="h-[500px] w-full object-cover rounded-[40px] shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 shadow-lg text-center"
            >
              <h1 className="text-3xl font-bold text-orange-500">
                {item.value}
              </h1>

              <p className="text-gray-500 mt-2">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Wave Divider */}
      <div className="overflow-hidden">
        <svg viewBox="0 0 1440 120" className="fill-orange-50 w-full">
          <path d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,74.7C1120,53,1280,43,1360,37.3L1440,32V160H0Z"></path>
        </svg>
      </div>

      {/* Features */}
      <section className="bg-orange-50 py-0 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Why Choose QuickBite?
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Fresh meals, diverse cuisines and lightning-fast delivery —
              everything you need for a great food experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              {
                icon: <FaUtensils />,
                title: "Variety",
                desc: "South Indian, North Indian, Asian and global favorites.",
              },
              {
                icon: <FaShippingFast />,
                title: "Fast Delivery",
                desc: "Fresh meals delivered quickly to your doorstep.",
              },
              {
                icon: <FaUsers />,
                title: "Trusted",
                desc: "Loved by thousands of happy customers.",
              },
              {
                icon: <FaStar />,
                title: "Top Rated",
                desc: "Quality service with excellent ratings.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                bg-white
                rounded-[30px]
                p-7
                shadow-xl
                "
              >
                <div className="text-5xl text-orange-500 mb-5">{item.icon}</div>

                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

                <p className="text-gray-500 leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Cuisine Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-5">
            Flavors For Every Craving 🍜
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto">
            Discover authentic Indian dishes, Asian delights and international
            favorites all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              image:
                "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800",
              title: "South Indian",
              desc: "Dosa, Idli, Meals & Biryani",
            },

            {
              image:
                "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
              title: "North Indian",
              desc: "Paneer, Butter Chicken & Naan",
            },

            {
              image:
                "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800",
              title: "Asian",
              desc: "Chinese, Thai, Japanese & Korean",
            },

            {
              image:
                "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
              title: "International",
              desc: "Pizza, Pasta & Burgers",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-[30px] overflow-hidden shadow-xl"
            >
              <img src={item.image} className="h-56 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

                <p className="text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-orange-80 rounded-[32px] overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 items-center">
            <motion.div
              className="p-8 md:p-12"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-orange-500 font-medium mb-3">Our Mission</p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                Making Every Meal Delightful 🚀
              </h2>

              <p className="text-gray-500 leading-7">
                Bringing South Indian, North Indian, Asian and international
                cuisines together with fast and reliable delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?w=1200&auto=format&fit=crop"
                alt="Food"
                className="h-72 md:h-96 w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer Quote */}
      <section className="pb-16 px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-relaxed text-gray-900">
            Great Food,
            <span className="text-orange-500"> Delivered With Care.</span>
          </h2>

          <p className="mt-5 text-gray-500">
            Fresh flavors, fast delivery and unforgettable experiences.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;