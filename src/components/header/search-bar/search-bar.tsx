import {SearchComponent} from './search-bar.style';
import {useForm} from 'react-hook-form'

export default function Search(){


    const {register, handleSubmit, formState} = useForm()


    return(
        <SearchComponent.Conteiner>
            <SearchComponent.Search>
                <SearchComponent.SearchInput/>
                <SearchComponent.Submit>
                    <SearchComponent.ImageInput src='/lupa.svg'/>
                </SearchComponent.Submit>
            </SearchComponent.Search>
        </SearchComponent.Conteiner>
    )
}