import React, { useState, useEffect } from "react";
import s from "./style.module.css";
import PokemonCard from "../../components/PokemonCard/index";
import { useHistory } from "react-router-dom";

import database from "../../service/firebase";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});
  const [card, setCard] = useState();

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const handleClickAddCard = () => {
    const newKey = database.ref().child("pokemons").push().key;

    if (card[0] === newKey) {
      console.log("Такой покемон уже есть в куче");
    } else {
      database
        .ref("pokemons/" + newKey)
        .set(card[1])
        .then(
          setPokemons((prevState) => {
            return { ...prevState, [newKey]: card[1] };
          })
        );
    }
  };

  const handleClickCard = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };

        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }

        setCard(item);

        acc[item[0]] = pokemon;

        return acc;
      }, {});
    });
  };

  return (
    <>
      {history.location.pathname === "/game" ? (
        <button onClick={handleClickAddCard} className={s.button}>
          Add New Pokemon
        </button>
      ) : null}
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, active }]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={active}
              onClickCard={handleClickCard}
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

export default GamePage;
