import styled from "styled-components";
import { CallToAction } from "./components/CallToAction";
import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

export const App = () => {
   return (
      <GlobalContainer>
         <Header />
         {/* <Navbar />
         <CallToAction />
         <Cards /> */}
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
