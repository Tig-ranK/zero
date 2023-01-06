import styled from "styled-components";
import { CallToAction } from "./CallToAction";
import { Cards } from "./Cards";

export const Hero = () => {
   return (
      <Container>
         <CallToAction />
         <Cards />
      </Container>
   );
};

const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;
