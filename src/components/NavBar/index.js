import React, { useState } from "react";
import s from "./style.module.css";
import cn from "classnames";

const NavBar = ({ onClickHamburg, isOpen, bgActive = false }) => {
  return (
    <nav id={s.navbar} className={cn({[s.bgActive]: bgActive})}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div
          className={cn(s.menuButton, {[s.active]: isOpen})}
          onClick={onClickHamburg}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
