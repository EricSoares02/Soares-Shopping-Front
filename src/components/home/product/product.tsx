"use client";
import { DefaultProductType } from "@/types/products/productType";
import { ProductComponent } from "./product.style";
import Link from "next/link";
import { converterParaReal } from "@/utils/conversorCoin";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Products(data: Array<DefaultProductType>) {
  return (
    <ProductComponent.Conteiner>
      <ProductComponent.AlignConteiner>
        <ProductComponent.ProductConteiner>
          <ProductComponent.Text>Produtos</ProductComponent.Text>
          <ProductComponent.ProductCaseConteiner>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={4}
        
              navigation
              pagination={{ clickable: true }}
            >
              {data?.map((value: DefaultProductType) => (
                <SwiperSlide key={value.id}>
                  <ProductComponent.ProductCase>
                    <Link href={`/product?id=${value.id}`}>
                      <ProductComponent.ProductImgConteiner>
                        <ProductComponent.ProductImg
                          src={value.url_img[0]}
                        ></ProductComponent.ProductImg>
                      </ProductComponent.ProductImgConteiner>
                    </Link>
                    <ProductComponent.ProductDesc>
                      <h2>{value.name.toUpperCase()}</h2>
                      <h3>{value.category.toUpperCase()}</h3>
                    </ProductComponent.ProductDesc>
                    <ProductComponent.PriceAndButton>
                      <p>{converterParaReal(value.price_in_cent)}</p>
                    </ProductComponent.PriceAndButton>
                  </ProductComponent.ProductCase>
                </SwiperSlide>
              ))}
            </Swiper>
          </ProductComponent.ProductCaseConteiner>
        </ProductComponent.ProductConteiner>
      </ProductComponent.AlignConteiner>
    </ProductComponent.Conteiner>
  );
}
