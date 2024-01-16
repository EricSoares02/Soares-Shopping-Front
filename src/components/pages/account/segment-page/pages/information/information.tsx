import { DefaultUserType } from "@/types/user/userType";
import { InformationSegmentComponent as Style } from "./information.style";

export default function InformationSegment(user: DefaultUserType) {
  return (
    <Style.Conteiner>
      <Style.Sections>
        <Style.Titles>
          <span>Email</span>
          <p>{user.email}</p>
        </Style.Titles>
        <Style.Sgv src={"/back-btn.svg"} />
      </Style.Sections>
      <Style.Sections>
        <Style.Titles>
          <span>Nome</span>
          <p>
            {user.first_name}
            {' '}
            {user.last_name}
          </p>
        </Style.Titles>
        <Style.Sgv src={"/back-btn.svg"} />
      </Style.Sections>
      <Style.Sections>
        <Style.Titles>
          <span>Tipo de Conta</span>
          <p>{user.role}</p>
        </Style.Titles>
        <Style.Sgv src={"/back-btn.svg"} />
      </Style.Sections>
      {user.storeId ? (
        <Style.Sections>
          <Style.Titles>
            <span>Loja</span>
            <p>{user.storeId}</p>
          </Style.Titles>
          <Style.Sgv src={"/back-btn.svg"} />
        </Style.Sections>
      ) : (
        <></>
      )}
    </Style.Conteiner>
  );
}
