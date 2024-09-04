import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useFetchData } from "../../../utils/hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardNav } from "../../cards/CardNav";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import styles from "./NavList.module.css";

function NavList({ categoryProductsId }) {
  const apiUrl = `https://json-server-deployment-5til.onrender.com/nav?categoryProductsId=${categoryProductsId}`;
  const { data: models, loading, error } = useFetchData(apiUrl);
  const navigate = useNavigate();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiper = document.querySelector(`.${styles.swiper}`).swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [models]); // Use models as dependency to ensure it runs when models change

  const handleProduct = (model) => {
    const formattedModelName = model.modelName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${formattedModelName}/`);
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <p>Error loading models. Please try again later.</p>;

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        className={styles.swiper}
        spaceBetween={20}
        slidesPerView={5}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Scrollbar, A11y]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          360: { slidesPerView: 2.4, spaceBetween: 10 },
          480: { slidesPerView: 5, spaceBetween: 20 },
          768: { slidesPerView: 7, spaceBetween: 20 },
          1024: { slidesPerView: 9, spaceBetween: 20 },
          1300: { slidesPerView: models ? models.length : 1, spaceBetween: 20 },
        }}
        loop={false}
      >
        {models && models.length > 0 ? (
          models.map((model) => (
            <SwiperSlide className={styles.swiperSlide} key={model.id}>
              <CardNav
                selectedProductCategory={{
                  onClick: () => handleProduct(model),
                  image: model.image,
                  alt: model.modelName,
                  caption: model.modelName
                }}
              />
            </SwiperSlide>
          ))
        ) : (
          <p>No models found for this category.</p>
        )}
      </Swiper>

      <button ref={prevRef} className={`${styles.swiperButtonPrev} swiper-button-prev`}>s</button>
      <button ref={nextRef} className={`${styles.swiperButtonNext} swiper-button-next`}>|</button>
    </div>
  );
}

export { NavList };
