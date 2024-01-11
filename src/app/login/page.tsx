"use client";
import LoginForm from "@/components/pages/login/login-form/loginForm";
import { LoginComponent } from "@/components/pages/login/main-page/mainPage.style";


export default function Login() {
 
  return (<LoginComponent.Conteiner>
    <LoginComponent.AlignConteiner>
      {LoginForm()}
    </LoginComponent.AlignConteiner>
  </LoginComponent.Conteiner>)
}
