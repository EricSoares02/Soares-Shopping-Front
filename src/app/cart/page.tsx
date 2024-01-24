"use client";
import LoadToCart from "@/components/pages/cart/main-page/loading";
import { CartPageComponent } from "@/components/pages/cart/main-page/page.style";
import ProductsInCart from "@/components/pages/cart/main-page/products/product";
import Summary from "@/components/pages/cart/main-page/summary/summary";
import useProductsInCartRequest from "@/hooks/hookForPages/cartPage/useRequestToGetProducts";
import { RootStateType } from "@/redux/root-reducer";
import { CartProductType } from "@/types/cart/productType";
import BackButton from "@/utils/backOnePage/back";
import { converterParaReal } from "@/utils/conversorCoin";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CartPage() {
 
  const token = useSelector(
    (state: RootStateType) => state.userSlice.access_token
  );
  const { data, isLoading } = useProductsInCartRequest(token.replace(/"/g, ""));
  const [load, setLoad] = useState(false)

  function Loading(): void{
    setLoad(true)
  }

  function totalPrice(data: Array<CartProductType>){

    let total = 0 
    data.map((item)=>{
      return total = total + (item.price_in_cent * item.quantity);
    })

    return converterParaReal(total);

  }
  

  return isLoading || load ? (<>
    <BackButton />
    <CartPageComponent.Conteiner>
      <CartPageComponent.AlignConteiner>
        <CartPageComponent.ConteinerToProducts>
          <LoadToCart />
        </CartPageComponent.ConteinerToProducts>
        {Summary('R$ 0.00')}
      </CartPageComponent.AlignConteiner>
    </CartPageComponent.Conteiner>
  </>) : (
    <>
      <BackButton />
      <CartPageComponent.Conteiner>
        <CartPageComponent.AlignConteiner>
          <CartPageComponent.ConteinerToProducts>
            { ProductsInCart(data.data.products ?? [], token.replace(/"/g, ""), Loading)}
          </CartPageComponent.ConteinerToProducts>
          {Summary(totalPrice(data.data.products))}
        </CartPageComponent.AlignConteiner>
      </CartPageComponent.Conteiner>
    </>
  );
}
