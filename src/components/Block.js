// borad의 구성요소가 되는 한 칸(블럭)
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { boardInfo } from "../atom/boardInfo";

const BlockBtn = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  font-size: 50px;
  text-align: center;
  line-height: 100px;
  font-weight: bolder;
`;

const Block = ({
  index,
  playerMarker,
  changePlayer,
  findWinner,
  showWinner,
}) => {
  // block단위 marker 정보
  const [marker, setMarker] = useState("");
  // board 전체의 marker 표시 여부 정보
  const [nowBoardInfo, setBoardInfo] = useRecoilState(boardInfo);

  const onBlockClick = () => {
    const hasWinner = showWinner();
    // 블럭 마커 표시 여부 판별 (중복 방지)
    if (marker === "" && hasWinner === null) {
      // 각 인덱스 별 marker 정보 저장해주기
      const newBoardInfo = nowBoardInfo.map((item) => item);
      newBoardInfo[index] = playerMarker;
      setBoardInfo(newBoardInfo);
      setMarker(playerMarker);
      changePlayer();
    }
    findWinner();
  };
  return (
    <>
      <BlockBtn onClick={onBlockClick}>{marker}</BlockBtn>
    </>
  );
};

export default Block;
