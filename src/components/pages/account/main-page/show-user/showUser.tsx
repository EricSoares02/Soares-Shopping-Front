import { ShowAccountUserComponent } from "./showUser.style";

export default function ShowAccountUser(name: string, email: string) {
  return (
    <ShowAccountUserComponent.Conteiner>
      <ShowAccountUserComponent.Image>
        {name.split(" ")[0].charAt(0).toUpperCase() +
          name.split(" ")[1].charAt(0).toUpperCase()}
      </ShowAccountUserComponent.Image>
      <ShowAccountUserComponent.Titles>
        <span>{name}</span>
        <p>{email}</p>
      </ShowAccountUserComponent.Titles>
    </ShowAccountUserComponent.Conteiner>
  );
}
