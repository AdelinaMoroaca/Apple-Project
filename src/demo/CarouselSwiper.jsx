import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import StoreCard from "../components/cards/StoreCard";
import { useFetchData } from '../utils/hooks/useFetch';
import styles from './CarouselSwiper.module.css';

function CarouselSwiper() {
  const [showSwiperBtn, setShowSwiperBtn] = useState(false);
  const [swiperBtn, setSwiperBtnClick] = useState(false);
  const { data, loading } = useFetchData(
    "https://json-server-deployment-5til.onrender.com/category"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div 
      className={`${styles.swiper}
      ${swiperBtn ? styles.displaySwiperClicked : styles.swiper}
      `}
      onMouseEnter={() => setShowSwiperBtn(true)}
      onMouseLeave={() => setShowSwiperBtn(false)}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={4.1}
        loop={true}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Scrollbar, A11y]}
      >
        {data && data.map((item, index) => (
          <SwiperSlide  style={{display: 'flex'}}
          key={index}
          >
              {/* <StoreCard 
                            src='images/StorePage/education/store-card.JPG'
                            giftValue='$150'
                            title='MacBook Air'
                            fullPrice='$899'
                            monthlyPrice='$74.91/mo.'
                        /> */}

                        {/* <StoreCard
                            src='images/StorePage/education/ipad-card.JPG'
                            giftValue='$100'
                            title='iPad Air'
                            fullPrice='$549'
                            monthlyPrice='$45.75/mo.'
                        /> */}


                        {/* <StoreCard
                            src='images/StorePage/education/macbook-pro-card.JPG'
                            giftValue='$150'
                            title='MacBook Pro'
                            fullPrice='$1499'
                            monthlyPrice='$124.91/mo.'
                        /> */}

                    {/* <StoreCard
                        src='images/StorePage/education/ipad-pro-card.JPG'
                        giftValue='$100'
                        title='iPad Pro'
                        fullPrice='$899'
                        monthlyPrice='$74.91/mo.'                         
                    /> */}

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

export default CarouselSwiper;
