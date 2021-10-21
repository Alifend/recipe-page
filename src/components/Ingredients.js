import React from "react";
import styled from "styled-components";

const Ingredients = ({ ingredients }) => {
  return (
    <Container>
      <Title>Ingredients</Title>
      {ingredients.map((ingredient, index) => {
        return (
          <Subtitle key={index}>
            <Name>{ingredient.subtitle} </Name>
            {ingredient.items.map((item, index) => {
              return (
                <ItemContainer key={index}>
                  <CheckBox type="checkbox" />
                  <Item>{item}</Item>
                </ItemContainer>
              );
            })}
          </Subtitle>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  grid-area: ingredients;
  margin-top: 55px;
`;

const Title = styled.p`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #333333;
`;
const Subtitle = styled.ul`
  margin: 32px;
  font-family: Playfair Display;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  list-style-type: none;
`;
const Item = styled.li`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const CheckBox = styled.input`
  margin: 10px;
  width: 21px;
  min-height: 21px;
  min-width: 21px;
  height: 21px;
`;

const Name = styled.p`
  margin: 15px;
`;

export default Ingredients;
