import { useState } from "react";
import styled from "styled-components";
// Images
import arrow from "../assets/images/arrow.svg";
import logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import basket from "../assets/images/basket.svg";

export const Header = () => {
   const [items, setItems] = useState(0);

   return (
      <Container>
         <BusinessLink href="#">
            Zero for business
            <Img src={arrow} alt="" />
         </BusinessLink>
         <Logo src={logo} alt="logo of Zero" />
         <RightSector>
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
            <Button onClick={() => alert("Search")}>
               <img src={search} alt="" />
            </Button>
            <Button onClick={() => alert("Basket")}>
               <img src={basket} alt="" />
               <Items>{items} ITEMS</Items>
            </Button>
         </RightSector>
      </Container>
   );
};

const Container = styled.header`
   display: flex;
   flex-direction: row;
   height: 2rem;
   padding-block: 1rem;

   border-bottom: 1px solid var(--grey);
`;

const BusinessLink = styled.a`
   text-transform: uppercase;
   color: var(--green);
   font-weight: 700;
   font-size: var(--main-font-size);
   text-decoration: none;

   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 1.5rem;
   flex: 1;
`;

const Img = styled.img`
   height: 50%;
`;

const Logo = styled.img`
   flex: 1;
   height: 100%;
`;

const RightSector = styled.div`
   flex: 1;
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   align-items: center;
   gap: 1rem;

   > a {
      text-transform: uppercase;
      color: var(--black);
      font-weight: 700;
      font-size: var(--main-font-size);
      text-decoration: none;
      white-space: nowrap;
   }
`;

const Button = styled.button`
   background-color: var(--black);
   color: var(--white);

   border-radius: 1.25rem;
   border: none;

   font-family: inherit;
   font-size: var(--btn-font-size);

   display: flex;
   justify-content: center;
   align-items: center;
   gap: 0.25rem;
   padding: 0.6em 0.8rem;

   cursor: pointer;

   /* TODO somehow inherit styles from this component, need padding to be customizable */
`;

const Items = styled.span`
   white-space: nowrap;
`;
