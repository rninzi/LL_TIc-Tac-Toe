//틱택토 게임보드 (블럭의 집합)
import React, { useState } from "react";
import Block from "./Block";
import styled from "styled-components";

const PlayInfo = styled.h3`
  color: black;
`;

const BoardTopBox = styled.div`
  display: flex;
`;
const BoardRow = styled.div``;

const Board = () => {
  const [id, setId] = useState(1);
  const [marker, setMarker] = useState("X");
  const changePlayer = () => {
    if (id === 1) {
      setId(2);
      setMarker("O");
    } else {
      setId(1);
      setMarker("X");
    }
  };
  const gameBoard = Array.from(Array(3), () =>
    Array(3).fill(
      <Block playerId={id} playerMarker={marker} changePlayer={changePlayer} />
    )
  );

  const showBoard = gameBoard.map((item) => <BoardRow>{item}</BoardRow>);

  return (
    <>
      <PlayInfo>
        player1:"X" player2:"O" <br />
        현재 플레이어: player{id}
      </PlayInfo>
      <BoardTopBox>{showBoard}</BoardTopBox>
    </>
  );
};

export default Board;
