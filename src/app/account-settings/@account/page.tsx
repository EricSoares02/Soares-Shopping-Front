"use client";
import LogoutConteiner from "@/components/pages/account/main-page/logout-conteiner/logout";
import { AccountPageComponent } from "@/components/pages/account/main-page/page.style";
import AccountSettingOptions from "@/components/pages/account/main-page/settings-to-logged-user/accountSettings";
import ShowAccountUser from "@/components/pages/account/main-page/show-user/showUser";
import useUserRequest from "@/hooks/hookForPages/accountPage/useRequestToGetUser";
import { RootStateType } from "@/redux/root-reducer";
import BackButton from "@/utils/backOnePage/back";
import Load from "@/utils/loading/loading";
import { useSelector } from "react-redux";

export default function Account() {
  const token = useSelector(
    (state: RootStateType) => state.userSlice.access_token
  );
  const { data, isLoading } = useUserRequest(token.replace(/"/g, ""));

    console.log(data)
  return isLoading ? (
    <>
      <Load />
    </>
  ) : (
    <>
    <BackButton />
    <AccountPageComponent.Conteiner>
      <AccountPageComponent.AlignConteiner>
        {ShowAccountUser(
          `${data.data.first_name} ${data.data.last_name}`,
          data.data.email, data.data.url_img
        )}
        {AccountSettingOptions(data.data.role)}
        {LogoutConteiner()}
      </AccountPageComponent.AlignConteiner>
    </AccountPageComponent.Conteiner>
    </>
  );
}