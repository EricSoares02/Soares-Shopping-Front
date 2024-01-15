import { logout } from "@/redux/user/user-reducer";
import { useDispatch } from "react-redux";
import { LogoutComponent } from "./logout.style";
import { useRouter } from "next/navigation";
import { cache } from "react";

export default function LogoutConteiner (){


const dispatch = useDispatch();
const router = useRouter();

    return (
        <LogoutComponent.Conteiner>
            <LogoutComponent.LogoutButton onClick={()=>{dispatch(logout()); router.push('/')}}>
                Sair
            </LogoutComponent.LogoutButton>
        </LogoutComponent.Conteiner>
    )
}