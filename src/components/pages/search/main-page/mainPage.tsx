import { DefaultProductType } from "@/types/products/productType"
import { SearchComponent } from "./page.style"
import ProductsSearch from "../product/product"
import MenuBarSearch from "../menu-bar/menuBar"


export default function SearchPage(data:Array<DefaultProductType>, productSearched: string){
    return(
        <SearchComponent.Conteiner>
            <SearchComponent.AlignConteiner>
                {MenuBarSearch(productSearched, data.length)}
                {ProductsSearch(data)}
            </SearchComponent.AlignConteiner>
        </SearchComponent.Conteiner>
    )
}