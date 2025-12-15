"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '@/assets/image/internship/internship-1.jpg';
import img2 from '@/assets/image/internship/internship-2.jpg';
import img3 from '@/assets/image/internship/internship-3.jpg';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [img1, img2, img3];

const BannerSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="banner-slider relative overflow-hidden">
      <AnimatePresence>
        {images.map((img, index) =>
          index === current ? (
          <div key={index}>
              <motion.img
              
               className="slider-image absolute top-0 left-0 w-full h-full object-cover overlay"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
             
            />
             <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50"></div>
          </div>
          ) : null
        )}
        
      </AnimatePresence>

 <button
  onClick={prevSlide}
  className="absolute  -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition cursor-pointer banner-left-btn"
>
  <FaAngleLeft />
</button>


<button
  onClick={nextSlide}
  className="absolute   -translate-y-1/2 bg-black bg-opacity-50  p-3 rounded-full   cursor-pointer   banner-right-btn"
>
  <FaAngleRight />
</button>

    </div>
  );
};

export default BannerSlider;
