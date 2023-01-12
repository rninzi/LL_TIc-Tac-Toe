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
  const gameBoard = Array.from(Array(9), (_, index) => (
    <Block index={index} playerMarker={marker} changePlayer={changePlayer} />
  ));
  // 1차원 형태의 gameBoard 3*3 형태로 나누기 위해 긁어온 코드... 새로운 방식의 접근이 필요할 거 같다.
  Array.prototype.division = function (n) {
    const arr = this;
    const len = arr.length;
    const cnt = Math.floor(len / n);
    const tmp = [];

    for (let i = 0; i <= cnt; i++) {
      tmp.push(arr.splice(0, n));
    }

    return tmp;
  };
  const divideBoard = gameBoard.division(3);
  const showBoard = divideBoard.map((item) => <BoardRow>{item}</BoardRow>);

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
