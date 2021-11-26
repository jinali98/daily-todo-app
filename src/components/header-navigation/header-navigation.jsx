import React from "react";

import useScreenSize from "../../effects/useScreenSize";
import DrawerNavigation from "../Drawer/drawer";

import Header from "../header/header.component";

const HeaderNavigation = () => {
  const isScreenSmall = useScreenSize();
  return <>{isScreenSmall ? <DrawerNavigation /> : <Header />}</>;
};

export default HeaderNavigation;
