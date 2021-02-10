import React, { useState } from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = ({bgActive}) => {
  const [isOpen, setOpen] = useState(null);

  const handleClickHamburg = () => {
    setOpen(prevState => !prevState)
  };

  return (
    <>
      <Menu onClickMenu={handleClickHamburg} isOpen={isOpen} />
      <NavBar onClickHamburg={handleClickHamburg} isOpen={isOpen} bgActive={bgActive} />
    </>
  );
};

export default MenuHeader;
