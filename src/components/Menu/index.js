import React from "react";
import {Link} from 'react-router-dom'
import s from "./style.module.css";
import cn from "classnames";
import { MENU } from '../../constans/MENU';

const Menu = ({ isOpen, onClickMenu }) => {
  const handleCloseMenu = () => {
    onClickMenu()
  }

  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isOpen === true,
        [s.deactive]: isOpen === false,
      })}
    >
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index}>
              <Link to={to} onClick={handleCloseMenu}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
