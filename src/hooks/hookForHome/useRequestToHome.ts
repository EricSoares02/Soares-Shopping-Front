import { DoResquest } from "@/services/requests";
import { API_URL } from "@/services/urls";
import { useQuery } from "react-query";

const getProducts = async () => {
  return DoResquest
    .get(`${API_URL}/produtos` ?? '')
    .then((response) => response.data);
};


function useProductsRequest() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { data, isLoading };
}

export {useProductsRequest}