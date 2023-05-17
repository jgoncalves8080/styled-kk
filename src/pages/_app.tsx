import { GlobalStyle, theme } from "@/styles";
import type { AppProps } from "next/app";
import {ThemeProvider} from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
