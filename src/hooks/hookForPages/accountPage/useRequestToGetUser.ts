import { DoResquest } from "@/services/requests";
import { API_URL } from "@/services/urls";
import { useQuery } from "react-query";

interface RequestType {id: string, token: string}
    


const getUser= async (props:RequestType) => {
  return DoResquest
  .get(`${API_URL}/user/${props.id}` ?? '', {
    headers: {
        Authorization: `Bearer ${props.token}`
    }
  })
  .then((response) => response.data).catch((response)=>response.response.data.message);
};


function useUserRequest(props: RequestType) {
  const { data, isLoading } = useQuery({
    queryKey: ["login", props],
    queryFn: ()=> getUser(props),
    enabled: !!props
  });

  return { data, isLoading };
}

export default useUserRequest