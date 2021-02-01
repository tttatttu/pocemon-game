import React, {useState} from "react";
import s from './style.module.css'
import cn from 'classnames'

const NavBar = ({onClickMenu, isActive}) => {

  const handleClick = () => {
    onClickMenu && onClickMenu(!isActive)
  }

  

  return (
    
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a className={cn(s.menuButton, {[s.active]: isActive})} onClick={handleClick}>
          <span />
        </a>
      </div>
    </nav>
    
  );
};

export default NavBar;
