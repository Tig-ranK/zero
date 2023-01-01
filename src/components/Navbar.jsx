import styled from "styled-components";

const categories = [
   "NEW",
   "PRODUCE",
   "DIARY",
   "MEAT",
   "DELI",
   "INTRO",
   "DRINKS",
   "PANTRY",
   "BAKERY ",
   "HOME",
   "PERSONAL",
];

export const Navbar = () => {
   return (
      <Container>
         {categories.map((category) => {
            return (
               <Category href={`/${category.toLowerCase()}`}>
                  {category}
               </Category>
            );
         })}
      </Container>
   );
};

const Container = styled.nav`
   padding-block: 1rem;
   height: 2rem;
   
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

const Category = styled.a`
   color: var(--light-grey);
   
   text-decoration: none;
   text-transform: uppercase;
   font-size: var(--btn-font-size);
   font-weight: 600;
   
   white-space: nowrap;
`;
