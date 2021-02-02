import React from "react";
import { useState } from "react";
import GamePage from "./routes/GamePage";
import HomePage from "./routes/HomePage";

const App = () => {
  const [page, setPage] = useState("app");

  const handleChangePage = (page) => {
    console.log('<App />');
    setPage(page)
  }

  switch (page) {
    case "app":
      return <HomePage onChangePage={handleChangePage} />;
    case "game":
      return <GamePage />;
    default:
      return <HomePage />;
  }
};

export default App;
