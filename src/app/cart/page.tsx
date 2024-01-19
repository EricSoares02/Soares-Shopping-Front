'use client'
import { CartPageComponent } from "@/components/pages/cart/main-page/page.style";
import BackButton from "@/utils/backOnePage/back";


export default function CartPage(){

    return(<>
        <BackButton />
        <CartPageComponent.Conteiner>
            <CartPageComponent.AlignConteiner>
            
            </CartPageComponent.AlignConteiner>
        </CartPageComponent.Conteiner>
        </>
    )
}