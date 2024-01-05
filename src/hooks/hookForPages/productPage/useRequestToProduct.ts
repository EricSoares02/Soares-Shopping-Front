import { DoResquest } from "@/services/requests";
import { API_URL } from "@/services/urls";
import { useQueries, useQuery } from "react-query";

const getProduct = async (id: string) => {
  return DoResquest.get(`${API_URL}/produto/${id}` ?? "").then(
    (response) => response.data
  );
};

const getCommentsByProduct = async (id: string) => {
  return DoResquest.get(`${API_URL}/comment/produto/${id}` ?? "").then(
    (response) => response.data
  );
};

function useGetProductByIdRequest(id: string) {
  const result = useQueries([ {
    queryKey: ["getProductById", id],
    queryFn: () => getProduct(id),
    enabled: !!id,
  },
  {
    queryKey: ["getCommentsByProduct", id],
    queryFn: () => getCommentsByProduct(id),
    enabled: !!id,
  },]);
  
  const isLoading = result.some((result)=> result.isLoading);

  const data = result.map((result)=>{
    return result.data
  })
  return { data, isLoading };
}

export { useGetProductByIdRequest };
