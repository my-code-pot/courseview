import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <div>
      <Button className="bg-[#1da1f2] text-white">Share on Twitter</Button>
    </div>
  );
};

export default Navbar;
const Button = styled.button.attrs({
  className: "bg-[#1da1f2] text-black",
})`
  border-radius: 10px;
`;
