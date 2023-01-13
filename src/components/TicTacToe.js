//전체 틱택토 컴포넌트들의 집합이 되는 최상위 컴포넌트
import React from "react";
import Board from "./Board";
import styled from "styled-components";

const GameBox = styled.div`
  margin-left: 10px;
  text-align: center;
`;

const TicTacToe = () => {
  return (
    <GameBox>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </GameBox>
  );
};

export default TicTacToe;
