import React, { useContext } from "react";
import s from "./style.module.css";
import { PokemonContext } from "../../../../context/pokemonComtext";
import PokemonCard from "../../../../components/PokemonCard/index";

const BoardPage = () => {
  const SelectedContext = useContext(PokemonContext);
  console.log(SelectedContext);
  
  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {SelectedContext.pokemon.map(
          ([key, { name, img, id, type, values }]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              minimize
              className={s.card}
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
