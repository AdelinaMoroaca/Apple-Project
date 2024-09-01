import React from "react";
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
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
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

        <button className={`${styles.swiperButtonPrev} swiper-button-prev`}>s</button>
        <button className={`${styles.swiperButtonNext} swiper-button-next`}>|</button>
      </Swiper>
    </div>
  );
}

export { NavList };
