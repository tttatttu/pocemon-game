import React, { useState, useEffect, useContext } from "react";
import s from "./style.module.css";

import { useHistory } from "react-router-dom";

import PokemonCard from "../../../../components/PokemonCard/index";
import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonsContext } from "../../../../context/pokemonsContext";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getPokemonsAsync,
  selectPokemonsData,
  selectPokemonsLoading,
} from "../../../../store/pokemons";

const StartPage = () => {
  const pokemonsContext = useContext(PokemonsContext);
  const isLoading = useSelector(selectPokemonsLoading);
  const pokemonsRedux = useSelector(selectPokemonsData);
  const dispatch = useDispatch();
  const history = useHistory();
  const [pokemons, setPokemons] = useState(pokemonsRedux);

  useEffect(() => {
    dispatch(getPokemonsAsync());
  }, []);

  useEffect(() => {
    setPokemons(pokemonsRedux);
  }, [pokemonsRedux]);

  const handleClick = () => {
    history.push("/");
  };

  const handleChangeSelected = (key) => {
    const pokemon = { ...pokemons[key] };

    pokemonsContext.onSelectedPokemons(key, pokemon);

    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }));
  };

  const handleStartGameClick = () => {
    history.push("/game/board");
  };

  return (
    <>
      {history.location.pathname === "/game" ? (
        <button
          className={s.button}
          onClick={handleStartGameClick}
          disabled={Object.keys(pokemonsContext.pokemons).length < 5}
        >
          Start Game
        </button>
      ) : null}
      <div className={s.flex}>
        {Object.entries(pokemons).map(
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
                if (
                  Object.keys(pokemonsContext.pokemons).length < 5 ||
                  selected
                ) {
                  handleChangeSelected(key);
                }
              }}
            />
          )
        )}
      </div>

      {history.location.pathname === "/game" ? (
        <button onClick={handleClick} className={s.button}>
          Go HOME
        </button>
      ) : null}
    </>
  );
};

export default StartPage;
