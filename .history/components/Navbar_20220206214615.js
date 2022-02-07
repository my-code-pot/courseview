import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-4">
      <Link href="/">
        <a
          href=""
          className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>
      </Link>
      <a
        href="/about"
        className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        About
      </a>
    </nav>
  );
};

const Nav = styled.nav.attrs({
  className: "flex justify-center space-x-4",
})`
height: ;
`
export default Navbar;
