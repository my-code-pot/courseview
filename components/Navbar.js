import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Navbar = () => {
  return (
    <Nav >
      <img style={{ transform: "translateX(6vw)"}} src="/swarthmore_logo.jpg" alt="hhh"/>
      <Link href="/"
          className="font-bold px-3 py-2 text-slate-700 rounded-lg left:10% hover:bg-red-100 hover:text-slate-900"
        >
          Home
      </Link>
      <div className="left-image">
      </div>
    </Nav>
  );
};

const Nav = styled.div.attrs({
  className: "flex  space-x-4",
})`
/* flex-direction: row; */
display: flex;
/* position: absolute; */
justify-content: space-between;
/* align-items: center; */
height: 13vh;
width: 100%;
background-color: #fafafa;
/* justify-content:center; */
padding:10px;
/* position:relative; */
.left-image{
  height: 5vh;
  width: 7vw;
  border: 5px red solid;
}
.logo{
  margin-right: 20%;
 ;
}

`
export default Navbar;
