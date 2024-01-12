import { DoResquest } from "@/services/requests";
import { API_URL } from "@/services/urls";
import { useQuery } from "react-query";


const getUser= async (token:string) => {
  return DoResquest
  .get(`${API_URL}/user` ?? '', {
    headers: {
        Authorization: `Bearer ${token}`
    }
  })
  .then((response) => response.data).catch((response)=>response.response.data.message);
};


function useUserRequest(token: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["login", token],
    queryFn: ()=> getUser(token),
    enabled: !!token
  });

  return { data, isLoading };
}

export default useUserRequest