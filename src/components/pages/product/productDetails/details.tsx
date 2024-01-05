import { converterParaReal } from "@/utils/conversorCoin";
import { DetailsComponent } from "./details.style";
import AddToCartButton from "./addToCartButton/button";

type PropsType = {
  props: {
    name: string;
    price_in_cent: number;
    subCategory: string;
    category: string;
    options: Array<string>;
  };
};

export default function Details(props: PropsType) {
  return (
    <DetailsComponent.Conteiner>
      <DetailsComponent.ProductName>
        <h1>{props?.props.name}</h1>
      </DetailsComponent.ProductName>
      <i>R$50,00</i>
      <span>{converterParaReal(props.props.price_in_cent)}</span>
      {/* {StoreCase(data?.productStore)} */}
      <DetailsComponent.TextConteiner>
        <p>
          Categoria: {props.props.category}/{props.props.subCategory}
        </p>
        <DetailsComponent.Text>Frete Grátis</DetailsComponent.Text>
      </DetailsComponent.TextConteiner>
      <DetailsComponent.OptionsConteiner>
        <h3>Options:</h3>
        <DetailsComponent.SelectOptions>
          {props.props.options.map((item) => (
            <DetailsComponent.Options key={item} value={item}>
              {item.toUpperCase()}
            </DetailsComponent.Options>
          ))}
        </DetailsComponent.SelectOptions>
      </DetailsComponent.OptionsConteiner>
      <DetailsComponent.BtnConteiner>
        {/* {FinishBuyBtn(data.product)} */}
        {AddToCartButton()}
      </DetailsComponent.BtnConteiner>
    </DetailsComponent.Conteiner>
  );
}
