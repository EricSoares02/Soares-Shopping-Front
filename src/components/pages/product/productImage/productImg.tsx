"use client";
import { ProductImageComponent } from "./productImg.style";
import Image from "next/image";

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
              <Image
              style={{
                objectFit: 'fill',
                borderRadius: 6
              }}
                alt=""
                src={item}
                width={50}
                height={60}
                onClick={() => {
                  setImage.setIdx(index);
                }}
              />
            </ProductImageComponent.ChangeImgBnt>
          ))}
        </ProductImageComponent.ChangeImgCase>
        <ProductImageComponent.ProductImgCase>
          <Image
            style={{
              objectFit: 'fill',
            }}
            alt=""
            width={550}
            height={780}
            src={data?.url_img[setImage.initialIdx]}
            quality={100}
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
