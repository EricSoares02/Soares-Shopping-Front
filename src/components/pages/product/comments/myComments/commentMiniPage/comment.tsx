import setStars from "../../setStars";
import { MyCommentsComponent } from "./comment.style";

export default function MyComment() {
  return (
    <MyCommentsComponent.Conteiner>
      <MyCommentsComponent.YouComment>
        <MyCommentsComponent.MyCommenter>
          <MyCommentsComponent.TopCase>
            <MyCommentsComponent.MyAccount>
              <MyCommentsComponent.MyaccountImg
                src={"user.svg"}
              ></MyCommentsComponent.MyaccountImg>
              eu
            </MyCommentsComponent.MyAccount>
            <MyCommentsComponent.SetStars>
              {setStars(0)}
            </MyCommentsComponent.SetStars>
          </MyCommentsComponent.TopCase>
          <MyCommentsComponent.CaseToAlignForm>
            <MyCommentsComponent.Form>
              <MyCommentsComponent.InputCommenter />
              <MyCommentsComponent.Submit />
            </MyCommentsComponent.Form>
          </MyCommentsComponent.CaseToAlignForm>
        </MyCommentsComponent.MyCommenter>
      </MyCommentsComponent.YouComment>
    </MyCommentsComponent.Conteiner>
  );
}
