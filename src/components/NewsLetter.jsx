import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-style: 24px;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  border: none;
  flex: 1;
  color: white;
  background-color: teal;
`;

const NewsLetter = () => {
  return (
    <div>
      <Container>
        <Title>NewsLetter</Title>
        <Desc>Get timely update from your favorite products</Desc>
        <InputContainer>
          <Input placeholder="Your Email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Container>
    </div>
  );
};

export default NewsLetter;
