import React from "react";
import styled from "styled-components";

const Image = ({ image }) => {
  return (
    <Container>
      <Img src={image} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: image;
  height: 100%;
  margin-top: 30px; ;
`;

const Img = styled.img`
  object-fit: fill;
  height: 100%;
  width: 100%;
  min-height: 213px;
`;

export default Image;
