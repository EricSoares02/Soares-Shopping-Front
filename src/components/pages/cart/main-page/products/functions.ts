import { DoResquest } from "@/services/requests";
import { API_URL } from "@/services/urls";
import { ItemCartToRequestType } from "@/types/cart/productType";


async function AddProductInCart(token:string, data:ItemCartToRequestType){

 return DoResquest
  .post(`${API_URL}/cart/insert-product` ?? '', data, {
    headers: {
        Authorization: `Bearer ${token}`
    }, 
  })
  .then((response) => response.data).catch((response)=>response.response.data.message);  

}

async function LessProductInCart(token:string, data:ItemCartToRequestType){

  return DoResquest
     .patch(`${API_URL}/cart/less-product` ?? '', data, {
       headers: {
           Authorization: `Bearer ${token}`
       }, 
     })
     .then((response) => response.data).catch((response)=>response.response.data.message);  
   
   }

async function RemoveProductInCart(token:string, data:ItemCartToRequestType){

    return DoResquest
       .patch(`${API_URL}/cart/remove-product` ?? '', data, {
         headers: {
             Authorization: `Bearer ${token}`
         }, 
       })
       .then((response) => response.data).catch((response)=>response.response.data.message);  
     
     }

export {AddProductInCart, LessProductInCart, RemoveProductInCart}