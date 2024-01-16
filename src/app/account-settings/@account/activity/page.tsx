'use client'
import { AccountSegmentComponent } from "@/components/pages/account/segment-page/page.style"
import ActivityByUser from "@/components/pages/account/segment-page/pages/activity/activity"
import BackButton from "@/utils/backOnePage/back"


export default function Page(){


return(
    <>
      <BackButton />
      <AccountSegmentComponent.Conteiner>
        <AccountSegmentComponent.AlignConteiner>
            {ActivityByUser()}
        </AccountSegmentComponent.AlignConteiner>
      </AccountSegmentComponent.Conteiner>
    </>
)

}