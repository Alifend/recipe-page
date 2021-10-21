import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <Container>
      <Name>{title.name} </Name>
      <Description>{title.description}</Description>
    </Container>
  );
};

const Container = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Name = styled.p`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 64px;
  @media (max-width: 870px) {
    font-size: 24px;
  }
`;
const Description = styled.p`
  margin-left: 30px;
  width: 40%;
  font-family: Montserrat;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  margin-top: 12px;
  @media (max-width: 870px) {
    width: 80%;
    margin-top: 6px;
  }
`;

export default Title;
