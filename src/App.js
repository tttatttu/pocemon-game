import React, {useState} from "react";
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";

import GamePage from "./routes/GamePage";
import HomePage from "./routes/HomePage";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer/index";
import s from "./style.module.css";
import cn from "classnames";
import {TestContext} from './context/testContext';
import AboutPage from "./routes/AboutPage";
import ContactPage from './routes/ContactPage/index';

const App = () => {
  const [theme, setTheme] = useState('light')
  const match = useRouteMatch("/");

  const handlerChangeTheme = (val) => {
    setTheme(val)
  }

  return (
    <TestContext.Provider value={{ theme, onChangeTheme: handlerChangeTheme}}>
      <Switch>
        <Route path="/404" render={() => <h1> 404 Not Found</h1>} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/welcome" component={HomePage} />
                <Route
                  path="/about"
                  render={() => <h1> This is page About</h1>}
                />
                <Route
                  render={() => {
                    <Redirect to="/404" />;
                  }}
                />
              </Switch>
            </div>

            <Footer />
          </>
        </Route>
      </Switch>
    </TestContext.Provider>
  );
};

export default App;
