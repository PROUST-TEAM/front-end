import React from "react";
import styled from "styled-components";

const MbtiResultWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
`;
const MbtiResultContent = styled.div``;

export default function MbtiResult() {
  return (
    <MbtiResultWrap>
      <MbtiResultContent></MbtiResultContent>
    </MbtiResultWrap>
  );
}
