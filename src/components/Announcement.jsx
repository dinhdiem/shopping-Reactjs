import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Announcement</Container>;
};

export default Announcement;
