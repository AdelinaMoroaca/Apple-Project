import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import Figure from 'react-bootstrap/Figure';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { useFetchData } from '../../utils/hooks/useFetch';
import styles from './CarouselSwiperList.module.css';

// function ProductCategory(props){
//     const { category } = props;

//     const handleCategory = (category) => {
//         console.log(`Added ${category.title} `);

//     }

//     return (
//         <Figure className={styles.figureCategory}>
//             <Figure.Image
//                 className={styles.roundedImage}
//                 width={120}
//                 height={78}
//                 alt="200x130"
//                 src={category.imagePath}
//             />
//             <Figure.Caption>
//                 <Link className={styles.figureLink} onClick={()=> handleCategory(category)} to={`/shop/buy-${category.title}/`}>{category.title}</Link>
//             </Figure.Caption>
//         </Figure>
//     )
// }

// function CarouselSwiperList(){
//   const [showSwiperBtn, setShowSwiperBtn] = useState(false);
//   const [swiperBtn, setSwiperBtnClick] = useState(false);
//   const { data, loading } = useFetchData(
//     "https://json-server-deployment-5til.onrender.com/category"
//   );

//     if (loading) {
//       return <div>Loading...</div>;
//     }
//     return (
//         <div 
//         className={`${styles.swiper}
//         ${swiperBtn ? styles.displaySwiperClicked : styles.swiper}
//         `}
//         onMouseEnter={() => setShowSwiperBtn(true)}
//         onMouseLeave={() => setShowSwiperBtn(false)}
//       >
//         <Swiper
//           spaceBetween={4}
//           slidesPerView={12}
//           navigation={{
//             nextEl: `.${styles.swiperButtonNext}`,
//             prevEl: `.${styles.swiperButtonPrev}`,
//           }}
//           pagination={{ clickable: true }}
//           modules={[Navigation, Scrollbar, A11y]}
//         >
//           {data && data.map((item, index) => (
//             <SwiperSlide key={index}>
//               {
//                 <ProductCategory                                      
//                   key={item.id} 
//                   category={item} 
//                   alt={item}
//                   src={item}
//                 />
//               }        
//             </SwiperSlide>
//           ))}
//         </Swiper>
  
//         <div
//           className={`${styles.swiperButtonPrev} 
//           ${swiperBtn ? styles.visible : styles.hidden}`}
  
//         >
//           ‹
//         </div>
//         <div
//           onClick={() => setSwiperBtnClick(true)}
//           className={`
//             ${styles.swiperButtonNext} ${showSwiperBtn ? styles.visible : styles.hidden}
      
//           `}
//         >
//           ›
//         </div>
//       </div>
//     )
// }

function ProductCategory(props) {
  const { category } = props;

  const handleCategory = (category) => {
      console.log(`Added ${category.title} `);
  }

  return (
      <Figure className={styles.figureCategory}>
          <Figure.Image
              className={styles.roundedImage}
              width={120}
              height={78}
              alt={category.title}
              src={category.imagePath}
          />
          <Figure.Caption>
              <Link className={styles.figureLink} onClick={() => handleCategory(category)} to={`/shop/buy-${category.title}/`}>
                  {category.title}
              </Link>
          </Figure.Caption>
      </Figure>
  )
}

function CarouselSwiperList() {
  // const [showSwiperBtn, setShowSwiperBtn] = useState(false);
  // const [swiperBtn, setSwiperBtnClick] = useState(false);
  const { data, loading } = useFetchData(
      "https://json-server-deployment-5til.onrender.com/category"
  );

  if (loading) {
      return <div>Loading...</div>;
  }

  return (
      <div
          className={`${styles.swiper}
         
          `}
  
      >
          <Swiper
              spaceBetween={4}
              slidesPerView={12}
              navigation={{
                  nextEl: `.${styles.swiperButtonNext}`,
                  prevEl: `.${styles.swiperButtonPrev}`,
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Scrollbar, A11y]}
              breakpoints={{
                  320: {
                      slidesPerView: 2,
                      spaceBetween: 10
                  },
                  480: {
                      slidesPerView: 3,
                      spaceBetween: 10
                  },
                  768: {
                      slidesPerView: 4,
                      spaceBetween: 15
                  },
                  1024: {
                      slidesPerView: 6,
                      spaceBetween: 20
                  },
                  1440: {
                      slidesPerView: 12,
                      spaceBetween: 30
                  }
              }}
          >
              {data && data.map((item, index) => (
                  <SwiperSlide key={index}>
                      <ProductCategory
                          key={item.id}
                          category={item}
                      />
                  </SwiperSlide>
              ))}
          </Swiper>
{/* 
          <div
              className={`${styles.swiperButtonPrev}
              ${swiperBtn ? styles.visible : styles.hidden}`}
          >
              ‹
          </div>
          <div
              onClick={() => setSwiperBtnClick(true)}
              className={`
              ${styles.swiperButtonNext} ${showSwiperBtn ? styles.visible : styles.hidden}
              `}
          >
              ›
          </div> */}
      </div>
  )
}

export { CarouselSwiperList };

// export { CarouselSwiperList };


