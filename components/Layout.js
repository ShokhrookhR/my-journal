import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import SideComments from './SideComments/SideComments';

const Layout = ({ children }) => {
  const [isCommentsVisible, setCommentsVisible] = React.useState(true);
  return (
    <div className="grid gap-5">
      <Header />
      <div className="container flex justify-between gap-5 pt-[60px]">
        <Navbar />
        {children}
        {isCommentsVisible && <SideComments />}
      </div>
    </div>
  );
};

export default Layout;
