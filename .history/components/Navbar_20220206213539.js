import React from "react";
import styled from "styled-components";
import Link from 
const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-4">
      <a
        href="/index"
        className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Home
      </a>
      <a
        href="/about"
        className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        About
      </a>
      <a
        href="/doc"
        className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Documentation
      </a>
    </nav>
  );
};

export default Navbar;
