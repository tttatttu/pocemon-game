import React, { useState, useEffect, useContext } from "react";
import s from "./style.module.css";

import { useHistory } from "react-router-dom";

import PokemonCard from "../../../../components/PokemonCard/index";
import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonComtext";

const DATA = {
  abilities: ["keen-eye", "tangled-feet", "big-pecks"],
  base_experience: 122,
  height: 11,
  id: 666,
  img:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
  name: "pidgeotto",
  stats: {
    attack: 60,
    defense: 55,
    hp: 63,
    "special-attack": 50,
    "special-defense": 50,
    speed: 71,
  },
  type: "flying",
  values: {
    bottom: 7,
    left: 5,
    right: 2,
    top: "A",
  },
};

const StartPage = () => {
  // console.log(value);
  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext)
  const [pokemons, setPokemons] = useState({});

  // const pokemonContext = useContext(PokemonContext);
  console.log(pokemonContext);

  // PokemonContext.onChangeCard()

  // const getPokemons = async () => {
  //   const response = await firebase.getPokemonsOnce();

  // };

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const handleChangeActive = (id) => {
    console.log(id);
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };

        if (pokemon.id === id  && !pokemon.isSelected) {
          
          pokemon.active = true;
          pushToContext(item)
          
        }
        
        acc[item[0]] = pokemon;

        firebase.postPokemon(item[0], pokemon);
        // pokemonContext.onChangeCard(pokemon);

        return acc;
      }, {});
    });
  };

  const pushToContext = (val) => {
    // console.log(val);
    pokemonContext.pokemon.push(val)
  }
  const handleAddPokemon = () => {
    const data = pushToContext;

    firebase.addPokemon(pokemonContext);
  };

  return (
    <>
      {history.location.pathname === "/game" ? (
        <button onClick={handleAddPokemon} className={s.button}>
          Start Game
        </button>
      ) : null}
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values }]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              onClickCard={handleChangeActive}
              minimize
              className={s.card}
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
