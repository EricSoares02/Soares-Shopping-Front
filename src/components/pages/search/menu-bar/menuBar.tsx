import { MenuBarComponent } from "./menuBar.style";

export default function MenuBarSearch(productSearched: string, results: number) {
  return (
    <MenuBarComponent.MenuBar>
      <MenuBarComponent.Text>
        <MenuBarComponent.H2>
          {productSearched.charAt(0).toUpperCase() + productSearched.slice(1)}
        </MenuBarComponent.H2>
        <span>{results} Resultado(s)</span>
      </MenuBarComponent.Text>
      <MenuBarComponent.OptionsConteiner>
        <span>Ordenar por:</span>
        <MenuBarComponent.OptionsCase>
            <MenuBarComponent.Select>
                <option>Mais Relevantes</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
            </MenuBarComponent.Select>
        </MenuBarComponent.OptionsCase>
      </MenuBarComponent.OptionsConteiner>
    </MenuBarComponent.MenuBar>
  );
}
