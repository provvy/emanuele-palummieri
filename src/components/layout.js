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
    ::after, ::before {
      box-sizing: border-box;
    }
`;
const Main = styled.main`
  background-color: #1e1c19;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 94px;
  min-height: calc(100vh - 177px);
  @media screen and (max-width: 951px) {
    padding-top: 83px;
  }
  @media screen and (max-width: 445px) {
    padding-top: 75px;
  }
  @media screen and (max-width: 362px) {
    padding-top: 71px;
  }
`;
