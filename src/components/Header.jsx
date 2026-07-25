import { IoHome } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";

//importing image
import logo from "../assets/QuickBite.png";

function Header() {
  const cartItems = useSelector((store) => store.Cart.data);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  // return <h1 className="header">Header</h1>
  return (
    <header>
      <nav className="navbar flex justify-between items-center bg-orange-600 py-3 px-2 md:px-8">
        <h1 className="text-[25px] font-[600]">
          <Link to="/" className="flex items-center gap-[10px] text-white transition">
            <img src={logo}
              className="h-[35px] md:h-[50px] w-auto"
              alt="QuickBite"
            />
            <span className="hidden md:inline">QuickBite</span>
          </Link>
        </h1>

        <ul className="nav-links flex list-none gap-4 md:gap-6">
          <li>
            <Link
              to="/About-Us"
              className="flex items-center gap-1 text-white hover:text-slate-900"
            >
              <FaUsers className="text-lg md:text-xl" />
              <span className="hidden md:inline">About Us</span>
            </Link>
          </li>

          <li>
            <Link
              to="/help"
              className="flex items-center gap-1 text-white hover:text-slate-900"
            >
              <FaHandsHelping className="text-lg md:text-xl" />
              <span className="hidden md:inline">Help</span>
            </Link>
          </li>

          <li>
            <Link
              to="/sign-in"
              className="flex items-center gap-1 text-white hover:text-slate-900"
            >
              <FaUser className="text-lg md:text-xl" />
              <span className="hidden md:inline">Sign In</span>
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className="relative flex items-center gap-1 text-white hover:text-slate-900"
            >
              <FaShoppingCart className="text-lg md:text-xl" />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-green-700 text-[13px] md:text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}

              <span className="hidden md:inline">Cart</span>
            </Link>
          </li>

          <li>
            <Link
              to="/order-success"
              className="flex items-center gap-1 text-white hover:text-slate-900"
            >
              <FaReceipt className="text-lg md:text-xl" />
              <span className="hidden md:inline">Orders</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
