"use client";
import { ProductImageComponent } from "./productImg.style";

type ImageDataComponentType = {
  desc?: string;
  url_img: Array<string>;
};

export default function ImgComponent(
  data: ImageDataComponentType,
  setImage: { initialIdx: number; setIdx: (params: number) => void }
) {
  
  return (
    <ProductImageComponent.Conteiner>
      <ProductImageComponent.ImgsConteiner>
        <ProductImageComponent.ChangeImgCase>
          {data?.url_img.map((item, index) => (
            <ProductImageComponent.ChangeImgBnt key={item}>
              <ProductImageComponent.ChangeImg
                src={item}
                onClick={() => {
                  setImage.setIdx(index);
                }}
              />
            </ProductImageComponent.ChangeImgBnt>
          ))}
        </ProductImageComponent.ChangeImgCase>
        <ProductImageComponent.ProductImgCase>
          <ProductImageComponent.ProductImg
            src={data?.url_img[setImage.initialIdx]}
          />
        </ProductImageComponent.ProductImgCase>
      </ProductImageComponent.ImgsConteiner>
      <ProductImageComponent.DescCase>
        <ProductImageComponent.DescDefaultTitle>
          DESCRIÇÃO
        </ProductImageComponent.DescDefaultTitle>
        <ProductImageComponent.DescText>
          <p>{data?.desc}</p>
        </ProductImageComponent.DescText>
      </ProductImageComponent.DescCase>
    </ProductImageComponent.Conteiner>
  );
}
