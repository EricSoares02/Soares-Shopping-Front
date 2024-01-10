import { DoResquest } from "@/services/requests";
import { API_URL } from "@/services/urls";
import { useQuery } from "react-query";

interface RequestType {email: string, password: string}
    


const getLogin= async (data:RequestType) => {
  return DoResquest
  .post(`${API_URL}/login` ?? '', {
      email: data.email,
      password: data.password
  })
  .then((response) => response.data).catch((response)=>response.response.data.message);
};


function useLoginRequest(dataToRequest: RequestType) {
  const { data, isLoading } = useQuery({
    queryKey: ["login", dataToRequest],
    queryFn: ()=> getLogin(dataToRequest),
    enabled: !!dataToRequest
  });

  return { data, isLoading };
}

export default useLoginRequest