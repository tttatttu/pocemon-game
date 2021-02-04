import React, { useState } from "react";
import { POKEMONS } from "../../constans/POKEMONS";
import s from "./style.module.css";
import PokemonCard from "../../components/PokemonCard/index";

const GamePage = () => {
  const [Pocemons, setPocemons] = useState(POKEMONS);

  const handleClick = () => {};

  const handleClickCard = (id) => {
    setPocemons((prevState) => {
      const newPocemons = JSON.parse(JSON.stringify(prevState));

      console.log(newPocemons);

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
      <button onClick={handleClick}>Back</button>

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
    </>
  );
};

export default GamePage;
