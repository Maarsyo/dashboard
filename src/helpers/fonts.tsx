import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import App from '../App';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  
`;

const GlobalStyle = createGlobalStyle`
  *{
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family:"Borda";
  }

  @font-face {
    src: local('Borda'), url(./assets/Borda.ttf) format('truetype');
    font-family: 'Borda';
    src: url('./assets/Borda.ttf');
  }
  @font-face {
    font-family: 'BordaMedium';
    src: url(./assets/Borda-Medium.ttf);
  }
  @font-face {
    font-family: 'BordaBold';
    src: url(./assets/Borda-Bold.ttf);
  }
  @font-face {
    font-family: 'BordaLight';
    src: url(./assets/Borda-Light.ttf);
  }
  @font-face {
    font-family: 'BordaExtraBold';
    src: url(./assets/Borda-Extrabold.ttf);
  }
  @font-face {
    font-family: 'BordaItalic';
    src: url(./assets/Borda-Italic.ttf);
  }
  @font-face {
    font-family: 'BordaDemiBold';
    src: url(./assets/Borda-DemiBold.ttf);
  }
`;
const Fonts = () => {
  return (
    <Container>
      <GlobalStyle />
      <App />
    </Container>
  )
}

export default Fonts;