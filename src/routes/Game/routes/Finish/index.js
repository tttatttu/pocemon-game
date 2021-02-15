import React, { useContext } from "react";
import s from "./style.module.css";
import { PokemonsContext } from "../../../../context/pokemonsContext";
import PokemonCard from "../../../../components/PokemonCard/index";
import { FireBaseContext } from "../../../../context/firebaseContext";
import { useHistory } from 'react-router-dom';

const FinishPage = () => {
  const { player1, player2 } = useContext(PokemonsContext);
  const firebase = useContext(FireBaseContext);
  const history = useHistory();

  const setChoiceCard = () => {
    history.push("/game");
  };

  const handleClickCard = (key) => {
    const newPokemons = { ...player2[key] };

    firebase.addPokemon(newPokemons);
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
                handleClickCard(key);
              }}
            />
          )
        )}
      </div>
    </>
  );
};

export default FinishPage;
