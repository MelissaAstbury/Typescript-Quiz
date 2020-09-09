import styled, { createGlobalStyle, withTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-color: #68abcc;
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Hind Vadodara', sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: withTheme;
  }

  .score {
    color: withTheme;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Hind Vadodara", sans-serif;
    font-size: 50px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    border: 2px solid #5d646f;
    border-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
