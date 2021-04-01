import { createGlobalStyle, ThemeProvider } from "styled-components";
import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%; 
  }

  body {
    font-size: 1.6rem; 
    padding: 0;
    margin: 0;
    font-family: Helvetica Neue, Roboto, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

//Global variables for styled components
const theme = {
  colors: {
    black: "#000000",
    white: "ffffff",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
