import { DoResquest } from "@/services/requests";
import { API_URL } from "@/services/urls";
import { useQuery } from "react-query";

const getProducts = async (seachProductParams: string) => {
  return DoResquest
    .get(`${API_URL}/produtos/search/?name=${seachProductParams}` ?? '')
    .then((response) => response.data);
};


function useSearchProductsRequest(params: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["searchProducts", params],
    queryFn: ()=>getProducts(params),
    enabled: !!params,
  });

  return { data, isLoading };
}

export {useSearchProductsRequest}