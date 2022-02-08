import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import SideBar from './Sidebar';
import styled from 'styled-components';
const Layout = ({children}) => {
  return (
    <div >
        <Navbar />
        <SideBar/>
        {children}
        <Footer />
    </div>
  )
};

export default Layout;
