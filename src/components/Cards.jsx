import styled from "styled-components";
import { Card } from "./Card";
import { v4 } from "uuid";
import useImage from "../hooks/useImage";

const products = [
   {
      key: v4(),
      name: "Organic Banana",
      price: "$0.35",
      img: "banana",
   },
   {
      key: v4(),
      name: "Organic Avocado",
      price: "$2.15",
      img: "avocado",
   },
   {
      key: v4(),
      name: "Organic Broccoli",
      price: "$1.79",
      img: "broccoli",
   },
   {
      key: v4(),
      name: "Organic Green Kale Bunch",
      price: "$1.49",
      img: "xot",
   },
];

export const Cards = () => {
   const { image, error, loading } = useImage("banana.png");
   console.log(image);
   return (
      <Container>
         {products.map((product, index) => (
            <Card {...product} img={image} index={index} />
         ))}
      </Container>
   );
};

const Container = styled.div`
   flex: 1;

   display: flex;
   flex-direction: row;
   gap: 1.25rem;
`;
