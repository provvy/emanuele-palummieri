import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        box-sizing: border-box;
        * {
            margin: 0;
            padding: 0;
            list-style-type: none;
            box-sizing: border-box;
        }
    }
`;
const Main = styled.div`
  background-color: #1e1c19;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
