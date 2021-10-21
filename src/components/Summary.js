import React from "react";
import styled from "styled-components";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Summary = ({ summary }) => {
  return (
    <Container>
      <Item>
        <LocalDiningIcon style={{ color: "#F2994A", fontSize: "40px" }} />
        <TextContainer>
          <Name>Yields</Name>
          <Value style={{ color: "#F2994A" }}>{summary.yields}</Value>
        </TextContainer>
      </Item>
      <Item>
        <AccessTimeIcon style={{ fontSize: "40px" }} />
        <TextContainer>
          <Name>Prep Time</Name>
          <Value>{summary.prep_time}</Value>
        </TextContainer>
      </Item>
      <Item>
        <AccessTimeIcon style={{ fontSize: "40px" }} />
        <TextContainer>
          <Name>Cook Time</Name>
          <Value>{summary.cook_time}</Value>
        </TextContainer>
      </Item>
      <Item>
        <AccessTimeIcon style={{ fontSize: "40px" }} />
        <TextContainer>
          <Name>Total Time</Name>
          <Value>{summary.total_time}</Value>
        </TextContainer>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  grid-area: summary;
  justify-self: flex-end;
  margin-top: 48px;
  height: 40%;
  width: 90%;
  min-height: 367px;
  min-width: 216px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 870px) {
    flex-direction: row;
    align-items: center;
    flex-flow: wrap;
    height: 40%;
    width: 100%;
    min-height: 100px;
  }
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 80px;
`;

const Name = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;

  /* Gray 4 */

  color: #bdbdbd;
`;
const Value = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  /* Gray 1 */

  color: #333333;
`;

export default Summary;
