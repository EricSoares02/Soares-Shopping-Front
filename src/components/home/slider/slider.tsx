// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderComponent } from "./slider.style";

export default function Slider() {
  const array = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
  ];

  return (
    <SliderComponent.Conteiner>
      <SliderComponent.AlingBox>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          <SliderComponent.SliderConteiner>
            <SliderComponent.Slider>
              {array.map((slide, index) => (
                <SwiperSlide key={index}>
                  <SliderComponent.ImgSliderConteiner>
                    <SliderComponent.Img src={slide} />
                  </SliderComponent.ImgSliderConteiner>
                </SwiperSlide>
              ))}
            </SliderComponent.Slider>
          </SliderComponent.SliderConteiner>
        </Swiper>
      </SliderComponent.AlingBox>
    </SliderComponent.Conteiner>
  );
}
