import React, { useState } from "react";
// import s from "./style.module.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import StartPage from "../Game/routes/Start/index";
import BoardPage from "../Game/routes/Board/index";
import FinishPage from "../Game/routes/Finish/index";
import { useRouteMatch } from "react-router-dom";
import { PokemonContext } from "../../context/pokemonComtext";

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemons, setSelectedPokemons] = useState({});

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];

        console.log(copyState);
        return copyState;
      }

      return {
        ...prevState,
        [key]: pokemon,
      };
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: selectedPokemons,
        onSelectedPokemons: handleSelectedPokemons,
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
