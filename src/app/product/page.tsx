"use client";
import Comments from "@/components/pages/product/comments/comments";
import { ProductComponent, Separetor } from "@/components/pages/product/main-page/page.style";
import Details from "@/components/pages/product/productDetails/details";
import ImgComponent from "@/components/pages/product/productImage/productImg";
import { useGetProductByIdRequest } from "@/hooks/hookForPages/productPage/useRequestToProduct";
import BackButton from "@/utils/backOnePage/back";
import Load from "@/utils/loading/loading";
import { useState } from "react";

export default function ProductPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { id } = searchParams;
  const [imgIdx, setImgIdx] = useState(0);
  const { data, isLoading } = useGetProductByIdRequest(id);

  const setIdx = (index: number) => {
    setImgIdx(index);
  };

  return isLoading ? (
    <main>
      <Load />
    </main>
  ) : (
    <main>
      <BackButton />
      <ProductComponent.Conteiner>
        <ProductComponent.AlignBox>
          <ProductComponent.TopSide>
            {ImgComponent(
              { desc: data[0]?.data.desc, url_img: data[0]?.data.url_img },
              { initialIdx: imgIdx, setIdx }
            )}
            {Details({
              props: {
                name: data[0]?.data.name,
                price_in_cent: data[0]?.data.price_in_cent,
                subCategory: data[0]?.data.subCategory,
                category: data[0]?.data.category,
                options: data[0]?.data.options,
              },
            })}
          </ProductComponent.TopSide>
          <Separetor/>
          <ProductComponent.BottomSide>
           {Comments({comments: data[1]?.data})}
          </ProductComponent.BottomSide>
        </ProductComponent.AlignBox>
      </ProductComponent.Conteiner>
    </main>
  );
}
