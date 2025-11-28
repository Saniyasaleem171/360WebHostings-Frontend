import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaServer, FaUserCog } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN NAV */}
        <div className="flex justify-between items-center h-20">

          {/* Logo + Text */}
          <div className="flex flex-col items-start">
            <img
              src="/images/logo.png"
              className="h-10 object-contain block  ml-9"
              alt="logo"
            />
            <h2 className="text-sm font-semibold mt-1 tracking-wide">
              360 WEB HOSTINGS
            </h2>
          </div>

        <nav className="hidden md:flex gap-6 items-center text-[15px] font-medium relative overflow-visible z-50">
          {/* Hosting with dropdown */} 
          <div className="group relative"> 
            <a
              href="#"
              className="hover:text-gray-300 transition cursor-pointer"
            >
            Hosting 
            </a>
{/* Dropdown menu with React Icons */}
<div
  className="
    absolute left-0 top-full mt-3 w-56 
    bg-white text-black rounded-xl shadow-xl 
    border border-gray-200 
    opacity-0 invisible scale-95 
    group-hover:opacity-100 group-hover:visible group-hover:scale-100 
    transition-all duration-200 origin-top z-50
  "
>
  <a
    href="https://my.360webhostings.com/index.php?rp=/store/shared-hosting"
    target="_blank"
    className="flex items-center gap-3 px-4 py-3 
               hover:bg-gray-100 text-[14px] font-medium
               first:rounded-t-xl last:rounded-b-xl"
  >
    <FaServer className="text-gray-700 text-[18px]" />
    Shared Hosting
  </a>

  <a
    href="https://my.360webhostings.com/index.php?rp=/store/reseller-hosting"
    target="_blank"
    className="flex items-center gap-3 px-4 py-3 
               hover:bg-gray-100 text-[14px] font-medium
               first:rounded-t-xl last:rounded-b-xl"
  >
    <FaUserCog className="text-gray-700 text-[18px]" />
    Reseller Hosting
  </a>
</div>

          </div>

          {/* Other links */}
          <a
            href="https://my.360webhostings.com/cart.php?a=add&domain=register"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            Domains
          </a>
          <a
            href="https://my.360webhostings.com/index.php?rp=/knowledgebase"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            Knowledge Base
          </a>
          <Link to="/about" className="hover:text-gray-300 transition">
            About Us
          </Link>

          <a
            href="https://my.360webhostings.com/index.php?rp=/login"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            Affiliate Programs
          </a>
        </nav>

          {/* Desktop Buttons */}
<div className="hidden md:flex items-center gap-3">
  <a
    href="https://my.360webhostings.com/index.php?rp=/login"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="outline"
      className="text-white border-white hover:bg-white hover:text-black"
    >
      Log In
    </Button>
  </a>

  <a
    href="https://my.360webhostings.com/register.php"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="solid"
      className="!bg-white !text-black hover:!bg-gray-200"
    >
      Register
    </Button>
  </a>
</div>


          {/* Mobile Menu Button */}
          <div className="md:hidden mr-2">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md inline-flex items-center justify-center focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    open
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div className={`md:hidden transition-all duration-300 ${open ? "block" : "hidden"} bg-black`}>
        <nav className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
              {/* Hosting Section (no dropdown for mobile) */}
    <div className="flex flex-col bg-gray-900 rounded-lg overflow-hidden">
      <span className="px-3 py-2 text-base font-medium text-gray-300">
        Hosting
      </span>

      <a
        href="https://my.360webhostings.com/index.php?rp=/store/shared-hosting"
        target="_blank"
        className="px-5 py-2 text-sm text-gray-300 hover:text-white"
      >
        Shared Hosting
      </a>

      <a
        href="https://my.360webhostings.com/index.php?rp=/store/reseller-hosting"
        target="_blank"
        className="px-5 py-2 text-sm text-gray-300 hover:text-white"
      >
        Reseller Hosting
      </a>
    </div>

    {/* Domains */}
    <a
      href="https://my.360webhostings.com/cart.php?a=add&domain=register"
      target="_blank"
      className="px-3 py-2 text-base font-medium hover:text-gray-300"
    >
      Domains
    </a>

    {/* Knowledge Base */}
    <a
      href="https://my.360webhostings.com/index.php?rp=/knowledgebase"
      target="_blank"
      className="px-3 py-2 text-base font-medium hover:text-gray-300"
    >
      Knowledge Base
    </a>

    {/* About (React Router Link) */}
    <Link
      to="/about"
      className="px-3 py-2 text-base font-medium hover:text-gray-300"
    >
      About Us
    </Link>

    {/* Affiliate Programs */}
    <a
      href="https://my.360webhostings.com/index.php?rp=/login"
      target="_blank"
      className="px-3 py-2 text-base font-medium hover:text-gray-300"
    >
      Affiliate Programs
    </a>


          {/* Mobile Buttons */}
<div className="pt-3 flex gap-3">
  <a
    href="https://my.360webhostings.com/index.php?rp=/login"
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button
      variant="outline"
      className="w-full text-white border-white hover:bg-white hover:text-black"
    >
      Log In
    </Button>
  </a>

  <a
    href="https://my.360webhostings.com/register.php"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="solid"
      className="!bg-white !text-black hover:!bg-gray-200"
    >
      Register
    </Button>
  </a>
</div>

        </nav>
      </div>
    </header>
  );
}
