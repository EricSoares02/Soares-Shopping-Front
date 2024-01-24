"use client";
import { ProductsInCartComponent } from "./product.style";
import Image from "next/image";
import Link from "next/link";
import NoDataCart from "../../noData/noData";
import { CartProductType } from "@/types/cart/productType";
import { converterParaReal } from "@/utils/conversorCoin";
import { useRouter } from "next/navigation";
import {
  AddProductInCart,
  LessProductInCart,
  RemoveProductInCart,
} from "./functions";
import Load from "@/utils/loading/loading";

export default function ProductsInCart(
  products: Array<CartProductType>,
  token: string,
  loading: () => void
) {
  const addProduct = async (Usertoken: string, id: string, options: string) => {
    loading();
    await AddProductInCart(Usertoken, {
      id,
      options,
    });
    return window.location.reload();
  };

  const lessProduct = async (
    Usertoken: string,
    id: string,
    options: string
  ) => {
    loading();
    await LessProductInCart(token, {
      id,
      options,
    });
    return window.location.reload();
  };

  const removeProduct = async (
    Usertoken: string,
    id: string,
    options: string
  ) => {
    loading();
    await RemoveProductInCart(token, {
      id,
      options,
    });

    return window.location.reload();
  };

  if (products.length === 0) {
    return <>{NoDataCart()}</>;
  }

  return (
    <>
      {products.map((item: CartProductType) => (
        <div key={item.id}>
          <ProductsInCartComponent.ProductCase key={item.id}>
            <Link href={`/product?id=${item.id}`}>
              <ProductsInCartComponent.ProductImgConteiner>
                <Image
                  src={item.url_img}
                  width={150}
                  height={40}
                  quality={100}
                  alt="Product"
                />
              </ProductsInCartComponent.ProductImgConteiner>
            </Link>
            <ProductsInCartComponent.ConteinerToAlign>
              <ProductsInCartComponent.ProductDesc>
                <h2>{item.name.toUpperCase()}</h2>
                <button>
                  {item.options}
                  <span>Alterar</span>
                </button>
              </ProductsInCartComponent.ProductDesc>
              <ProductsInCartComponent.PriceAndButton>
                <p>{converterParaReal(item.price_in_cent * item.quantity)}</p>
                <ProductsInCartComponent.QuatityCase>
                  <ProductsInCartComponent.QuatityBntLess
                    onClick={() => lessProduct(token, item.id, item.options)}
                  >
                    -
                  </ProductsInCartComponent.QuatityBntLess>
                  <p>Quantidade: {item.quantity}</p>
                  <ProductsInCartComponent.QuatityBntMore
                    onClick={() => addProduct(token, item.id, item.options)}
                  >
                    +
                  </ProductsInCartComponent.QuatityBntMore>
                  <ProductsInCartComponent.RemoveBtn
                    onClick={() => removeProduct(token, item.id, item.options)}
                  >
                    <Image
                      src={"trash.svg"}
                      width={18}
                      height={18}
                      alt="trash"
                    />
                  </ProductsInCartComponent.RemoveBtn>
                </ProductsInCartComponent.QuatityCase>
              </ProductsInCartComponent.PriceAndButton>
            </ProductsInCartComponent.ConteinerToAlign>
          </ProductsInCartComponent.ProductCase>
        </div>
      ))}
    </>
  );
}
