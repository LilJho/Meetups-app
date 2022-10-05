import React from "react";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="w-11/12 max-w-2xl mx-auto my-12">{props.children}</main>
    </div>
  );
}

export default Layout;
