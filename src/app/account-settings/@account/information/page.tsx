"use client";
import { AccountSegmentComponent } from "@/components/pages/account/segment-page/page.style";
import { useSelector } from "react-redux";
import Load from "@/utils/loading/loading";
import { RootStateType } from "@/redux/root-reducer";
import useUserRequest from "@/hooks/hookForPages/accountPage/useRequestToGetUser";
import InformationSegment from "@/components/pages/account/segment-page/pages/information/information";
import BackButton from "@/utils/backOnePage/back";

export default function Page() {
  const token = useSelector(
    (state: RootStateType) => state.userSlice.access_token
  );
  const { data, isLoading } = useUserRequest(token.replace(/"/g, ""));

  return isLoading ? (
    <>
      <Load />
    </>
  ) : (
    <>
      <BackButton />
      <AccountSegmentComponent.Conteiner>
        <AccountSegmentComponent.AlignConteiner>
          {InformationSegment(data.data)}
        </AccountSegmentComponent.AlignConteiner>
      </AccountSegmentComponent.Conteiner>
    </>
  );
}
