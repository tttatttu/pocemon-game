import React, { useState } from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
  const [isActive, setActive] = useState(false);

  const handleChangeMenu = (isActive) => {
    console.log(isActive);
    setActive(isActive);
  };

  return (
    <>
      <Menu onClickMenu={handleChangeMenu} isActive={isActive} />
      <NavBar onClickMenu={handleChangeMenu} isActive={isActive} />
    </>
  );
};

export default MenuHeader;
