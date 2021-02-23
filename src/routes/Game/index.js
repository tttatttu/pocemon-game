import React, { useState } from "react";
// import s from "./style.module.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import StartPage from "../Game/routes/Start/index";
import BoardPage from "../Game/routes/Board/index";
import FinishPage from "../Game/routes/Finish/index";
import { useRouteMatch } from "react-router-dom";
import { PokemonsContext } from "../../context/pokemonsContext";

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [player1Cards, setPlayer1Cards] = useState({});
  const [player2Cards, setPlayer2Cards] = useState({});

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];

        return copyState;
      }

      return {
        ...prevState,
        [key]: pokemon,
      };
    });
  };

  const handleCardsPlayer = (player1, player2) => {
    setPlayer1Cards(player1);
    setPlayer2Cards(player2);
  };

  return (
    <PokemonsContext.Provider
      value={{
        pokemons: selectedPokemons,
        onSelectedPokemons: handleSelectedPokemons,
        onGetCardsPlayer: handleCardsPlayer,
        player1: player1Cards,
        player2: player2Cards,
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonsContext.Provider>
  );
};

export default GamePage;
