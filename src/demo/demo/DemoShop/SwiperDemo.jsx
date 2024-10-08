// import styles from "./SwiperDemo.module.css";
import React, { useContext } from 'react';
// import { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './../../../index.css';
import { CategoriesContext } from "../../../store-contexts/contexts-D/CategoriesContext";
import { Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import required modules
import { Pagination } from 'swiper/modules';
import styles from "./SwiperDemo.module.css";

// function SwiperDemo() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         grabCursor={true}
//         // centeredSlides={true}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className={styles.swiper}
//       >
//         <SwiperSlide  className={styles.swiperSlide}>Slide 1</SwiperSlide>
//         <SwiperSlide  className={styles.swiperSlide}>Slide 2</SwiperSlide>
//         <SwiperSlide  className={styles.swiperSlide}>Slide 3</SwiperSlide>
//         <SwiperSlide  className={styles.swiperSlide}>Slide 4</SwiperSlide>
//         <SwiperSlide  className={styles.swiperSlide}>Slide 5</SwiperSlide>
//         <SwiperSlide  className={styles.swiperSlide}>Slide 6</SwiperSlide>
//         <SwiperSlide  className={styles.swiperSlide}>Slide 7</SwiperSlide>
//         <SwiperSlide  className={styles.swiperSlide}>Slide 8</SwiperSlide>
//         <SwiperSlide  className={styles.swiperSlide}>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

function SwiperDemo() {
  const { categoriesMap } = useContext(CategoriesContext);


  return (
    <>
      <Swiper
        // slidesPerView={2}
        slidesPerView={'auto'}
        spaceBetween={30}
        // grabCursor={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}

        breakpoints={{
          // 320: { slidesPerView: 2, spaceBetween: 10 },
          // 360: { slidesPerView: 2, spaceBetween: 10 },
          // 480: { slidesPerView: 3, spaceBetween: 20 },
          // 768: { slidesPerView: 7, spaceBetween: 20 },
          // 1024: { slidesPerView: 9, spaceBetween: 20 },
          // 1300: { slidesPerView: categoriesMap ? categoriesMap.length : 1, spaceBetween: 20 },
          }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {Object.keys(categoriesMap).map((title) => (
            <SwiperSlide  className={styles.swiperSlide}>
              <Figure key={title} 
              style={{border: '1px solid red'}}>
                <Figure.Image
                  width={181}
                  height={180}
                  alt={title}
                  src={categoriesMap[title].imageUrl}
                />
                                        
                <Figure.Caption>
                  <Link to={`/${categoriesMap[title].routeName}`} 
                  style={{color: 'black', 
                  textDecoration: 'none', 
                  fontWeight: 'bold'}}>
                    {title}
                  </Link>
                </Figure.Caption>
              </Figure>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperDemo;