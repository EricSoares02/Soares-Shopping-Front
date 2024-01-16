import { DoResquest } from "@/services/requests";
import { API_URL } from "@/services/urls";
import { useQuery } from "react-query";


const getCommentByUser= async (token:string) => {
  return DoResquest
  .get(`${API_URL}/comment/user` ?? '', {
    headers: {
        Authorization: `Bearer ${token}`
    }
  })
  .then((response) => response.data).catch((response)=>response.response.data.message);
};


function useCommentByUserRequest(token: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["get comment by user", token],
    queryFn: ()=> getCommentByUser(token),
    enabled: !!token
  });

  return { data, isLoading };
}

export default useCommentByUserRequest