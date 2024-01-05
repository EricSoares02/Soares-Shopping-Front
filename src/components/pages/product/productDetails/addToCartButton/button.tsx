import BagIcon from "@/utils/svgs/bag/bag";
import { ButtonComponent } from "./button.style";

export default function AddToCartButton() {
  return (
    <ButtonComponent.Conteiner>
      <ButtonComponent.Btn onClick={()=>{}}>
        {BagIcon({size:30, color:'#FFFFFF'})}
        ADD TO CART
      </ButtonComponent.Btn>
    </ButtonComponent.Conteiner>
  );
}
