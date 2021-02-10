import React, { useContext } from "react";
import s from "./style.module.css";
import { PokemonContext } from "../../../../context/pokemonComtext";
import PokemonCard from "../../../../components/PokemonCard/index";

// import s from './style.module.css';

const BoardPage = () => {
  const { pokemons } = useContext(PokemonContext);
  
  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {Object.values(pokemons).map(
          ({ name, img, id, type, values, selected }) => (
            <PokemonCard
              className={s.card}
              key={id}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              minimize
              isActive
              isSelected={selected}
            />
          )
        )}
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  );
};

export default BoardPage;
