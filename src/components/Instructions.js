import React from "react";
import styled from "styled-components";

const Instructions = ({ instructions }) => {
  return (
    <Container>
      <Title>Instructions </Title>
      {instructions.map((instruction, index) => {
        return (
          <ItemContainer key={index}>
            <Index>
              <P>{index + 1}</P>
            </Index>
            <SingleInstruction>{instruction}</SingleInstruction>
          </ItemContainer>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  grid-area: instructions;
`;
const SingleInstruction = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
`;
const Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2994a;
  color: white;
  border-radius: 6px;
  height: 36px;
  width: 36px;
  min-width: 36px;
  min-height: 36px;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin-right: 15px;
`;

const Title = styled.p`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #333333;
`;
const P = styled.p`
  margin-bottom: 4px;
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 15px;
`;

export default Instructions;
