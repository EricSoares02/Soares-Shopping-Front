import { ButtonComponent } from "./Button.style";

export default function AddToCartButton() {
  return (
    <ButtonComponent.Conteiner>
      <ButtonComponent.Btn>
        <ButtonComponent.ImageBtn src="/bagForBtn.svg" />
        ADD TO CART
      </ButtonComponent.Btn>
    </ButtonComponent.Conteiner>
  );
}
