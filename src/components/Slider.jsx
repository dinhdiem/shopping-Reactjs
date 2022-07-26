import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  background-color: white;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(item) => item.slideItem * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: #${(item) => item.bg};
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  position: absolute;
  padding: 50px;
  top: 25%;
  margin: auto;
  left: 0;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideItem, setSlideItem] = useState(0);

  const hanlerClick = (direction) => {
    if (direction === "left") {
      setSlideItem(slideItem > 0 ? slideItem - 1 : 2);
    } else {
      setSlideItem(slideItem < 2 ? slideItem + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => hanlerClick("left")}>
        <ArrowLeftOutlined style={{ fontSize: 40 }} />
      </Arrow>
      <Wrapper slideItem={slideItem}>
        {sliderItems.map((item) => {
          return (
            <Slide key={item.id} bg={item.bg}>
              <ImageContainer>
                <Image src={item.img} />
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>Show Now</Button>
                </InfoContainer>
              </ImageContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => hanlerClick("right")}>
        <ArrowRightOutlined style={{ fontSize: 40 }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
