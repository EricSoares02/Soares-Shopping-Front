'use client';
import { CategoriesComponent } from "./categories.style";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";




export default function Categories() {
  const CategoriesArray = [
    {
      title: "Esporte",
      img: "categories/ball-category.svg",
      imgHover: "ball-categoryHover.svg",
    },
    {
      title: "Moda",
      img: "categories/roupas-category.svg",
      imgHover: "roupas-categoryHover.svg",
    },
    {
      title: "Informática",
      img: "categories/informatica-category.svg",
      imgHover: "informatica-categoryHover.svg",
    },
    {
      title: "Celulares",
      img: "categories/phone-category.svg",
      imgHover: "phone-categoryHover.svg",
    },
    {
      title: "Bebidas",
      img: "categories/bebidas-category.svg",
      imgHover: "bebidas-categoryHover.svg",
    },
    {
      title: "Eletrodomésticos",
      img: "categories/eletrodomestico-category.svg",
      imgHover: "eletrodomestico-categoryHover.svg",
    },
    {
      title: "Ferramentas",
      img: "categories/ferramentas-category.svg",
      imgHover: "ferramentas-categoryHover.svg",
    },
    {
      title: "Brinquedos",
      img: "categories/toy-category.svg",
      imgHover: "toy-categoryHover.svg",
    },
    {
      title: "Automóveis",
      img: "categories/volante-category.svg",
      imgHover: "volante-categoryHover.svg",
    },
  ];
  return (
    <CategoriesComponent.Conteiner>
      <CategoriesComponent.CategoriesConteiner>
      <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={8}
          navigation
          pagination={{ el: ".swiper-pagination", clickable: false }}  
         
        >
          <div className="swiper-pagination"></div>
          {CategoriesArray.map((category)=>(
            <SwiperSlide key={category.title}>
              <Link style={{textDecoration: 'none'}} href={`/category?v=${category.title}`}>
              <CategoriesComponent.CategoryCase>
                <CategoriesComponent.CategoryImg src={category.img}/>
                <CategoriesComponent.CategoryTitle>
                  {category.title}
                </CategoriesComponent.CategoryTitle>
              </CategoriesComponent.CategoryCase>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </CategoriesComponent.CategoriesConteiner>
    </CategoriesComponent.Conteiner>
  );
}
