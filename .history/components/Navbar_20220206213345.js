import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-4">
      <a
        href="/dashboard"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Home
      </a>
      <a
        href="/team"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        About
      </a>
      <a
        href="/projects"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Con
      </a>
    </nav>
  );
};

export default Navbar;

