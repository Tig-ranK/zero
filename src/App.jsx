import styled from "styled-components";
import { CallToAction } from "./components/CallToAction";
import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

export const App = () => {
   return (
      <GlobalContainer>
         <Header />
         <Navbar />
         <CallToAction />
         <Cards />
      </GlobalContainer>
   );
};

const GlobalContainer = styled.div``;
