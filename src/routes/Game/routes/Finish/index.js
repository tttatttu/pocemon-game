import React, { useContext, useState } from "react";
import s from "./style.module.css";
import { PokemonsContext } from "../../../../context/pokemonsContext";
import PokemonCard from "../../../../components/PokemonCard/index";
import { FireBaseContext } from "../../../../context/firebaseContext";
import { useHistory } from 'react-router-dom';

const FinishPage = () => {
  const { player1, player2, onSelectedPokemons } = useContext(PokemonsContext);
  const firebase = useContext(FireBaseContext);
  const history = useHistory();
  const [pokemons, setPokemons] = useState(player2);

  const setChoiceCard = () => {
    history.push("/game");
    // firebase.addPokemon(newPokemons);
  };

  const handleClickCard = (key, item) => {
    const newPokemons = { ...player2[key] };
    console.log({...item});
    

    

    // setPokemons((prevState) => ({
    //     ...prevState,
    //     [key]: {
    //       ...prevState[key],
    //       selected: !prevState[key].selected,
    //     },
    //   }));
    //   console.log(newPokemons);
  };

  const handleChangeSelected = (key) => {
    const pokemon = { ...pokemons[key] };

    onSelectedPokemons(key, pokemon);

    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }));
    console.log(pokemons[key]);
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
                console.log("Мои герои!");
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
                handleChangeSelected(key);
              }}
            />
          )
        )}
      </div>
    </>
  );
};

export default FinishPage;
