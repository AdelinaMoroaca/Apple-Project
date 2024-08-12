import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import StoreCard from "../cards/StoreCard";
import styles from './LargeCardsCarousel.module.css';

function LargeCardsCarousel() {
  const [showSwiperBtn, setShowSwiperBtn] = useState(false);
  const [swiperBtn, setSwiperBtnClick] = useState(false);

  const staticCards = [
    {
      src: 'images/StorePage/education/store-card.JPG',
      giftValue: '$150',
      title: 'MacBook Air',
      fullPrice: '$899',
      monthlyPrice: '$74.91/mo.',
    },
    {
      src: 'images/StorePage/education/ipad-card.JPG',
      giftValue: '$100',
      title: 'iPad Air',
      fullPrice: '$549',
      monthlyPrice: '$45.75/mo.',
    },
    {
      src: 'images/StorePage/education/macbook-pro-card.JPG',
      giftValue: '$150',
      title: 'MacBook Pro',
      fullPrice: '$1499',
      monthlyPrice: '$124.91/mo.',
    },
    {
      src: 'images/StorePage/education/ipad-pro-card.JPG',
      giftValue: '$100',
      title: 'iPad Pro',
      fullPrice: '$899',
      monthlyPrice: '$74.91/mo.',
    },
    {
      src: 'images/StorePage/education/imac-card.JPG',
      giftValue: '$150',
      title: 'iMac',
      fullPrice: '$1249',
      monthlyPrice: '$104.08/mo.',
    },
    {
      src: 'images/StorePage/education/mac-mini-card.JPG',
      giftValue: '$100',
      title: 'Mac mini',
      fullPrice: '$499',
      monthlyPrice: '$41.58/mo.',
    },
  ];

  return (
    <div 
      style={{border: '1px solid blue', overflow: 'hidden'}}
      className={`${styles.swiper}
      ${swiperBtn ? styles.displaySwiperClicked : styles.swiper}
      `}
      onMouseEnter={() => setShowSwiperBtn(true)}
      onMouseLeave={() => setShowSwiperBtn(false)}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Scrollbar, A11y]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1540: {
            slidesPerView: 4.2,
            spaceBetween: 20,
          }
        }}
      >
        {staticCards.map((card, index) => (
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
      </div>
    </div>
  );
}

export default LargeCardsCarousel;
