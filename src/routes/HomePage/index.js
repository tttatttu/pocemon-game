import React from "react";
import BgLayout from "../../assets/bg1.jpg";
import Header from "../../components/Header/index";
import Layout from "../../components/Layout/index";
import GamePage from '../Game/index';


const HomePage = ({ onChangePage }) => {
  const handleClickButton = (page) => {
    console.log("<HomePage />");
    onChangePage && onChangePage(page);
  };

  return (
    <div>
      <Header
        title={"Pokemon game"}
        desc={"pause, strain your brain"}
        onClickButton={handleClickButton}
      />
      <Layout id={1} title="Layout1" desc="test1" urlBg={BgLayout} colorBg={""}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.{" "}
        </p>
      </Layout>
      <Layout
        id={2}
        title="Layout2"
        desc="test3"
        urlBg={""}
        colorBg={"#f2ef94"}
      >
        <GamePage />
      </Layout>
      <Layout id={3} title="Layout3" desc="test3" urlBg={BgLayout} colorBg={""}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.{" "}
        </p>
      </Layout>
    </div>
  );
};

export default HomePage;
