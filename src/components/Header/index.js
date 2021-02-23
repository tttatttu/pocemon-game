import React from "react";
import {useHistory} from 'react-router-dom'
import s from "./style.module.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { plusAction, selectCount } from '../../store/counter';

const Header = ({ title, desc, onClickButton }) => {
  const history = useHistory();

  // const count = useSelector(selectCount)
  // const dispatch = useDispatch()
  // console.log('count', count);

  const handleClick = () => {
    history.push('/game')
    // dispatch(plusAction(1))
  };

  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.silhouette}></div>
      <div className={s.moon}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <button className={s.button} onClick={handleClick}>Start Game</button>
      </div>
    </header>
  );
};

export default Header;
