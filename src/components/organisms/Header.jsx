import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

import { FaBars } from "react-icons/fa";
import { MdOutlinePerson, MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../../redux/slicers/productSlice";
import { Link } from "react-router-dom";
import { selectCartItems } from "../../redux/slicers/cartSlice";

const navigation = [
  { name: "smartphones", href: "/products/smartphones" },
  { name: "laptops", href: "/products/laptops" },
  { name: "fragrances", href: "/products/fragrances" },
  { name: "sunglasses", href: "/products/sunglasses" },
  { name: "womens-jewellery", href: "/products/womens-jewellery" },
  { name: "mens-shoes", href: "/products/mens-shoes" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (category) => {
    dispatch(fetchProductsAsync(category));
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="bg-white text-black text-center py-3">
        <h1 className="text-4xl font-bold">urban</h1>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={toggleNavbar}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 capitalize text-white bg-black rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>{" "}
            {navigation.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="block py-2 px-3 capitalize text-white bg-black rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
                    aria-current="page"
                    onClick={() => handleChange(item.name)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to="/checkout"
                className="block py-2 px-3 capitalize text-white bg-black rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
                aria-current="page"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white ">
          <button className="px-2 ">
            <MdOutlinePerson size={20} />
          </button>
          <button className="px-2 relative">
            <MdOutlineShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 -mt-3 -mr-1 px-2 py-1 text-xs text-white bg-blue-900 rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
