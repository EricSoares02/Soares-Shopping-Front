"use client";
import LoginForm from "@/components/pages/login/login-form/loginForm";
import { AccountPageComponent } from "@/components/pages/login/main-page/mainPage.style";


export default function Login() {
 
  return (<AccountPageComponent.Conteiner>
    <AccountPageComponent.AlignConteiner>
      {LoginForm()}
    </AccountPageComponent.AlignConteiner>
  </AccountPageComponent.Conteiner>)
}
