"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import festival_img1 from "@/assets/image/gallery/festival/img1.jpeg";
import festival_img2 from "@/assets/image/gallery/festival/img2.jpeg";

import festival_img4 from "@/assets/image/gallery/festival/img4.jpeg";
import festival_img5 from "@/assets/image/gallery/festival/img5.jpeg";
import festival_img6 from "@/assets/image/gallery/festival/img6.jpeg";
import festival_img7 from "@/assets/image/gallery/festival/img7.jpeg";
// import festival_img8 from "@/assets/image/gallery/festival/img8.jpeg";
import festival_img9 from "@/assets/image/gallery/festival/img9.jpeg";
import festival_img10 from "@/assets/image/gallery/festival/img10.jpeg";

import internship_img1 from "@/assets/image/gallery/internship/img1.jpeg";
import internship_img2 from "@/assets/image/gallery/internship/img2.jpeg";
import internship_img3 from "@/assets/image/gallery/internship/img3.jpeg";
import internship_img4 from "@/assets/image/gallery/internship/img4.jpeg";
import internship_img5 from "@/assets/image/gallery/internship/img5.jpeg";
import internship_img6 from "@/assets/image/gallery/internship/img6.jpeg";
import internship_img7 from "@/assets/image/gallery/internship/img7.jpeg";
import internship_img8 from "@/assets/image/gallery/internship/img8.jpeg";
import internship_img9 from "@/assets/image/gallery/internship/img9.jpeg";
import internship_img10 from "@/assets/image/gallery/internship/img10.jpeg";
import internship_img11 from "@/assets/image/gallery/internship/img11.jpeg";
import internship_img12 from "@/assets/image/gallery/internship/img12.jpeg";
import internship_img13 from "@/assets/image/gallery/internship/img13.jpeg";
import internship_img14 from "@/assets/image/gallery/internship/img14.jpeg";
import internship_img15 from "@/assets/image/gallery/internship/img15.jpeg";
import internship_img16 from "@/assets/image/gallery/internship/img16.jpeg";
import internship_img17 from "@/assets/image/gallery/internship/img17.jpeg";
import internship_img18 from "@/assets/image/gallery/internship/img18.jpeg";


interface ImageItem {

  src: string;
  category: string;
}

let filterName = ["all", "internship", "festival",];

const IMG_PATH: ImageItem[] = [
  { src: festival_img1.src, category: "festival" },
  {  src: festival_img2.src, category: "festival" },
   
  {  src: festival_img4.src, category: "festival" },
  { src: festival_img5.src, category: "festival" },
  // {  src: festival_img6.src, category: "festival" },
  { src: festival_img7.src, category: "festival" },
  // {  src: festival_img8.src, category: "festival" },
  // { src: festival_img9.src, category: "festival" },
  // { src: festival_img10.src, category: "festival" },
  { src: internship_img1.src, category: "internship" },
  // {  src: internship_img2.src, category: "internship" },
  //  { src: internship_img3.src, category: "internship" },
  // {  src: internship_img4.src, category: "internship" },
//  { src: internship_img5.src, category: "internship" },
  // {  src: internship_img6.src, category: "internship" },
  //  { src: internship_img7.src, category: "internship" },
  // {  src: internship_img8.src, category: "internship" },
   { src: internship_img9.src, category: "internship" },
  {  src: internship_img10.src, category: "internship" },
   { src: internship_img11.src, category: "internship" },
  // {  src: internship_img12.src, category: "internship" },
   { src: internship_img13.src, category: "internship" },
  // {  src: internship_img14.src, category: "internship" },
  //  { src: internship_img15.src, category: "internship" },
  {  src: internship_img16.src, category: "internship" },
{  src: internship_img17.src, category: "internship" },
   { src: internship_img18.src, category: "internship" },

];

const BATCH_SIZE = 10;

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [isLoading,setIsLoading] =useState(false)
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const filteredImages =
    filter === "all"
      ? IMG_PATH
      : IMG_PATH.filter((img) => img.category === filter);

  const visibleImages = filteredImages.slice(0, visibleCount);

  // Load next batch
  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + BATCH_SIZE, filteredImages.length)
    );
  };

  // Reset visibleCount on filter change
  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setVisibleCount(BATCH_SIZE);
  };
  

  return (
    <div className="gallery-wrapper">
      <section className="gallery-banner">
        <div className="banner-content">
          <h1> Gallery</h1>
          <h2 className="text-linear-gradient"><span>Infozenx IT</span></h2>
          <p>Discover beautiful moments and explore our categories</p>
        </div>
      </section>
{
    isLoading ? <SkeletonLoading/>:

      <section className="gallery-section">
        <div className="masonry text-center">
          {visibleImages.length > 0 ? (
            visibleImages.map((img,idx) => (
              <motion.div
                key={idx}
                className="masonry-item"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <img src={img.src} alt={img.category} loading="lazy" />
              </motion.div>
            ))
          ) :<h1>No Image</h1>
      
          
          }
        </div>

        {/* Load More Button */}
        {visibleCount < filteredImages.length && (
          <div className="load-more-wrapper">
            <button onClick={loadMore} className="load-more-btn">
              Load More
            </button>
          </div>
        )}
      </section>}

      {/* Fixed Bottom Filter */}
      <div className="gallery-filter">
        {filterName.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => handleFilterChange(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
  

const SkeletonLoading=()=>{
    return    Array.from({ length: 8 }).map((_, idx) => (
      <motion.div
          key={idx}
          className="masonry-item skeleton"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{
             duration: 0.5, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))
}