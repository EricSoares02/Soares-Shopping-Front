import { ShowAccountUserComponent } from "./showUser.style";
import Image from "next/image";

export default function ShowAccountUser(
  name: string,
  email: string,
  img?: string
) {
  return (
    <ShowAccountUserComponent.Conteiner>
      {img ? (
        <Image
        src={img}
        alt="user"
        width={80}
        height={80}
      />
      ) : (
        <ShowAccountUserComponent.Image>
          {name.split(" ")[0].charAt(0).toUpperCase() +
            name.split(" ")[1].charAt(0).toUpperCase()}
        </ShowAccountUserComponent.Image>
      )}
      <ShowAccountUserComponent.Titles>
        <span>{name}</span>
        <p>{email}</p>
      </ShowAccountUserComponent.Titles>
    </ShowAccountUserComponent.Conteiner>
  );
}
