import React from "react";
import styled from "styled-components";
import Image from "../components/Image";
import Ingredients from "../components/Ingredients";
import Title from "../components/Title";
import Summary from "../components/Summary";
import Instructions from "../components/Instructions";
import { CheescakeRecipe } from "../data";

const Recipe = () => {
  const { title, image, ingredients, instructions, summary } = CheescakeRecipe;
  return (
    <Container>
      <Title title={title} />
      <Image image={image} />
      <Ingredients ingredients={ingredients} />
      <Summary summary={summary} />
      <Instructions instructions={instructions} />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  padding-left: 16%;
  padding-right: 16%;
  display: grid;
  grid-template-rows: 20% auto auto auto;
  grid-template-columns: 70% 30%;
  grid-template-areas:
    "title title"
    "image image"
    "ingredients summary"
    "instructions none";
  overflow-y: scroll;

  @media (max-width: 870px) {
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 100%;
    grid-template-areas:
      "title"
      "image"
      "summary"
      "ingredients"
      "instructions";
    padding-left: 3%;
    padding-right: 3%;
  }
`;
export default Recipe;
