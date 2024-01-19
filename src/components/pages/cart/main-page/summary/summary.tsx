import { SummaryComponent } from "./summary.style";

export default function Summary(TotalValue: string){

    return(<>
        <SummaryComponent.Conteiner>
        <SummaryComponent.Text>
          <h1>Resumo do Pedido</h1>
        </SummaryComponent.Text>
        <SummaryComponent.Section>
          <h1>Total</h1>
          <p>{TotalValue}</p>
        </SummaryComponent.Section>
        <SummaryComponent.AlignBtn>
          comprar btn
        </SummaryComponent.AlignBtn>
    </SummaryComponent.Conteiner>
        </>
    )
}