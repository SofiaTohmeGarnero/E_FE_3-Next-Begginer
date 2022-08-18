import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <header>
        <Image src="/logo.png" alt="imagen" width={50} height={50} />
        <Link href="/">Home</Link>
        <Link href="/faqs">Preguntas frecuentes</Link>
        <Link href="/login">Login</Link>
        <Link href="/rick-morty">Rick and Morty</Link>
      </header>
      {children}
    </>
  );
};
export default Layout;


