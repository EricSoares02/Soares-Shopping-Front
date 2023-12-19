"use client";
import { HeaderComponent } from "./header.style";
import Logo from "./logo/logo";
import Search from "./search-bar/search-bar";

export default function Header() {
  return (
    <HeaderComponent>
      <Logo />
      <Search/>
    </HeaderComponent>
  );
}
