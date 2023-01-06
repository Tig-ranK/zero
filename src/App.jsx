import styled from "styled-components";
// Components
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

export const App = () => {
   return (
      <GlobalContainer>
         <Header />
         <Navbar />
         <Hero />
      </GlobalContainer>
   );
};

const GlobalContainer = styled.div`
   display: grid;
   grid-template-columns: 2.5rem auto 2.5rem;

   > * {
      grid-column: 2 / -2;
   }
`;
