//틱택토 게임보드 (블럭의 집합)
import React, { useEffect, useState } from "react";
import Block from "./Block";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { boardInfo } from "../atom/boardInfo";

const PlayInfo = styled.h3`
  color: black;
  font-style: italic;
`;

const PlayerInfo = styled.b`
  color: blue;
  font-style: normal;
`;

const WinnerInfo = styled.h2`
  color: #1b53eb;
`;

const BoardTopBox = styled.div`
  display: flex;
  justify-content: center;
`;
const BoardRow = styled.div``;

const Board = () => {
  const [playerId, setPlayerId] = useState(1);
  const [marker, setMarker] = useState("X");
  const currentBoardInfo = useRecoilValue(boardInfo);
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    showWinner();
  });

  //player 순서 전환
  const changePlayer = () => {
    setTurn(turn + 1);
    if (playerId !== null) {
      if (playerId === 1) {
        setPlayerId(2);
        setMarker("O");
      } else {
        setPlayerId(1);
        setMarker("X");
      }
    }
  };

  // 승리 조건에 따른 승자 판별
  const findWinner = () => {
    const lines = [
      //가로 승리 조건
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //세로 승리 조건
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //대각 승리 조건
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        currentBoardInfo[a] &&
        currentBoardInfo[a] === currentBoardInfo[b] &&
        currentBoardInfo[a] === currentBoardInfo[c]
      ) {
        return currentBoardInfo[a];
      }
    }
    return null;
  };

  // 승자 판별 여부에 따른 승자 설정
  const showWinner = () => {
    const result = findWinner();
    if (result !== null) {
      if (result === "X") {
        return setWinner(1);
      } else if (result === "O") {
        return setWinner(2);
      }
    } else if (turn === 9) {
      // 무승부로 게임이 끝난 경우
      return setWinner(3);
    } else {
      return null;
    }
  };

  const gameBoard = Array.from(Array(9), (_, index) => (
    <Block
      boardInfo={boardInfo}
      index={index}
      playerMarker={marker}
      changePlayer={changePlayer}
      findWinner={findWinner}
      showWinner={showWinner}
    />
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
        player1: "X" player2: "O" <br />
        {winner === null && (
          <PlayerInfo>Now Player: player{playerId}</PlayerInfo>
        )}
      </PlayInfo>
      <BoardTopBox>{showBoard}</BoardTopBox>
      {winner !== null && winner !== 3 ? (
        <WinnerInfo>Winner is player"{winner}"!!</WinnerInfo>
      ) : (
        winner === 3 && <h2>--Draw--</h2>
      )}
    </>
  );
};

export default Board;
