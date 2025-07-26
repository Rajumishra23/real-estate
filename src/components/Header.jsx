import React from 'react';
import Navbar from './Navbar';
import { motion } from "framer-motion";

function Header() {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
      >
        <h2 className='text-5xl sm:text-6xl md:text-[39px] inline-block max-w-3xl font-semibold pt-20'>
          Explore homes that fit your dreams😄
        </h2>
        <div className="mt-8">
          <a
            href="#contactus"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-600 transition"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
