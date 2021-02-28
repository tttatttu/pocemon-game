import React from "react";
import s from "./style.module.css";
import cn from "classnames";
import Logo from "../../assets/logo1.png";
import { ReactComponent as LoginSvg } from "../../assets/login.svg";

const NavBar = ({ onClickHamburg, isOpen, bgActive = false, onClickLogin }) => {
  return (
    <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <div className={s.brand}>
          <img className={s.logo} src={Logo} alt="logo" />
        </div>
        <div className={s.loginAndMenu}>
          <div className={s.loginWrap} onClick={onClickLogin}>
            <LoginSvg />
          </div>
          <div
            className={cn(s.menuButton, { [s.active]: isOpen })}
            onClick={onClickHamburg}
          >
            <span />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
