import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components';
const Layout = (props) => {
  return (
    <div >
        <Navbar />
        {props.children}
        <Footer />
    </div>
  )
};

export default Layout;
