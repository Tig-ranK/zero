import styled from "styled-components";

export const Card = ({ name, price, img, index }) => {
   return (
      <Container>
         <Img src={img} alt={name} />
         <Name>{name}</Name>
         <Price>{price}</Price>
         <Button>ADD</Button>
      </Container>
   );
};

const Container = styled.div`
   padding-inline: 1rem;
   padding-bottom: 1.75rem;

   width: 13rem;
   height: 14.5rem;

   font-weight: 700;

   background-color: var(--pink);
   /* TODO dynamic bg-color based on index */
`;

const Name = styled.p`
   font-size: 0.75rem;
   color: var(--grey);
`;

const Price = styled.p`
   font-size: 24px;
   line-height: 29px;

   color: var(--black);
`;

const Button = styled.button`
   height: 1.75rem;
   width: 3rem;
   font-family: inherit;
   font-weight: 700;
   font-size: var(--btn-font-size);

   color: var(--black);
   border: 2px solid var(--black);
   background-color: transparent;

   display: flex;
   justify-content: center;
   align-items: center;

   cursor: pointer;
`;

const Img = styled.img`
   max-width: 100%;
   max-height: 50%; 
`;
