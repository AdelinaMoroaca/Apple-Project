import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import StoreCard from "../cards/StoreCard";
import styles from './LargeCardsCarousel.module.css';

function LargeCardsCarousel({ cards = [], slidesPerView, spaceBetween }) {
  // const staticCards = [
  //   {
  //     src: 'images/StorePage/education/store-card.JPG',
  //     giftValue: '$150',
  //     title: 'MacBook Air',
  //     fullPrice: '$899',
  //     monthlyPrice: '$74.91/mo.',
  //   },
  //   {
  //     src: 'images/StorePage/education/ipad-card.JPG',
  //     giftValue: '$100',
  //     title: 'iPad Air',
  //     fullPrice: '$549',
  //     monthlyPrice: '$45.75/mo.',
  //   },
  //   {
  //     src: 'images/StorePage/education/macbook-pro-card.JPG',
  //     giftValue: '$150',
  //     title: 'MacBook Pro',
  //     fullPrice: '$1499',
  //     monthlyPrice: '$124.91/mo.',
  //   },
  //   {
  //     src: 'images/StorePage/education/ipad-pro-card.JPG',
  //     giftValue: '$100',
  //     title: 'iPad Pro',
  //     fullPrice: '$899',
  //     monthlyPrice: '$74.91/mo.',
  //   },
  //   {
  //     src: 'images/StorePage/education/imac-card.JPG',
  //     giftValue: '$150',
  //     title: 'iMac',
  //     fullPrice: '$1249',
  //     monthlyPrice: '$104.08/mo.',
  //   },
  //   {
  //     src: 'images/StorePage/education/mac-mini-card.JPG',
  //     giftValue: '$100',
  //     title: 'Mac mini',
  //     fullPrice: '$499',
  //     monthlyPrice: '$41.58/mo.',
  //   },
  // ];

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        // spaceBetween={10}
        // slidesPerView={1.2}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1.4,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 25,
          },
          900: {
            slidesPerView: 2.1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.4,
            spaceBetween: 35,
          },
          1200: {
            slidesPerView: 2.8,
            spaceBetween: 40,
          },
          1366: {
            slidesPerView: 3.2,
            spaceBetween: 45,
          },
          1440: {
            slidesPerView: 3.6,
            spaceBetween: 50,
          },
          1640: {
            slidesPerView: 4.3,
            spaceBetween: 50,
          }
        }}
        onInit={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <StoreCard 
              src={card.src}
              giftValue={card.giftValue}
              title={card.title}
              fullPrice={card.fullPrice}
              monthlyPrice={card.monthlyPrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${styles.swiperButtonPrev}`}>‹</div>
      <div className={`${styles.swiperButtonNext}`}>›</div>
    </div>
  );
}

export default LargeCardsCarousel;
