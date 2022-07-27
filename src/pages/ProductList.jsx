import styled from "styled-components";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
  margin-bottom: 20px;
`;
const FilerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin-bottom: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Title>Dresses</Title>
      <FilerContainer>
        <Filter>
          <FilterText>Filer Products: </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>xs</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>Price (ASC)</Option>
            <Option>Price (DESC)</Option>
          </Select>
        </Filter>
      </FilerContainer>
      <Products />
      <NewsLetter />
    </Container>
  );
};

export default ProductList;
