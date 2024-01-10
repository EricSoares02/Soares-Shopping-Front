import Link from "next/link";
import { OptionsComponent } from "./options.style";
import { useSelector } from "react-redux";
import { RootStateType } from "@/redux/root-reducer";

export default function Options() {
  const token = useSelector((state: RootStateType) => state.userSlice);

  const rout = token.access_token ? "/account" : "/login";

  return (
    <OptionsComponent.DivOptions>
      <Link href={rout}>
        {token.user_name ?  (
          <OptionsComponent.ImageOptionUserLogged>
            {token.user_name.split(" ")[0].charAt(0).toUpperCase() +
              token.user_name.split(" ")[1].charAt(0).toUpperCase()}
          </OptionsComponent.ImageOptionUserLogged>
        ) : (
            <OptionsComponent.ImageOptionsUser src={"/user.svg"} />
        )}
      </Link>
      <OptionsComponent.AlignToCart>
        <Link href={"/cart"}>
          <OptionsComponent.ImageOptions src="/bag.svg" />
        </Link>
        {3}
      </OptionsComponent.AlignToCart>
    </OptionsComponent.DivOptions>
  );
}
