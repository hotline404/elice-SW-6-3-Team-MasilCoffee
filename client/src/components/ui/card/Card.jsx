import React from "react";
import styled from "styled-components"

function Card(props) {
  return (
    <div>
      <SCard>{props.children}</SCard>
    </div>
  );
}

export default Card;

const SCard = styled.div`
  display: flex;
  flex-direction: row;
  height: 742px;

  justify-content: center;

  margin-top: 63px;
`;
