// borad의 구성요소가 되는 한 칸(블럭)
import React from "react";
import styled from "styled-components";

const BlockBtn = styled.button`
  background-color: white;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  font-size: 50px;
`;
const Block = () => {
  return (
    <>
      <BlockBtn></BlockBtn>
    </>
  );
};

export default Block;
