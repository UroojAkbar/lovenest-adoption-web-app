import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import styles from "../styles/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { server } from "../server";
import { toast } from "react-toastify";
function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    axios
      .get(`${server}/users/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
        setDropdownOpen(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="top-0 py-1 lg:py-2 w-full lg:relative z-50 bg-white ">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="/2.png"
              alt="Logo"
              className="h-16 w-auto lg:h-20 lg:w-auto transition-all duration-200"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-10 ml-auto">
            <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
              <li>
                <Link to="/" className="text-gray-700 hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-green-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-700 hover:text-green-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-700 hover:text-green-600"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/Donate"
                  className="text-gray-700 hover:text-green-600"
                >
                  Donate Here
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-green-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* <div className="flex items-center gap-x-2 ml-auto">
              <Link
                to="/signup"
                className="text-gray-700 hover:text-green-600 font-semibold px-6 py-2.5"
              >
                Sign Up
              </Link>
              <Link to="/login">
                <button className="rounded-md bg-[#c7a15b] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                  Login
                </button>
              </Link>
            </div> */}
            {/* <div className={`${styles.noramlFlex}`}> */}
            <div className="flex items-center gap-x-2 ml-auto">
  <div className="relative cursor-pointer mr-[15px]">
    {isAuthenticated ? (
      <>
        {user?.avatar?.url ? (
          <>
            {/* Avatar that toggles dropdown */}
            <img
              src={user?.avatar?.url}
              className="w-[35px] h-[35px] rounded-full object-cover"
              alt="User Avatar"
              onClick={toggleDropdown}
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <ul className="py-1 text-sm text-gray-700">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          /* Show Logout button when there is no avatar */
          <button
            onClick={handleLogout}
            className="rounded-md bg-[#c7a15b] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
          >
            Logout
          </button>
        )}
      </>
    ) : (
      /* Show Login button when not authenticated */
      <Link to="/login">
        <button className="rounded-md bg-[#c7a15b] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
          Login
        </button>
      </Link>
    )}
  </div>
</div>

          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-800 dark:text-white focus:outline-none"
            >
              <svg
                className="text-2xl"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 p-4 bg-white dark:bg-gray-900 relative z-50">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-green-600"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-green-600"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-green-600"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-700 hover:text-green-600"
                  onClick={closeMenu}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/Donate"
                  className="text-gray-700 hover:text-green-600"
                  onClick={closeMenu}
                >
                  Donate Here
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-green-600"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="text-gray-700 hover:text-green-600"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-green-600"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
