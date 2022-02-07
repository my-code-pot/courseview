import React from 'react';

const Navbar = () => {
  return <div style={{display: "flex", flexDirection:"row", justifyContent:"center"}}>
      {["Home", "About", "Contact"].map(item => <div style={{margin: "10px"}}>{item}</div>)}
  </div>;
};

export default Navbar;
