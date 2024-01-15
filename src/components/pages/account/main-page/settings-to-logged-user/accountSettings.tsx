import { AccountSettingOptionsComponent as Style } from "./accountSettings.style";
import Link from "next/link";
import UserSvg from "@/utils/svgs/user/user";
import SecuritySvg from "@/utils/svgs/security/security";
import ComunicationSvg from "@/utils/svgs/comunication/comunication";
import SendSvg from "@/utils/svgs/send/send";
import HistoricSvg from "@/utils/svgs/historic/historic";
import PrivacySvg from "@/utils/svgs/privacy/privacy";
import { CanAccessAdminPage } from "./showAdmin";

export default function AccountSettingOptions(role: string) {

 
  const isAdmin =  CanAccessAdminPage(role);

  return (
    <Style.Conteiner>
      <Link href={'/account/information'}>
      <Style.Sections>
        <Style.Image>{UserSvg({size: 30, color: '#1E6FD9'})}</Style.Image>
        <Style.Titles>
          <span>Informações da Conta </span>
          <p>Seção para mais informações sobre sua contas</p>
        </Style.Titles>
        <Style.Sgv src={"/back-btn.svg"}/>
      </Style.Sections>
      </Link>

      <Link href={'/account/security'}>
      <Style.Sections>
        <Style.Image>{SecuritySvg({size: 30, color: '#1E6FD9'})}</Style.Image>
        <Style.Titles>
          <span>Segurança</span>
          <p>Medidas protetivas para a conta.</p>
        </Style.Titles>
        <Style.Sgv src={"/back-btn.svg"}/>
      </Style.Sections>
      </Link>

      <Link href={'/account/business-associate'}>
      <Style.Sections>
        <Style.Image>{SendSvg({size: 30, color: '#1E6FD9'})}</Style.Image>
        <Style.Titles>
          <span>Conta Associada à parceiros</span>
          <p>Aqui você extende esta conta a aplicações parceiras(criadas pelo mesmo autor).</p>
        </Style.Titles>
        <Style.Sgv src={"/back-btn.svg"}/>
      </Style.Sections>
      </Link>

      <Link href={'/account/privacy'}>
      <Style.Sections>
        <Style.Image>{PrivacySvg({size: 30, color: '#1E6FD9'})}</Style.Image>
        <Style.Titles>
          <span>Privacidade</span>
          <p>Preferências e controle de dados.</p>
        </Style.Titles>
        <Style.Sgv src={"/back-btn.svg"}/>
      </Style.Sections>
      </Link>

      <Link href={'/account/dashboard'} 
      style={
        {
          pointerEvents: isAdmin ? 'auto' : 'none',
        }
    } >
      <Style.Sections>
        <Style.Image>{UserSvg({size: 30, color: isAdmin ? '#1E6FD9' : 'red'})}</Style.Image>
        <Style.Titles>
          <span>Administradores</span>
          <p>Seção reservada aos administradores de lojas.</p>
        </Style.Titles>
        <Style.Sgv src={"/back-btn.svg"}/>
      </Style.Sections>
      </Link>

      <Link href={''}>
      <Style.Sections>
        <Style.Image>{ComunicationSvg({size: 30, color: '#1E6FD9'})}</Style.Image>
        <Style.Titles>
          <span>Comunicação</span>
          <p>Você será redirecionado à nossa rede social.</p>
        </Style.Titles>
        <Style.Sgv src={"/back-btn.svg"}/>
      </Style.Sections>
      </Link>

      <Link href={'/account/activity'}>
      <Style.Sections>
        <Style.Image>{HistoricSvg({size: 30, color: '#1E6FD9'})}</Style.Image>
        <Style.Titles>
          <span>Atividade</span>
          <p>Veja seus feitos nos últimos tempos</p>
        </Style.Titles>
        <Style.Sgv src={"/back-btn.svg"}/>
      </Style.Sections>
      </Link>
    </Style.Conteiner>
  );
}