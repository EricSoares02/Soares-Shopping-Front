import {SearchComponent} from './search-bar.style';
import {useForm} from 'react-hook-form';
import { useRouter } from 'next/navigation';


export default function Search(){
    const router = useRouter();

    const {register, handleSubmit, formState} = useForm({
        mode: "onSubmit",
        defaultValues: {
          search: "",
        },
      });

    const { isSubmitting } = formState;

    const handleSubmitSearchData = async (data: any)=>{
        router.push(`search?value=${data.search}`)
    }

    return(
        <SearchComponent.Conteiner>
            <SearchComponent.Search onSubmit={handleSubmit(handleSubmitSearchData)}>
                <SearchComponent.SearchInput {...register("search")} placeholder="Search here your new style"/>
                <SearchComponent.Submit disabled={isSubmitting}>
                    <SearchComponent.ImageInput src='/lupa.svg'/>
                </SearchComponent.Submit>
            </SearchComponent.Search>
        </SearchComponent.Conteiner>
    )
}