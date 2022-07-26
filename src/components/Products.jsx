import styled from "styled-components";

import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const products = () => {
  return (
    <Container>
      {popularProducts.map((item) => {
        console.log(item);
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default products;
