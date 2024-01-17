"use client";
import { AccountSegmentComponent } from "@/components/pages/account/segment-page/page.style";
import NotFoundCommentByUser from "@/components/pages/account/segment-page/pages/activity/comments/notFound";
import { ShowCommentByUserComponent as Style } from "@/components/pages/account/segment-page/pages/activity/comments/showCommnets.style";
import setStars from "@/components/pages/product/comments/setStars";
import useCommentByUserRequest from "@/hooks/hookForPages/accountPage/segmentsPage/useRequestToGetComment";
import { RootStateType } from "@/redux/root-reducer";
import BackButton from "@/utils/backOnePage/back";
import Load from "@/utils/loading/loading";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const token = useSelector(
    (state: RootStateType) => state.userSlice.access_token
  );
  const date = (date: Date) => {
    const getDate = new Date(date);
    const curruntDate = `${new Date(date).getDay()} de ${getDate
      .toLocaleString("default", { month: "long" })
      .slice(0, 3)}. ${new Date(date).getFullYear()}`;
    return curruntDate;
  };

  const { data, isLoading } = useCommentByUserRequest(token.replace(/"/g, ""));

  return isLoading ? (
    <>
      <Load />
    </>
  ) : (
    <>
      <BackButton />
      <AccountSegmentComponent.Conteiner>
        <AccountSegmentComponent.AlignConteiner>
          {data.data ? (
            <Style.Conteiner>
              {" "}
              {data.data.map((comment) => (
                <Style.CommentsCase key={comment.id}>
                  <Style.TopArea>
                    <Style.CommentStarsCase>
                      {setStars(comment.stars)}
                    </Style.CommentStarsCase>
                    <Style.CommentDateCase>
                      {date(comment.createdAt)}
                    </Style.CommentDateCase>
                  </Style.TopArea>
                  <Style.TitleArea>{comment.title}</Style.TitleArea>
                  <Style.BottomArea>
                    <span>Likes: {32}</span>
                    <Link
                      href={`/product?id=${comment.product_commentedId}`}
                      target="_blank"
                    >
                      See Product
                    </Link>
                  </Style.BottomArea>
                </Style.CommentsCase>
              ))}{" "}
            </Style.Conteiner>
          ) : (
            <>{NotFoundCommentByUser()}</>
          )}
        </AccountSegmentComponent.AlignConteiner>
      </AccountSegmentComponent.Conteiner>
    </>
  );
}
