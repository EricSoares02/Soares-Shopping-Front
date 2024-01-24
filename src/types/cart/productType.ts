export type CartProductType = {
id: string, 
name: string,
url_img: string,
price_in_cent: number,
options: string,
storeId: string,
quantity: number
}

export type ItemCartToRequestType = {
    id: string,
    options: string
}