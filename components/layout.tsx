import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  const authenticated = false;
  const logout = () => { 
  }
  return (
    <>
      <header>
        <Image src="/logo.png" alt="imagen" width={40} height={40} />
        <Link href="/home">Home</Link>
        <Link href="/faqs">Preguntas frecuentes</Link>
        {!authenticated && <Link href="/login">Login</Link>}
        {authenticated && <button onClick={logout}>Logout</button>}
        <Link href="/rick-morty">Rick and Morty</Link>
      </header>
      {children}
    </>
  );
};
export default Layout;


