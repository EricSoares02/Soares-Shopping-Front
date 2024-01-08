import Link from "next/link";
import { FooterComponent, FooterElementsComponent } from "./footer.style";
import Image from "next/image";

export default function Footer() {
  return (
    <FooterComponent>
      <FooterElementsComponent.ConteinerToAlign>
        <FooterElementsComponent.TopSide>
          <FooterElementsComponent.Sections>
            <Image src="/footer/www.svg" width={65} height={65} alt="bag" />
            <FooterElementsComponent.TitleArea>
              <h2>Veja Nossos Parceiros</h2>
            </FooterElementsComponent.TitleArea>
            <FooterElementsComponent.TextArea>
              <p>
                Veja também outras aplicações desenvolvidas por mim. Todas estão
                no meu Portifólio. Segue o link:{" "}
                <Link href={""} target="_blank">
                  Portifólio
                </Link>
                .
              </p>
            </FooterElementsComponent.TextArea>
          </FooterElementsComponent.Sections>
          <FooterElementsComponent.Sections>
            <Image
              src="/footer/delivery.svg"
              width={65}
              height={65}
              alt="bag"
            />
            <FooterElementsComponent.TitleArea>
              <h2>Atenção!</h2>
            </FooterElementsComponent.TitleArea>
            <FooterElementsComponent.TextArea>
              <p>
                Todos os itens, Produtos, Serviços e outros, nesta loja não são
                reais. Todos os produtos são fake e utilizados apenas para
                testar meus conhecimentos em programação.
              </p>
            </FooterElementsComponent.TextArea>
          </FooterElementsComponent.Sections>
          <FooterElementsComponent.Sections>
            <Image src="/footer/shield.svg" width={65} height={65} alt="bag" />
            <FooterElementsComponent.TitleArea>
              <h2>Direitos e Segurança</h2>
            </FooterElementsComponent.TitleArea>
            <FooterElementsComponent.TextArea>
              <p>
                Todos as imagens e svgs utilizados foram retirados de
                plataformas gratuitas de imagem. Direitos de uso de imagem
                reservados às plataformas{" "}
                <Link href={"https://www.flaticon.com/br/"} target="_blank">
                  FLATICON
                </Link>
                ,{" "}
                <Link href={"https://pixabay.com"} target="_blank">
                  pixabay
                </Link>{" "}
                e{" "}
                <Link href={"https://www.pexels.com/pt-br/"} target="_blank">
                  Pexels
                </Link>
                .
              </p>
            </FooterElementsComponent.TextArea>
          </FooterElementsComponent.Sections>
        </FooterElementsComponent.TopSide>
        <FooterElementsComponent.BotSide>
          <Link href={"https://github.com/EricSoares02"} target="_blank">
            <Image
              src="/socialMedia/github.svg"
              width={35}
              height={35}
              alt="git hub"
            />
          </Link>
          <Link href={"https://www.instagram.com/e.soares02/"} target="_blank">
            <Image
              src="/socialMedia/instagram.svg"
              width={35}
              height={35}
              alt="instagram"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/eric-soares-b9b050255/"} target="_blank">
            <Image
              src="/socialMedia/linkedin.svg"
              width={35}
              height={35}
              alt="linkedin"
            />
          </Link>
        </FooterElementsComponent.BotSide>
      </FooterElementsComponent.ConteinerToAlign>
    </FooterComponent>
  );
}
