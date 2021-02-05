import React, { useState } from "react";
import { POKEMONS } from "../../constans/POKEMONS";
import s from "./style.module.css";
import PokemonCard from "../../components/PokemonCard/index";
import { useHistory } from 'react-router-dom';
import HomePage from '../HomePage/index';

const GamePage = () => {
  const [Pocemons, setPocemons] = useState(POKEMONS);

  const history = useHistory();

  const handleClick = () => {
    history.push('/')
  };;

  const handleClickCard = (id) => {
    setPocemons((prevState) => {
      const newPocemons = JSON.parse(JSON.stringify(prevState));

      return newPocemons.map((card) => {
        if (card.id === id) {
          card.active = !card.active;
        }
        return card;
      });
    });
  };

  return (
    <>
      <div className={s.flex}>
        {Pocemons.map((item) => (
          <PokemonCard
            key={item.id}
            name={item.name}
            img={item.img}
            id={item.id}
            type={item.type}
            values={item.values}
            isActive={item.active}
            onClickCard={handleClickCard}
          />
        ))}
      </div>

      {history.location.pathname === '/game' ? (<button onClick={handleClick} className={s.button}>Go HOME</button>) : null}
    </>
  );
};

export default GamePage;
