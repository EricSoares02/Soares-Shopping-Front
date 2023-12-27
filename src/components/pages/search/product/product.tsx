import { DefaultProductType } from "@/types/products/productType"
import { converterParaReal } from "@/utils/conversorCoin"
import Link from "next/link"
import { ProductComponent } from "./products.style"

export default function ProductsSearch(data:Array<DefaultProductType>){
    return(
        <ProductComponent.ProductsConteiner>
                {data?.map((value: DefaultProductType) => (
                  <ProductComponent.ProductCase key={value.id}>
                    <Link href={`/product?id=${value.id}`}>
                      <ProductComponent.ProductImgConteiner>
                        <ProductComponent.ProductImg
                          src={value.url_img[0]}
                        ></ProductComponent.ProductImg>
                      </ProductComponent.ProductImgConteiner>
                    </Link>
                    <ProductComponent.ProductDesc>
                      <h2>{value.name.toUpperCase()}</h2>
                      <h3>{value.category.toUpperCase()}</h3>
                    </ProductComponent.ProductDesc>
                    <ProductComponent.PriceAndButton>
                      <p>{converterParaReal(value.price_in_cent)}</p>
                    </ProductComponent.PriceAndButton>
                  </ProductComponent.ProductCase>
              ))}
                </ProductComponent.ProductsConteiner>
    )
}