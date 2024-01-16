import Link from "next/link";
import { ActivityByUserComponent as Style } from "./activity.style";

export default function ActivityByUser() {
  return (
    <Style.Conteiner>
      <Link href={"/account-settings/activity/comments"}>
        <Style.Sections>
          <Style.Titles>
            <span>Meus Comentários</span>
            <p>Veja os comentários que você fez.</p>
          </Style.Titles>
          <Style.Sgv src={"/back-btn.svg"} />
        </Style.Sections>
      </Link>
      <Link href={"/account-settings/activity/shopping"}>
        <Style.Sections>
          <Style.Titles>
            <span>Minhas Compras</span>
            <p>Administre suas compras.</p>
          </Style.Titles>
          <Style.Sgv src={"/back-btn.svg"} />
        </Style.Sections>
      </Link>
    </Style.Conteiner>
  );
}
