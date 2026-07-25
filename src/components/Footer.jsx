import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
import logo from "../assets/QuickBite.png";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="QuickBite" className="h-12" />
            <h2 className="text-2xl font-bold text-orange-500">QuickBite</h2>
          </div>

          <p className="mt-4 text-gray-400 text-sm leading-6">
            Delivering delicious meals to your doorstep quickly and reliably.
            Enjoy your favorite dishes anytime with QuickBite.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>

            <li>
              <Link to="/About-Us" className="hover:text-orange-500">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/help" className="hover:text-orange-500">
                Help
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-orange-500">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>support@quickbite.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaLocationDot />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">
            <a href="#" className="hover:text-orange-500">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-orange-500">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-orange-500">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} QuickBite. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;