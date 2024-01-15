'use client'
import { RootStateType } from "@/redux/root-reducer";
import { useSelector } from "react-redux";



 
export default function AccountLayout({
  account,
  login,
}: {
  account: React.ReactNode
  login: React.ReactNode
}) {
    const isLoggedIn = useSelector(
        (state: RootStateType) => state.userSlice.access_token
      );
 
  return isLoggedIn ? account : login
}
