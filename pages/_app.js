import Layout from "../components/Layout";
import "../styles/global.css";
import "../styles/rate.css"
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <div className="text-slate-700">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      </div>
  );
}

export default MyApp;
