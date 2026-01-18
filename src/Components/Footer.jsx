import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-4 px-4 py-6 md:place-items-center border-y border-black">
        
        <section>
          <h1 className="font-bold text-xl mb-4">MockMart</h1>
          <div className="flex flex-col gap-6">
            <p className="max-w-xl text-neutral-500">
              Your one-stop shop for the latest <br />
              fashion trends and accessories
            </p>

            <nav className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-2xl text-neutral-400 cursor-pointer hover:text-neutral-700"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-2xl text-neutral-400 cursor-pointer hover:text-neutral-700"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-2xl text-neutral-400 cursor-pointer hover:text-neutral-700"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-2xl text-neutral-400 cursor-pointer hover:text-neutral-700"
              >
                <FaYoutube />
              </a>
            </nav>
          </div>
        </section>

        <nav className="flex flex-col gap-6">
          <h2 className="font-bold text-xl">Shop</h2>
          <ul className="text-neutral-500">
            <li><a href="#" className="hover:text-neutral-700">All Products</a></li>
            <li><a href="#" className="hover:text-neutral-700">New Arrivals</a></li>
            <li><a href="#" className="hover:text-neutral-700">Best Sellers</a></li>
            <li><a href="#" className="hover:text-neutral-700">Sale</a></li>
            <li><a href="#" className="hover:text-neutral-700">Gift Cards</a></li>
          </ul>
        </nav>

        <nav className="flex flex-col gap-6">
          <h2 className="font-bold text-xl">Support us</h2>
          <ul className="text-neutral-500">
            <li><a href="#" className="hover:text-neutral-700">FAQ</a></li>
            <li><a href="#" className="hover:text-neutral-700">Contact Us</a></li>
            <li><a href="#" className="hover:text-neutral-700">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-neutral-700">Size Guide</a></li>
            <li><a href="#" className="hover:text-neutral-700">Track Order</a></li>
          </ul>
        </nav>

        <nav className="flex flex-col gap-6">
          <h2 className="font-bold text-xl">Company</h2>
          <ul className="text-neutral-500">
            <li><a href="#" className="hover:text-neutral-700">About Us</a></li>
            <li><a href="#" className="hover:text-neutral-700">Careers</a></li>
            <li><a href="#" className="hover:text-neutral-700">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-neutral-700">Terms of Service</a></li>
            <li><a href="#" className="hover:text-neutral-700">Blog</a></li>
          </ul>
        </nav>

      </section>


      <section className="grid md:grid-cols-2 place-items-center gap-4 grid-cols-1 py-4">
        <p className="text-neutral-500 text-sm">
          © 2026 MockMart. All rights reserved.
        </p>

        <nav className="flex justify-between gap-4 text-neutral-500 text-sm">
          <a href="#" className="hover:text-neutral-700">Terms of Service</a>
          <a href="#" className="hover:text-neutral-700">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-700">Cookie Policy</a>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
