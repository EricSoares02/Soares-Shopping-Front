import Link from "next/link";
import { OptionsComponent } from "./options.style";
import { useSelector } from "react-redux";
import { RootStateType } from "@/redux/root-reducer";

export default function Options() {
  const token = useSelector((state: RootStateType) => state.userSlice);

  return (
    <OptionsComponent.DivOptions>
      <Link href={'/account-settings'}>
        {token.user_name ? (
          <OptionsComponent.ImageOptionUserLogged>
            {token.user_name.replace(/"/g, "").split(" ")[0].charAt(0).toUpperCase() +
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
