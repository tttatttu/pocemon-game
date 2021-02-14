import React, { useContext } from "react";
import s from "./style.module.css";
import { PokemonsContext } from "../../../../context/pokemonsContext";
import PokemonCard from "../../../../components/PokemonCard/index";

const FinishPage = () => {
  const { player1, player2 } = useContext(PokemonsContext);

  const setChoiceCard = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className={s.flex}>
        {Object.entries(player1).map(
          ([key, { name, img, id, type, values, selected }]) => (
            <PokemonCard
              className={s.card}
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              isSelected={selected}
              onClickCard={() => {
                console.log("object");
              }}
            />
          )
        )}
      </div>

      <button className={s.button} onClick={setChoiceCard}>
        END GAME
      </button>

      <div className={s.flex}>
        {Object.entries(player2).map(
          ([key, { name, img, id, type, values, selected }]) => (
            <PokemonCard
              className={s.card}
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              isSelected={selected}
              onClickCard={() => {
                console.log("object");
              }}
            />
          )
        )}
      </div>
    </>
  );
};

export default FinishPage;
