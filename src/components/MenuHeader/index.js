import React, {useState} from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {


  const [isActive, setActive] = useState(false);

  const handleChangeMenu = (isActive) => {
    setActive(isActive)
  }

  switch (isActive) {
    case true:
      return <Menu onClickMenu={handleChangeMenu} isActive={isActive}/>;
    case false:
      return <NavBar onClickMenu={handleChangeMenu} isActive={isActive}/>;
    default:
      return <NavBar onClickMenu={handleChangeMenu} isActive={isActive}/>;
  }

};

export default MenuHeader;
