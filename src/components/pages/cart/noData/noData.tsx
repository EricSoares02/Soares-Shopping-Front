import { NoDataCartComponent } from "./noData.style";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NoDataCart() {

  const router = useRouter();

  return (
    <NoDataCartComponent.Conteiner>
      <NoDataCartComponent.Section>
        <Image src="/bag.svg" width={60} height={60} alt="bag" />
        <p>Adicione Produtos ao seu carrinho</p>
        <NoDataCartComponent.Button onClick={()=> router.push('/')}>Conferir Produtos</NoDataCartComponent.Button>
      </NoDataCartComponent.Section>
    </NoDataCartComponent.Conteiner>
  );
}
