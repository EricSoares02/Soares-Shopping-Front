import { NoDataCartComponent } from "./noData.style";
import Image from "next/image";

export default function NoDataCart() {
  return (
    <NoDataCartComponent.Conteiner>
      <NoDataCartComponent.Section>
        <Image src="/bag.svg" width={60} height={60} alt="bag" />
        <p>Adicione Produtos ao seu carrinho</p>
        <NoDataCartComponent.Button>Conferir Produtos</NoDataCartComponent.Button>
      </NoDataCartComponent.Section>
    </NoDataCartComponent.Conteiner>
  );
}
