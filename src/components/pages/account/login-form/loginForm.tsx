import { useForm } from "react-hook-form";
import { LoginFormComponent } from "./loginForm.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres")
    .required("Campo obrigatório"),
});

export default function LoginForm() {

  const { register, handleSubmit, formState } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const { errors, isSubmitting } = formState;
 
  const handleSubmitData = async (data: any) => {
    
    console.log('tentou logar')
    // api.post("http://localhost:3333/login", data).then(function (response) {
    
    // });
  };

  return (
    <LoginFormComponent.Conteiner>
      <LoginFormComponent.Form onSubmit={handleSubmit(handleSubmitData)}>
        <LoginFormComponent.Text>Hi, Welcome Back!</LoginFormComponent.Text>
        <LoginFormComponent.InputConteiner>
          <LoginFormComponent.InputCase>
            <LoginFormComponent.LabelCase>
              <LoginFormComponent.Label htmlFor="email">
                Email
              </LoginFormComponent.Label>
            </LoginFormComponent.LabelCase>
            <LoginFormComponent.EmailInput
              {...register("email")}
              placeholder="email"
            />
            <p>{errors.email?.message}</p>
          </LoginFormComponent.InputCase>
          <LoginFormComponent.InputCase>
            <LoginFormComponent.LabelCase>
              <LoginFormComponent.Label htmlFor="password">
                Password
              </LoginFormComponent.Label>
            </LoginFormComponent.LabelCase>
            <LoginFormComponent.PasswordInput
              {...register("password")}
              placeholder="password"
            />
            <p>{errors.password?.message}</p>
          </LoginFormComponent.InputCase>
        </LoginFormComponent.InputConteiner>
        <LoginFormComponent.SubmitCase>
          <LoginFormComponent.Submit disabled={isSubmitting}>
            Sing In
          </LoginFormComponent.Submit>
          <LoginFormComponent.ChangePassword>
            Esqueceu sua senha? modifique-a
          </LoginFormComponent.ChangePassword>
        </LoginFormComponent.SubmitCase>
      </LoginFormComponent.Form>
      <LoginFormComponent.RightSide>
        <LoginFormComponent.Text>
          <h1>Contas que você pode usar</h1>
        </LoginFormComponent.Text>
        <LoginFormComponent.Accounts>
          <span>João</span>
          <li>jaoxpg@gmail.com</li>
          <li>senha</li>
          <span>Hanna</span>
          <li>minihanna@gmail.com</li>
          <li>senha</li>
          <span>Alice</span>
          <li>alicinhacastro@gmail.com</li>
          <li>123abc</li>
        </LoginFormComponent.Accounts>
      </LoginFormComponent.RightSide>
    </LoginFormComponent.Conteiner>
  );
}
