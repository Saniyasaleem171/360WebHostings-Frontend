import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#2C1E1E] text-white pt-4 pb-4 px-8">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LEFT SECTION */}
          <div className="flex flex-col items-start md:items-start">
            <img
              src="/images/logo.png"
              className="h-14 object-contain block mb-2 ml-9"
              alt="logo"
            />
            <h2 className="text-l font-semibold">360 WEB HOSTINGS</h2>
          </div>

          {/* NEWSLETTER */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <div className="w-full max-w-md">
              <h2 className="text-xl font-medium mb-4">
                For News & Offers
              </h2>

              <div className="flex bg-white rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="px-4 py-3 w-full text-black outline-none"
                />
                <button className="bg-[#f2f2f2] px-6 text-black font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white/20 my-5"></div>

        {/* MIDDLE DIV */}
        <div className="flex flex-wrap gap-10 md:gap-[100px] mt-6 justify-between">

          <div className="flex-1 min-w-[250px]">
            <p className="text-gray-400 text-l font-semibold mt-6">Fast, Secure & Reliable.</p>
            <p className="text-gray-400 text-l font-semibold">Online Presence Partner.</p>
            <p className="text-sm text-gray-400 mt-4">
              A Project By: <span className="text-lg text-gray-300 font-bold"><br/>GUEST POSTS 360 Pvt Ltd.</span>
            </p>

          </div>

          {/* LINKS */}
          <div className="min-w-[120px]">
            <h3 className="font-semibold mt-3 mb-3 text-2xl">Quick Links</h3>
            <ul className="space-y-1 text-gray-300">
              <li>
                <a 
                  href="https://my.360webhostings.com/index.php?rp=/store/shared-hosting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Shared Hosting
                </a>
              </li>
              <li>
                <a 
                  href="https://my.360webhostings.com/index.php?rp=/store/reseller-hosting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Reseller Hosting
                </a>
              </li>
              <li>
                <a 
                  href="https://my.360webhostings.com/cart.php?a=add&domain=register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Domains
                </a>
              </li>
<li>
  <a 
    href="/about"
    className="hover:underline"
  >
    About Us
  </a>
</li>

<li>
  <a 
    href="/blog"
    className="hover:underline"
  >
    Blogs
  </a>
</li>
            </ul>
          </div>

          <div className="min-w-[120px]">
            <h3 className="font-semibold mt-3 mb-3 text-2xl">Support</h3>
            <ul className="space-y-1 text-gray-300">
<li>
  <a 
    href="/faq"
    className="hover:underline"
  >
    FAQs
  </a>
</li>


              <li>
                <a 
                  href="https://my.360webhostings.com/submitticket.php" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Open Ticket
                </a>
              </li>
              <li>
                <a 
                  href="https://my.360webhostings.com/contact.php" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Contact Us
                </a>
              </li>
             
              <li>
                <a 
                  href="https://my.360webhostings.com/index.php?rp=/knowledgebase" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Knowledgebase
                </a>
              </li>

              <li>
                <a 
                  href="https://my.360webhostings.com/index.php?rp=/announcements" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Announcement
                </a>
              </li>

            </ul>
          </div>

          <div className="min-w-[120px]">
            <h3 className="font-semibold mt-3 mb-3 text-2xl">Legal</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Legal Team</li>
              <li>
                <a
                  href="https://360webhostings.com/terms_policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Terms Of Service
                </a>
              </li>

              <li>
                <a
                  href="https://360webhostings.com/terms_policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Refund Policy
                </a>
              </li>

              <li>
                <a
                  href="https://360webhostings.com/terms_policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Privacy Policy
                </a>
              </li>

            </ul>
          </div>

          {/* REGISTERED LOGOS */}
          <div className="min-w-[100px] flex flex-col items-center">
            <p className="text-center font-semibold mt-3 mb-6 text-2xl">Registered</p>
            <a href="https://www.secp.gov.pk//" target="_blank" rel="noopener noreferrer">
              <img src="/images/secp.png" alt="SECP Logo" className="h-14 w-auto hover:opacity-80 transition mb-2"/>
            </a>
            <a href="https://www.fbr.gov.pk/" target="_blank" rel="noopener noreferrer">
              <div className="h-14 w-14 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img src="/images/fbr.png" alt="FBR Logo" className="h-full w-full object-contain"/>
              </div>
            </a>
          </div>

        </div>

        <div className="mt-4 flex w-full justify-between gap-10 
                max-sm:flex-col max-sm:gap-6">

  <p className="text-gray-300 text-xl font-semibold pt-6 
                max-sm:pt-2 max-sm:text-lg">
    Payment Methods:
  </p>

  <div className="w-1/2 max-sm:w-full">
    <p className="text-gray-500 font-semibold mt-4 mb-2">For Pakistani Clients:</p>

    <div className="flex gap-4 flex-wrap">
      <div className="h-10 w-10 bg-white rounded-2xl shadow flex items-center justify-center p-2">
        <img src="/cards/mastercard.jfif" className="w-full h-full object-cover " />
      </div>
      <div className="h-10 w-10 bg-white rounded-2xl shadow flex items-center justify-center p-2">
        <img src="/cards/visa.jfif" className="w-full h-full object-cover" />
      </div>
      <div className="h-10 w-10 bg-white rounded-2xl shadow flex items-center justify-center p-2">
        <img src="/cards/easypaisa.PNG" className="w-full h-full object-cover " />
      </div>
      <div className="h-10 w-10 bg-white rounded-2xl shadow flex items-center justify-center p-2">
        <img src="/cards/jazzcash.PNG" className="w-full h-full object-cover " />
      </div>
      <div className="h-10 w-10 bg-white rounded-2xl shadow flex items-center justify-center p-2">
        <img src="/cards/zindagi.png" className="w-full h-full object-cover " />
      </div>
      <div className="h-10 w-10 bg-white rounded-2xl shadow flex items-center justify-center p-2">
        <img src="/cards/QR.PNG" className="w-full h-full object-cover " />
      </div>
      <div className="h-10 w-10 bg-white rounded-2xl shadow flex items-center justify-center p-2">
        <img src="/cards/bank.PNG" className="w-full h-full object-cover " />
      </div>
      <div className="h-10 w-10 bg-white rounded-2xl shadow flex items-center justify-center p-2">
        <img src="/cards/international.PNG" className="w-full h-full object-cover " />
      </div>
    </div>
  </div>

  <div className="w-1/2 max-sm:w-full">
    <p className="text-gray-500 font-semibold text-l mt-4 mb-2">For International Clients:</p>

    <div className="flex gap-4 flex-wrap">
      <div className="h-10 w-10 bg-white rounded-2xl shadow flex items-center justify-center p-2">
        <img src="/cards/mastercard.jfif" className="w-full h-full object-cover " />
      </div>
      <div className="h-10 w-10 bg-white rounded-2xl shadow flex items-center justify-center p-2">
        <img src="/cards/visa.jfif" className="w-full h-full object-cover " />
      </div>
    </div>
  </div>

</div>


        <div className="h-px w-full bg-white/20 my-5"></div>

        {/* BOTTOM DIV */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-2">
          {/* logo div */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <div className="p-3 bg-[#3A2A2A] rounded-full shadow-lg cursor-pointer hover:bg-[#5A4646] transition">
              <FaXTwitter className="text-xl text-white" />
            </div>
            <div className="p-3 bg-[#3A2A2A] rounded-full shadow-lg cursor-pointer hover:bg-[#5A4646] transition">
              <FaFacebookF className="text-xl text-white" />
            </div>
            <div className="p-3 bg-[#3A2A2A] rounded-full shadow-lg cursor-pointer hover:bg-[#5A4646] transition">
              <FaInstagram className="text-xl text-white" />
            </div>
            <div className="p-3 bg-[#3A2A2A] rounded-full shadow-lg cursor-pointer hover:bg-[#5A4646] transition">
              <FaLinkedinIn className="text-xl text-white" />
            </div>
          </div>

          <div className="-mt-3 -ml-14 max-sm:ml-0 max-sm:mt-4 max-sm:flex max-sm:justify-center">

  <p className="text-sm text-gray-500 text-center md:text-center 
                max-sm:text-center max-sm:px-4">

    © {new Date().getFullYear()} 360 Web Hostings. All Rights Reserved.
    <br />

    Built & Designed by the TEAM of{" "}
    <a
      href="https://tech.guestposts360.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:underline"
    >
      Guest Posts 360 Pvt Ltd
    </a>
     . (Own product).

  </p>

</div>


          <div></div>

        </div>
        
      </div>
    </footer>
  );
}
