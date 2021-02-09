import React, { useState, useEffect, useContext } from "react";
import s from "./style.module.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import StartPage from "../Game/routes/Start/index";
import BoardPage from "../Game/routes/Board/index";
import FinishPage from "../Game/routes/Finish/index";
import { useRouteMatch } from "react-router-dom";
import { PokemonContext } from "../../context/pokemonComtext";
import Firebase from "../../service/firebase";

const GamePage = () => {
  const match = useRouteMatch();

  const [pokemon, setPokemon] = useState([]);

  // minimize: {'max-width': '30px', 'max-height': '40px'}

  const handlerIsSelect = (val) => {
    setPokemon(val);
  };

  console.log(pokemon);

  return (
    <PokemonContext.Provider value={{ pokemon, inSelect: handlerIsSelect }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
