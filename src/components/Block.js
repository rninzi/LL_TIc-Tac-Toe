// borad의 구성요소가 되는 한 칸(블럭)
import React, { useState } from "react";
import styled from "styled-components";

const BlockBtn = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  font-size: 50px;
  text-align: center;
  line-height: 100px;
`;
const Block = ({ playerMarker, changePlayer }) => {
  const [marker, setMarker] = useState("");

  const onBlockClick = () => {
    if (marker === "") {
      // 블럭 마커 표시 여부 판별 (중복 방지)
      setMarker(playerMarker);
      changePlayer();
    }
  };
  return (
    <>
      <BlockBtn onClick={onBlockClick}>{marker}</BlockBtn>
    </>
  );
};

export default Block;
