'use client'
import { RootStateType } from "@/redux/root-reducer";
import { useSelector } from "react-redux";
import { Provider } from 'react-redux'
import store from '@/redux/root-reducer'


 
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
 
  return <Provider store={store}>{isLoggedIn ? account : login}</Provider>
}
