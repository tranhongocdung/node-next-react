import * as React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="container container-fluid">
      <Navbar></Navbar>
      <div className="container pt-3">{children}</div>
    </div>
  );
};

export default Layout;
