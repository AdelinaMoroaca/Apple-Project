import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Spinner, Figure } from 'react-bootstrap';
import { useFetchData } from '../../utils/hooks/useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import styles from './NavList.module.css';


function NavList({ categoryProductsId }) {
    const apiUrl = `https://json-server-deployment-5til.onrender.com/nav?categoryProductsId=${categoryProductsId}`;
    const { data: models, loading, error } = useFetchData(apiUrl);
    const navigate = useNavigate();

    const handleProduct = (model) => {
        const formattedModelName = model.modelName.toLowerCase().replace(/\s+/g, '-');
        navigate(`/${formattedModelName}/`);
    }

    if (loading) return <Spinner animation="border" />;
    if (error) return <p>Error loading models. Please try again later.</p>;

    return (
        <Container>
            <Swiper
            spaceBetween={2}
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
                    spaceBetween: 2

                  },
                  360: {
                    slidesPerView: 3.6,
                    spaceBetween: 2
                  },
                  400: {
                    slidesPerView: 4.2,
                    spaceBetween: 2
                  },
                  480: {
                    slidesPerView: 5.3,
                    spaceBetween: 2
                  },
                  768: {
                    slidesPerView: 6.2,
                    spaceBetween: 2
                  },
                  1024: {
                    slidesPerView: 7,
                    spaceBetween: 2
                  },
                  1440: {
                    slidesPerView: 9,
                    spaceBetween: 2
                  }
                  ,
                  1540: {
                    slidesPerView: 12.2,
                    spaceBetween: 2
                  }
               }}
             >
             {models && models.length > 0 ? (
                models.map(model => (
                  <SwiperSlide key={model.id}>
                              <Figure 
                                  key={model.id}
                                  style={{cursor: 'pointer'}}
                                  onClick={() => {handleProduct(model)}}
                              >
                                  <img 
                                      src={model.image} 
                                      alt={model.modelName} 
                                      height={50} 
                                  />
                                  <Figure.Caption>{model.modelName}</Figure.Caption>
                              </Figure>
                  </SwiperSlide>
                  ))
                ) : (
                  <p>No models found for this category.</p>
                )}
            </Swiper>   
        </Container>
    );
}

export { NavList };
