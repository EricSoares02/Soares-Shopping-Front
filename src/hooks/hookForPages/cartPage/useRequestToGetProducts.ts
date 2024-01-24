import { DoResquest } from "@/services/requests";
import { API_URL } from "@/services/urls";
import { useQuery } from "react-query";


const getProducts= async (token:string) => {
  return DoResquest
  .get(`${API_URL}/cart` ?? '', {
    headers: {
        Authorization: `Bearer ${token}`
    }
  })
  .then((response) => response.data).catch((response)=>response.response.data.message);
};


function useProductsInCartRequest(token: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["useProductsInCartRequest", token],
    queryFn: ()=> getProducts(token),
    enabled: !!token
  });

  return { data, isLoading };
}

export default useProductsInCartRequest