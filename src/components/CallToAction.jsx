import styled from "styled-components";

export const CallToAction = () => {
   return (
      <Container>
         <Slogan>Zero-waste groceries, delivered fast.</Slogan>
         <Button>START SHOPPING</Button>
      </Container>
   );
};

const Container = styled.div`
   flex: 1;
   overflow-y: hidden;
`;

const Slogan = styled.h1`
   color: var(--black);
   font-weight: 700;
   font-size: var(--big-font-size);
   line-height: var(--big-line-height);
`;

const Button = styled.button`
   color: var(--white);
   background-color: var(--black);
   border: none;
   padding: 1.5em 2.5em;
   font-family: inherit;
   font-size: var(--btn-font-size);
   font-weight: 700;
   
   cursor: pointer;
`;
