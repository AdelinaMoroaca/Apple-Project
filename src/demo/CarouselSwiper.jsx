import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import StoreCard from "../components/cards/StoreCard";
import { useFetchData } from '../utils/hooks/useFetch';
import styles from './CarouselSwiper.module.css'; // Import your CSS module

function CarouselSwiper() {
  const { data, loading } = useFetchData(
    "https://json-server-deployment-5til.onrender.com/category"
  );

  if (loading) {return <div>Loading...</div>}

  return (
    <div className="carousel-container" style={{
      width: '100%',
      maxWidth: '90vw',
      margin: '0 auto',
      paddingTop: '50px',
      position: 'relative'
    }}>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}  // Adjusted to fit three cards per slide
        loop={true}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        // pagination={{ clickable: true }}
        modules={[Navigation, Scrollbar, A11y]}
        style={{
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          position: 'relative'
        }}
      >
        {data && data.map((item, index) => (
          <SwiperSlide key={index} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#fff',
            borderRadius: '10px',
            overflow: 'hidden'
          }}>
            <StoreCard 
              key={index}
              src='images/StorePage/education/store-card.JPG'
              giftValue='$150'
              title={item.title || 'MacBook Air'}
              fullPrice='$899'
              monthlyPrice='$74.91/mo.'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Add the navigation buttons manually */}
      {/* This will show for small screens only */}
      {/* <div className={styles.swiperButtonPrev}>‹</div> */}
      <div className={styles.swiperButtonNext}>›</div>
    </div>
  );
}

export default CarouselSwiper;
