import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) => {
    con
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
};

export default Layout;
