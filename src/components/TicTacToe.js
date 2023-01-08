//전체 틱택토 컴포넌트들의 집합이 되는 최상위 컴포넌트
import React from "react";
import Board from "./Board";

const TicTacToe = () => {
  return (
    <div>
      <h2>Tic-Tac-Toe</h2>
      <Board />
    </div>
  );
};

export default TicTacToe;
