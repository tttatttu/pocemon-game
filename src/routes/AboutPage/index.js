import React, { useContext } from "react";
import {TestContext} from "../../context/testContext";

const AboutPage = () => {
  const themeContext = useContext(TestContext);
  const handlerClick = () => {
      themeContext.onChangeTheme(themeContext.theme === 'light' ? 'dark' : 'light')
  };
  console.log(themeContext);
  return (
    <>
      <h1> This is AboutPage </h1>
      <button onClick={handlerClick}>Change Theme</button>
    </>
  );
};

export default AboutPage;
