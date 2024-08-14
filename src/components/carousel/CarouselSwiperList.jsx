import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { ProductCategory } from './../cards/ProductCategory';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { useFetchData } from '../../utils/hooks/useFetch';
import styles from './CarouselSwiperList.module.css';

function CarouselSwiperList() {
  const { data, loading } = useFetchData(
      "https://json-server-deployment-5til.onrender.com/category"
  );

  if (loading) {
      return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.swiper}`}>
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
                      slidesPerView: 2.6,
                      spaceBetween: 10
                  },
                  360: {
                    slidesPerView: 3.6,
                    spaceBetween: 10
                  },
                  400: {
                    slidesPerView: 4.2,
                    spaceBetween: 10
                  },
                  480: {
                      slidesPerView: 5.3,
                      spaceBetween: 18
                  },
                  768: {
                      slidesPerView: 6.2,
                      spaceBetween: 18
                  },
                  1024: {
                      slidesPerView: 7,
                      spaceBetween: 20
                  },
                  1440: {
                      slidesPerView: 9,
                      spaceBetween: 20
                  }
                  ,
                  1540: {
                    slidesPerView: 12.2,
                    spaceBetween: 20
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
    </div>
  )
}

export { CarouselSwiperList };
