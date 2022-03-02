import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Navbar = () => {
  return (
    <Nav >
      <img clssName="relative left-100" src="/swarthmore_logo.jpg" alt="hhh"/>
      <Link href="/"
          className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-red-100 hover:text-slate-900"
        >
          Home
      </Link>
    </Nav>
  );
};

const Nav = styled.div.attrs({
  className: "flex  space-x-4",
})`
height: 13vh;
width: 100%;
background-color: #fafafa;
justify-content:center;
padding:10px;
position:relative;
`
export default Navbar;
