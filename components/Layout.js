import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import SideBar from './Sidebar';
import styled from 'styled-components';
const Layout = (props) => {
  return (
    <div >
        <Navbar />
        <SideBar departments={props.departments}/>
        {props.children}
        <Footer />
    </div>
  )
};

export default Layout;
