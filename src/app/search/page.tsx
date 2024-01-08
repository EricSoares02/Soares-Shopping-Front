'use client'
import SearchPage from "@/components/pages/search/main-page/mainPage";
import NotFound from "@/components/pages/search/notFound/notFound";
import { useSearchProductsRequest } from "@/hooks/hookForSearch/useRequestToSearch";
import Load from "@/utils/loading/loading";
import { useEffect, useState } from "react";


export default function Search({searchParams} : {
    searchParams: { value: string };
  }){
 
    const [found, setFound] = useState('notFound');
    //requisição
    const {data, isLoading} = useSearchProductsRequest(searchParams.value);

    //toda vez que houver uma requisição, verificamos se achou algum dado
    useEffect(()=>{
      setFound('Found')
      //caso, não tenha achado, setamos un estado como notFound
      if(data?.data === undefined){
          setFound('notFound');
      }
    },[data?.data, isLoading])

    //função para mostrar os dados ou notFound
    function showNotFound(data: any){
      //se caso o estado da page seja 'notFound', retornamos notFound no dom
      if(found==='notFound'){
      return (
          <NotFound/>
      )
    }
    //se caso o estado da page seja 'Found', retornamos os dados
    return (
      SearchPage(data, searchParams.value)
    )
    }


    return isLoading ? (<><Load/></>) : (
        <>
          {showNotFound(data?.data)}
        </>
      )
}