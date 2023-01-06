import styled from "styled-components";

const categories = [
   { id: 0, name: "NEW" },
   { id: 1, name: "PRODUCE" },
   { id: 2, name: "DIARY" },
   { id: 3, name: "MEAT" },
   { id: 4, name: "DELI" },
   { id: 5, name: "INTRO" },
   { id: 6, name: "DRINKS" },
   { id: 7, name: "PANTRY" },
   { id: 8, name: "BAKERY " },
   { id: 9, name: "HOME" },
   { id: 10, name: "PERSONAL" },
];

export const Navbar = () => {
   return (
      <Container>
         {categories.map((category, idx) => {
            return (
               <Category
                  key={category.id}
                  href={`/${category.name.toLowerCase()}`}
               >
                  {category.name}
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
